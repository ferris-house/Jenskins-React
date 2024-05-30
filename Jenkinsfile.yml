
pipeline {
    agent {
        docker {
            image 'node:16'
        }
    }
    stages {
        stage('Build') { 
            steps {
                echo 'start build'
                sh 'npm i --unsafe-perm --registry=https://registry.npmmirror.com'
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                echo 'hollow'
            }
        }
        stage('Deploy') {
            steps {
                echo 'upload to sever'
            }
        }
    }
}