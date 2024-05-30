
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
                sh 'npm install -g serve'
                sh 'serve -s build -l 4000'
                echo 'build success'
            }
        }
    }
}