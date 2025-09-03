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
                dir('App-Code') {
                    sh 'docker build -t my-app:latest .'
                }
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                  echo "Stopping old container..."
                  docker stop my-app || true
                  docker rm my-app || true

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
