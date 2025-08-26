pipeline {
    agent any

    tools {
        nodejs 'Node22'   // make sure NodeJS plugin is installed in Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'dev', url: 'https://github.com/AyoubRebhi/pipeline-cicd'
            }
        }

        stage('Install dependencies') {
            steps {
                dir('App-Code') {
                    sh 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                dir('App-Code') {
                    sh 'npm test'
                }
            }
        }

        stage('Build App') {
            steps {
                dir('App-Code') {
                    sh 'npm run build'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                dir('App-Code') {
                    sh 'docker build -t my-app:latest .'
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished ✅'
        }
    }
}
