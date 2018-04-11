pipeline {
  agent any
  stages {
    stage('preflight') {
      steps {
        echo sh(returnStdout: true, script: 'env')
        sh 'node -v'
      }
    }
    stage('build') {
      steps {
        sh 'npm --version'
        sh 'git log --reverse -1'
        sh 'npm install'
      }
    }
    stage('test') {
      parallel {
        stage('webpack') {
          steps {
            sh 'npm run build'
          }
        }
        stage('Testing') {
          steps {
            sh 'npm run test'
          }
        }
        stage('Coverage') {
          steps {
            sh 'npm run test -- --coverage'
          }
        }
      }
    }
    stage('Delete-Project-Code') {
      steps {
        cleanWs(cleanWhenAborted: true, cleanWhenFailure: true, cleanWhenNotBuilt: true, cleanWhenSuccess: true, cleanWhenUnstable: true, cleanupMatrixParent: true, deleteDirs: true)
      }
    }
  }
  tools {
    nodejs 'latest'
  }
}