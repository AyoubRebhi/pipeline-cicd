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
                          cp "$ENV_FILE" .env.local
                          docker build -t my-app:latest .
                        '''
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                  echo "Stopping any container using port 3000..."
                  OLD_CONTAINER=$(docker ps -q --filter "publish=3000")
                  if [ ! -z "$OLD_CONTAINER" ]; then
                      docker stop $OLD_CONTAINER || true
                      docker rm $OLD_CONTAINER || true
                  fi

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