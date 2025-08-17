# Talent Assessment Platform - Deployment Guide

## Overview
This document outlines the deployment pipeline for the Talent Assessment Platform, showcasing AWS skills, CI/CD, and cloud deployment capabilities.

## Architecture
- **Frontend**: Next.js 14 with TypeScript
- **Containerization**: Docker with multi-stage builds
- **CI/CD**: GitHub Actions
- **Container Registry**: Amazon ECR
- **Orchestration**: Amazon EKS (Kubernetes)
- **Security**: Trivy vulnerability scanning
- **Monitoring**: CloudWatch integration

## Prerequisites
- AWS CLI configured with appropriate permissions
- kubectl installed and configured
- Docker installed locally
- GitHub repository with secrets configured

## AWS Setup

### 1. Create EKS Cluster
```bash
# Using eksctl (recommended)
eksctl create cluster \
  --name talent-assessment-cluster \
  --region us-east-1 \
  --nodegroup-name standard-workers \
  --node-type t3.medium \
  --nodes 3 \
  --nodes-min 1 \
  --nodes-max 4 \
  --managed

# Or using AWS Console
# Navigate to EKS > Clusters > Create cluster
```

### 2. Create ECR Repository
```bash
aws ecr create-repository \
  --repository-name talent-assessment-app \
  --region us-east-1
```

### 3. Configure IAM Roles
Create an IAM user with the following policies:
- `AmazonEC2ContainerRegistryFullAccess`
- `AmazonEKSClusterPolicy`
- `AmazonEKSWorkerNodePolicy`

## GitHub Secrets Configuration
Add these secrets to your GitHub repository:
- `AWS_ACCESS_KEY_ID`: Your AWS access key
- `AWS_SECRET_ACCESS_KEY`: Your AWS secret key

## Local Development

### 1. Build and Test
```bash
# Install dependencies
npm install

# Run tests
npm test

# Build application
npm run build

# Start development server
npm run dev
```

### 2. Docker Build
```bash
# Build image
docker build -t talent-assessment-app .

# Run locally
docker run -p 3000:3000 talent-assessment-app
```

## CI/CD Pipeline

### Workflow Overview
1. **Test**: Runs linting, tests, and builds
2. **Security Scan**: Trivy vulnerability scanning
3. **Build & Push**: Docker build and ECR push
4. **Deploy**: Kubernetes deployment to EKS
5. **Notify**: Deployment status notification

### Pipeline Triggers
- **Push to main**: Full deployment pipeline
- **Push to develop**: Testing and security scanning only
- **Pull Request**: Testing and security scanning

## Deployment

### 1. Initial Deployment
```bash
# Apply Kubernetes manifests
kubectl apply -f k8s/

# Verify deployment
kubectl get pods -l app=talent-assessment-app
kubectl get services
kubectl get ingress
```

### 2. Update Deployment
```bash
# Update image (automated via GitHub Actions)
kubectl set image deployment/talent-assessment-app \
  talent-assessment-app=<new-image-tag>

# Check rollout status
kubectl rollout status deployment/talent-assessment-app
```

## Monitoring and Logs

### 1. Pod Logs
```bash
# Get pod logs
kubectl logs -l app=talent-assessment-app

# Follow logs
kubectl logs -f -l app=talent-assessment-app
```

### 2. CloudWatch Integration
- Application logs are automatically sent to CloudWatch
- Set up CloudWatch dashboards for monitoring
- Configure alarms for critical metrics

### 3. Health Checks
- **Liveness Probe**: `/` endpoint, 30s initial delay
- **Readiness Probe**: `/` endpoint, 5s initial delay

## Security Features

### 1. Vulnerability Scanning
- **Trivy**: Scans Docker images and dependencies
- **GitHub Security**: Results uploaded to Security tab
- **Automated**: Runs on every PR and push

### 2. Container Security
- Non-root user execution
- Minimal base image (Alpine Linux)
- Multi-stage builds for smaller attack surface

### 3. Network Security
- Internal service communication only
- Ingress controller for external access
- SSL/TLS termination at load balancer

## Scaling and Performance

### 1. Horizontal Pod Autoscaling
```yaml
# Add to deployment.yaml
spec:
  template:
    spec:
      containers:
      - name: talent-assessment-app
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
```

### 2. Load Balancing
- EKS automatically distributes traffic across pods
- ALB Ingress Controller handles external traffic
- Health checks ensure only healthy pods receive traffic

## Troubleshooting

### Common Issues

#### 1. Pod Startup Failures
```bash
# Check pod events
kubectl describe pod <pod-name>

# Check logs
kubectl logs <pod-name>
```

#### 2. Image Pull Errors
```bash
# Verify ECR credentials
kubectl get secrets

# Check image pull policy
kubectl get deployment talent-assessment-app -o yaml
```

#### 3. Service Connectivity
```bash
# Test service connectivity
kubectl run test-pod --image=busybox --rm -it --restart=Never -- nslookup talent-assessment-service
```

## Cost Optimization

### 1. Resource Management
- Use appropriate instance types (t3.medium for dev, t3.large for prod)
- Implement resource requests and limits
- Use spot instances for non-critical workloads

### 2. Auto-scaling
- Configure cluster autoscaler
- Set appropriate min/max node counts
- Use node groups for different workload types

## Next Steps

### 1. Advanced Monitoring
- Implement Prometheus + Grafana
- Set up custom metrics
- Configure alerting rules

### 2. Backup and Recovery
- Implement database backups
- Test disaster recovery procedures
- Document recovery runbooks

### 3. Multi-environment Setup
- Create staging environment
- Implement blue-green deployments
- Set up environment-specific configurations

## Support and Resources

- [EKS Documentation](https://docs.aws.amazon.com/eks/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Kubernetes Documentation](https://kubernetes.io/docs/)
- [Trivy Security Scanner](https://aquasecurity.github.io/trivy/)

---

**Note**: This deployment pipeline demonstrates modern DevOps practices including containerization, CI/CD, security scanning, and cloud-native deployment. It's designed to be production-ready while remaining simple enough to implement within your 3-week timeframe.
