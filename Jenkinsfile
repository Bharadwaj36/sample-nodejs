pipeline{
agent any
environment{
DOCKERHUB_CREDENTIALS = credentials('dockerhub')
}
stages{
     stage('git clone'){
            steps{
			    git 'https://github.com/Bharadwaj36/sample-nodejs.git'
				 }
}
     stage('create docker image'){
	        steps{
			      sh 'docker build -t bhaardwaj2727/mypipe:$BUILD_NUMBER .'
				 }
	 }
	 stage('login to docker'){
	        steps{
			       sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
			     }
	 }
     stage('push image to docker'){
	        steps{
			       sh 'docker push bhaardwaj2727/mypipe:$BUILD_NUMBER'
			     }
	 }

}
post{
      always{
	        sh 'docker logout'
			}
    }

}
