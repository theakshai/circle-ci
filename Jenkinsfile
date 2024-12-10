pipeline {
    agent none
    triggers {
        githubPush()
    }
    stages {
        stage('Prepare Pod') {
            agent {
                kubernetes {
                    label 'dynamic-pod'
                    yaml """
                    apiVersion: v1
                    kind: Pod
                    metadata:
                      labels:
                        app: dynamic-jenkins-agent
                    spec:
                      containers:
                      - name: build-container
                        image: maven:3.8.6-jdk-11
                        command:
                        - cat
                        tty: true
                      restartPolicy: Never
                    """
                }
            }
            steps {
                echo 'Running on a dynamic pod in Minikube'
                sh 'java -version'
            }
        }

        stage('Checkout Code') {
            steps {
                script {
                    checkout scm
                }
                echo 'Code checked out from GitHub'
            }
        }

        stage('Build') {
            steps {
                echo 'Building the project'
                sh 'mvn clean install'
            }
        }
    }
    post {
        always {
            echo 'Pipeline finished and pod cleaned up.'
        }
    }
}

