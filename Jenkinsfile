pipeline {
  agent any

  environment {
    REGISTRY_URL = '651956850093.dkr.ecr.us-east-1.amazonaws.com/portfolio-repo'
    ECR_REGION = 'us-east-1'
    K8S_NAMESPACE = 'default'
    K8S_CLUSTER_NAME = 'es-cluster'
    K8S_CLUSTER_REGION = 'us-east-1'
  }

  stages {

    stage('Creating NAMESPACE'){
      steps{
         sh '''
         aws eks --region ${K8S_CLUSTER_REGION} update-kubeconfig --name ${K8S_CLUSTER_NAME}
         kubectl create namespace ${K8S_NAMESPACE} --dry-run=client -o yaml | kubectl apply -f -
         '''
      }
    }

    stage('Portfolio-app - build'){
        when { branch "master" }
        steps {
            sh '''
            image="portfolio-repo:0.${BUILD_NUMBER}"
            aws ecr get-login-password --region $ECR_REGION | docker login --username AWS --password-stdin ${REGISTRY_URL}
            docker build -t ${image} .
            docker tag ${image} ${REGISTRY_URL}/${image}
            docker push ${REGISTRY_URL}/${image}
            '''
        }
    }

    stage('Portfolio-app - deploy'){
        when { branch "master" }
        steps {
            sh '''
            img_p_name=Portfolio-app:0.${BUILD_NUMBER}

            # replace registry url and image name placeholders in yaml
            sed -i "s/{{REGISTRY_URL}}/$REGISTRY_URL/g" portfolio.yml
            sed -i  "s/{{K8S_NAMESPACE}}/$K8S_NAMESPACE/g" portfolio.yml
            sed -i  "s/{{IMG_NAME}}/$img_p_name/g" portfolio.yml


            # get kubeconfig creds
            aws eks --region ${K8S_CLUSTER_REGION} update-kubeconfig --name ${K8S_CLUSTER_NAME}

            # apply to your namespace
            kubectl apply -f portfolio.yml -n $K8S_NAMESPACE
            '''
        }
    }
  }
}