
pipeline {
    agent {
        docker {
            image 'node:16'
        }
    }
    stages {
        stage('Build React app') { 
            steps {
                echo 'start build'
                sh 'npm i --unsafe-perm --registry=https://registry.npmmirror.com'
                sh 'npm run build'
                echo 'build success'
                sh 'ls'
            }
        }
        stage('Serve React app') { 
            steps {
                echo 'ok'
            }
        }
    }
}