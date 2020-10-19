# Create image based on the official Node latest image from dockerhub
FROM node:latest as build
#Install angular cli
RUN npm install -g @angular/cli@latest
# Create a directory where our app will be placed
RUN mkdir -p /opt/base-architect
# Copy application
COPY ./ /opt/base-architect
# Change directory so that our commands run inside this new directory
WORKDIR /opt/base-architect
# Install dependencies
RUN npm install
#Compile the angular 10 application
RUN ng build --prod
#Create image based on the official nginx image from dockerhub
FROM nginx
COPY ./nginx.conf /etc/nginx/nginx.conf
## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*
#Copy compiled application to nginx folder
COPY --from=build /opt/base-architect/dist/BaseArchitectLoginBasicAxa /usr/share/nginx/html
EXPOSE 4200 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
