pipeline {
  agent any
  stages {
    stage('Preflight') {
      steps {
        echo sh(returnStdout: true, script: 'env')
        sh 'node -v'
      }
    }
    stage('Build') {
      steps {
        sh 'npm --version'
        sh 'git log --reverse -1'
        sh 'npm install'
      }
    }
    stage('Unit Test') {
      parallel {
        stage('webpack') {
          steps {
            sh 'npm run build'
          }
        }
        stage('Testing') {
          steps {
            sh 'npm run test'
            junit 'coverage/junit.xml'
          }
        }
        stage('Coverage') {
          steps {
            sh 'npm run test -- --coverage'
            cobertura(autoUpdateHealth: true, autoUpdateStability: true, coberturaReportFile: '**/coverage/cobertura-coverage.xml', failNoReports: true, classCoverageTargets: '70', lineCoverageTargets: '80', fileCoverageTargets: '90', sourceEncoding: 'ASCII', conditionalCoverageTargets: '70')
          }
        }
      }
    }
    stage('Browser Tests') {
      parallel {
        stage('Firefox') {
          steps {
            sh 'echo Firefox'
          }
        }
        stage('Safari') {
          steps {
            sh 'echo Firefox'
          }
        }
        stage('Edge') {
          steps {
            sh 'echo Edge'
          }
        }
        stage('IE') {
          steps {
            sh 'echo IE'
          }
        }
        stage('Chrome') {
          steps {
            sh 'echo Chrome'
          }
        }
      }
    }
    stage('Deploy to Staging') {
      steps {
        sh '''echo "Deploy-to-Staging"
'''
      }
    }
    stage('Delete Project Files') {
      steps {
        cleanWs(cleanWhenAborted: true, cleanWhenFailure: true, cleanWhenNotBuilt: true, cleanWhenSuccess: true, cleanWhenUnstable: true, cleanupMatrixParent: true, deleteDirs: true)
      }
    }
  }
  tools {
    nodejs 'latest'
  }
}