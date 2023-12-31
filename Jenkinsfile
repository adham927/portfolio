pipeline {
  agent any
  
          environment {
            REGISTRY_URL = '651956850093.dkr.ecr.us-east-1.amazonaws.com'
            ECR_REGION = 'us-east-1'
            K8S_NAMESPACE = 'default'
            K8S_CLUSTER_NAME = 'es-cluster'
            K8S_CLUSTER_REGION = 'us-east-1'
          }
      stages {
        stage('Portfolio-app - build'){
          steps {
               sh '''
               cd adham_portfolio
               image="portfolio-repo:0.${BUILD_NUMBER}"
               aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 651956850093.dkr.ecr.us-east-1.amazonaws.com
               docker build -t ${image} .
               docker tag ${image} ${REGISTRY_URL}/${image}
               docker push ${REGISTRY_URL}/${image} 
               '''
            }
          }
            stage('Portfolio-app - deploy'){
               steps {
                  sh '''
                  cd adham_portfolio            
                  kubectl apply -f portfolio.yml 
                  '''

                  
              }
            }
    }
  }
