# Fetching the minified node image on apline linux
FROM node:14-alpine

# Setting up the work directory
WORKDIR /app

# Copying all the files in our project
COPY . /app

# Installing dependencies
RUN npm install

# Exposing server port
EXPOSE 3000

# Declaring env
ENV NODE_ENV development

# Starting our application
CMD [ "npm", "start" ]