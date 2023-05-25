pipeline {
    triggers {
    //    Needs to be configured in the Jenkins UI to trigger pipelines when they are "tagged" (Scan Multibranch Pipeline Triggers )
        pollSCM('H/4 * * * *')
    }
    options {
        buildDiscarder(logRotator(numToKeepStr: '5', artifactNumToKeepStr: '5'))
        skipDefaultCheckout()
        office365ConnectorWebhooks([
            [name: "Office 365", 
            url: "https://isecpt.webhook.office.com/webhookb2/f350ae6c-4b41-4b65-a873-bbe325c74e39@055a3822-099b-4683-ad90-b17a3b3b1507/JenkinsCI/635bb3f1f20143618a91132d005bbc25/3a8381ac-1f46-4be0-a9c3-ac901668c9e2", 
            notifyBackToNormal: true, 
            notifyFailure: true, 
            notifyRepeatedFailure: true, 
            notifySuccess: 
            true, notifyAborted: true]
        ])
    }
    agent any
    environment {
        DOCKERHUB_USER='claudiooak'
        DOCKERHUB_REPO='frontendpd'
        DOCKERHUB_CREDS= credentials('fd7e66ac-cc28-4dde-97ea-ee73e3bbd880')
        DEPLOY_DIR='pd-ansible'
        DEPLOY_USER='ubuntu'
        DEPLOY_HOST='localhost'
    }
    stages {
        stage('Build and publish - PROD ') {
            when {
                buildingTag()
            }
            steps {
                cleanWs()
                checkout scm
                sh '''
                docker build -t ${DOCKERHUB_USER}/${DOCKERHUB_REPO}:$TAG_NAME . -f DockerfileProd
                docker login -u $DOCKERHUB_CREDS_USR -p $DOCKERHUB_CREDS_PSW
                docker push ${DOCKERHUB_USER}/${DOCKERHUB_REPO}:$TAG_NAME
                '''
            }
        }
        stage('Build and Publish - DEV ') {
            when {
                branch "master"
            }
            steps {
                cleanWs() 
                checkout scm
                sh '''
                docker build -t ${DOCKERHUB_USER}/${DOCKERHUB_REPO}:dev-$BUILD_NUMBER . -f DockerfileDev
                docker login -u $DOCKERHUB_CREDS_USR -p $DOCKERHUB_CREDS_PSW
                docker push ${DOCKERHUB_USER}/${DOCKERHUB_REPO}:dev-$BUILD_NUMBER
                '''
            }
        }
        stage('Deploy - PROD'){
            when {
                    buildingTag()
            }
            steps {
                sshagent(['ubuntulocalhost']) {
                    sh "ssh -l $DEPLOY_USER $DEPLOY_HOST 'ansible-playbook -i pd-ansible/inventory/prod/hosts.yml --diff pd-ansible/playbooks/frontendpd-swarm.yml --extra-vars \"frontendpd_tag=$TAG_NAME\"'"
                } 
            }
        }
        stage('Deploy - DEV'){
            when {
                branch "master"
            }
            steps {
                sshagent(['ubuntulocalhost']) {
                    sh "ssh -l $DEPLOY_USER $DEPLOY_HOST 'ansible-playbook -i pd-ansible/inventory/dev/hosts.yml --diff pd-ansible/playbooks/frontendpd-swarm.yml --extra-vars \"frontendpd_tag=dev-$BUILD_NUMBER\"'"
                } 
            }
        }
    }
    post {
        always {  
	        sh 'docker logout'     
        }      
        cleanup {
            cleanWs()
        }
    }
}