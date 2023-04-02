# Use an official Node runtime as a parent image
FROM node:latest

# Set the working directory to /app
WORKDIR /usr/src/app

COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Copy the current directory contents into the container at /app
COPY . /usr/src/app

# Make port 30 available to the world outside this container
EXPOSE 80

# Run the app when the container launches
CMD ["npm", "start"]
