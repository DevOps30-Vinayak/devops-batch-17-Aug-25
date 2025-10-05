**Scenario: Run a Web application in Docker Container**



**# Run the default Nginx Docker Image**

**docker run --name <CONTAINER-NAME> -p <HOST\_PORT>:<CONTAINER\_PORT> -d <IMAGE\_NAME>:<TAG>**



**# Example:**

**docker run --name myapp1 -p 8090:80 -d nginx**



**# List running Docker containers**

**docker ps**



**# Access the application in your browser**

**http://localhost:8090**



**# Stop and remove the Docker container**

**docker stop myapp1**

**docker rm myapp1**



**# Or force remove the container**

**docker rm -f myapp1**



**Remove Docker Images**

**docker rmi mynginx:latest**







Scenario: Create a Dockerfile to run nginx application with index.html page.



**What is a Dockerfile ?**

&nbsp;- Simple text file that contains set of instructions to build a Docker Image



&nbsp;- Automates the process of creating Docker Images by specifying steps which are called INSTRUCTIONS in Docker terminology



Example:

* Install software
* Copy files
* Set environment variables
* Run commands
* Define entry point for your application (start application when container starts)



**Build Docker Image and Push to Docker Hub**



**Build Docker Image**

docker build -t mynginx-custom:v1 .



**Run Docker Container**

docker run --name mynginx1 -p 8090:80 -d mynginx-custom:v1



**Tag Docker Image**

docker tag mynginx-custom:v1 stacksimplify/mynginx-custom:v1



**Push Docker Image to Docker Hub**

docker push stacksimplify/mynginx-custom:v1



**Search Docker Images in Docker Hub**

docker search nginx

docker search --filter=stars=50 nginx

docker search --filter=is-official=true nginx





Dockerfile - LABEL Instruction



**What is LABEL instruction in Dockerfile?**

* Adds metadata to an Image
* An Image can have more than one label
* Labels included in the base image are inherited by your image
* If a label already exists but with a different value, the most-recently-applied value overrides any previously-set value



**How to view Image labels?**

We can use docker image inspect command

docker image inspect --format='{{json .Config.Labels}}' myimage





Dockerfile - COPY vs ADD

**What is COPY instruction in Dockerfile?**

* The COPY instruction copies new files or directories from <src> and adds them to the filesystem of the image at the path <dest>
* Files and directories can be copied from the 
* build context
* build stage
* named context 
* an image



**What is ADD instruction in Dockerfile?**

The ADD instruction copies new files or directories from <src> and adds them to the filesystem of the image at the path <dest>

Files and directories can be copied from the 

build context

a remote URL

a Git repository





Dockerfile - ARG Instruction



**What is ARG instruction in Dockerfile?**

* Defines a variable that users can pass at build-time to the builder with 
* Docker Command: docker build 
* Using the flag: --build-arg <varname>=<value> 
* We can define one or more ARG instructions
* We can define default values for ARG instructions in Dockerfile
* ARG NGINX\_VERSION=1.26
* An ARG variable definition comes into effect from the line on which it is defined
* ENV variables always overrides ARG variables (if same variable defined in both places)





Dockerfile - RUN Instruction



**What is RUN instruction in Dockerfile?**

The RUN instruction will execute any commands to create a new layer on top of the current image

The added layer is used in the next step in the Dockerfile

**Cache Invalidation for RUN Instructions**



Problem: Isn’t invalidated automatically during next build

Example: RUN apt-get dist-upgrade –y will be reused in next build

Solution: The cache for RUN instructions can be invalidated by using the --no-cache flag

Example: docker build --no-cache



Dockerfile - EXPOSE Instruction

**What is EXPOSE instruction in Dockerfile?**

* Informs Docker that the container listens on the specified network ports at runtime
* You can specify whether the port listens on TCP or UDP, and the default is TCP if you don't specify a protocol.
* &nbsp;    EXPOSE 80: defaults to TCP, exposes on TCP
* &nbsp;    EXPOSE 80/udp: Exposes on UDP
* &nbsp;    EXPOSE 80/tcp: Exposes on TCP





Dockerfile - ENV Instruction

**What is ENV instruction in Dockerfile?**

ENV sets the environment variables





**What is the key difference between ENV and ARG ?**

ENV: ENV is persisted in the final image and will be available in container when it is run from this image

ARG: ARG is not persisted in the final image, so no scope of using that value in the container when it is run from this image.





Dockerfile - WORKDIR Instruction 



**What is WORKDIR instruction in Dockerfile?**

* Sets the working directory for any RUN, CMD, ENTRYPOINT, COPY and ADD instructions that follow it in the Dockerfile.
* The WORKDIR instruction can be used multiple times in a Dockerfile
* If WORKDIR not specified, the default working directory is “/”
* If we are using the base image “FROM python”, WORKDIR likely to be set by the base image
* Important Note: To avoid unintended operations in unknown directories, it's best practice to set your WORKDIR explicitly.



Dockerfile - CMD Instruction 



**What is CMD instruction in Dockerfile?**

* Defines the command to run when starting a container from the image
* Only one CMD instruction is allowed per Dockerfile, if there are multiple, only the last one is used
* Used to set default commands or parameters for the container
* Syntax Options
* **CMD \["executable","param1","param2"]**
* **CMD \["param1","param2"]**
* **CMD command param1 param2**



**Dockerfile - ENTRYPOINT Instruction** 



**What is ENTRYPOINT instruction in Dockerfile?**

* An ENTRYPOINT allows you to configure a container that will run as an executable.
* It is useful for setting up a container that runs a specific command or application.
* **SYNTAX**
* **ENTRYPOINT \["executable", "param1", "param2"]**







**What is HEALTHCHECK instruction in Dockerfile?**

* It tells Docker how to test a container to check that it's still working
* This can detect cases such as a  
* web server stuck in a loop, unable to handle new connections even if still running2
* Health Status in Docker
* Starting: Initially during the start
* Healthy: When health check passes
* Unhealthy: Marked unhealthy after consecutive health check failures







