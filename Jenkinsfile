pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/AyoubRebhi/pipeline-cicd'
            }
        }

        stage('Build Docker Image') {
    steps {
        withCredentials([file(credentialsId: 'nextjs-env', variable: 'ENV_FILE')]) {
            dir('App-Code') {
                sh '''
                    # Remove existing .env.local if it exists and has restrictive permissions
                    if [ -f .env.local ]; then
                        chmod 644 .env.local || rm -f .env.local
                    fi
                    
                    # Copy the new environment file
                    cp "$ENV_FILE" .env.local
                    chmod 644 .env.local
                    ls -l .env.local
                    docker build -t my-app:latest .
                '''
            }
        }
    }
}

       stage('Deploy') {
    steps {
        sh '''
            echo "Cleaning up any existing containers..."
            # Stop and remove any container using port 3000
            docker ps -q --filter "publish=3000" | xargs -r docker stop
            docker ps -a -q --filter "publish=3000" | xargs -r docker rm

            # Stop and remove any container named 'my-app'
            docker ps -a -q --filter "name=my-app" | xargs -r docker stop
            docker ps -a -q --filter "name=my-app" | xargs -r docker rm

            echo "Starting new container..."
            docker run -d --name my-app -p 3000:3000 my-app:latest
        '''
    }
}
    }

    post {
        always {
            echo 'Pipeline finished ✅'
        }
    }
}
