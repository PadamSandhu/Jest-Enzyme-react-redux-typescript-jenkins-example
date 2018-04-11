#!/usr/bin/env groovy
pipeline {
  agent any
  tools {nodejs "latest"}
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
      steps {
        parallel(
      webpack: {
        sh "npm run build"
      },
      Testing: {
        sh "npm run test"
      },
     Coverage: {
        sh "npm run test -- --coverage"
      }
    )
      }
    }
  }
}
