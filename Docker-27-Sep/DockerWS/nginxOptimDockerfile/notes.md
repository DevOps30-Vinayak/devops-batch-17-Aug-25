# To build the image
~$ cd dockerws/
~/dockerws$ ls
# firstproject  nginxOptimDockerfile  nginxproject  nodeproject

~/dockerws$ cd nginxOptimDockerfile/

~/dockerws/nginxOptimDockerfile$ docker image build  -t nginx:optim .

~/dockerws/nginxOptimDockerfile$ docker container run --name nginxopt -d -p 5001:80 nginx:optim


# Test the application in browser
http://localhost:5001
