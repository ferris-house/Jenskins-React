
pipeline {
    agent {
        docker {
            image 'node:16'
        }
    }
    stages {
        stage('Build React app') { 
            agent any
            steps {
                // echo 'start build'
                // sh 'npm i --unsafe-perm --registry=https://registry.npmmirror.com'
                // sh 'npm run build'
                // echo 'build success'
                // sh 'ls'
                sh 'docker'
            }
        }
        // stage('Serve React app') { 
        //     steps {
        //         sh 'npm install -g serve'
        //         sh 'serve -s build -l 4000'
        //     }
        // }
    }
}