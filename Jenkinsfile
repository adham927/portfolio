      pipeline {
        agent any
        environment {
          REGISTRY_URL = 'public.ecr.aws/w3o1b5w5/portfolio-repo'
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
                  aws ecr-public get-login-password --region us-east-1 | docker login --username AWS --password-stdin public.ecr.aws/w3o1b5w5
                  docker build -t ${image} .
                  sudo docker tag ${image} ${REGISTRY_URL}/${image}
                  sudo docker push ${REGISTRY_URL}/${image}
                  docker push ${REGISTRY_URL}/${image}
                  '''

              }
            }
          }
        }
