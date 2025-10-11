# layer1 - base image of alpine tool with nginx
FROM nginx:1.29.2-alpine

# layer 2 - copy src/index.html to nginx folder
copy src/index.html /usr/share/nginx/html

# metadata - expose nginx server port
EXPOSE 80

# metadata - runs on container start
CMD ["nginx", "-g", "daemon off;"]


