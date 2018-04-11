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
       stage('Browser Tests'){
      parallel (
        "Firefox": { 
            sh "echo Firefox"
        },
        "Edge": { 
            sh "echo Edge"
        },
        "Safari": { 
            sh "echo Safari"
        },
        "Chrome": { 
            sh "echo Chrome"
        },
      )
    }
    stage('Dev'){
        sh "echo Dev"
    }
    stage('Staging'){
        sh "echo Staging"
    }
    stage('Production'){
        sh "echo Production"
    }
  }
}
