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
                  img_p_name=portfolio-repo:0.${BUILD_NUMBER}

                  # replace registry url and image name placeholders in yaml
                  sed -i "s/{{REGISTRY_URL}}/$REGISTRY_URL/g" portfolio.yaml
                  sed -i  "s/{{K8S_NAMESPACE}}/$K8S_NAMESPACE/g" portfolio.yaml
                  sed -i  "s/{{IMG_NAME}}/$img_p_name/g" portfolio.yaml


                  # get kubeconfig creds
                  aws eks --region ${K8S_CLUSTER_REGION} update-kubeconfig --name ${K8S_CLUSTER_NAME}

                  # apply to your namespace
                  kubectl apply -f portfolio.yaml -n $K8S_NAMESPACE
                  '''
                  
              }
            }
    }
  }
