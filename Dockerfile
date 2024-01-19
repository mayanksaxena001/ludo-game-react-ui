# Use the official Node.js runtime as the base image
FROM node:18 as build

RUN mkdir -p /usr/src/app
# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
COPY .env ./

RUN npm config set legacy-peer-deps true
# Install dependencies
RUN npm install

# Copy the entire application code to the container
COPY . ./

# Build the React app for production
# RUN npm run build

# Use Nginx as the production server
# FROM nginx:alpine

# # Copy the built React app to Nginx's web server directory
# COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Expose port 80 for the Nginx server
# EXPOSE 80

# # Start Nginx when the container runs
# CMD ["nginx", "-g", "daemon off;"]
EXPOSE 3000
CMD [ "npm", "start","--host","0.0.0.0" ]