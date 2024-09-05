# Use a lightweight Node.js image as the base
FROM node:16-alpine AS builder

# Setting up the work directory
WORKDIR /app

# Copying all the files in our project
COPY . /app

# Installing dependencies
RUN npm install

# Build app
RUN npm run build

# Use a Nginx image as the final image
FROM nginx:alpine

# Copy the built React app into the Nginx container
COPY --from=builder /app/build /usr/share/nginx/html

# Set nginx config file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]