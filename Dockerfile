# Use the official Node.js image as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /user/src

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Command to run your app
CMD ["node", "index.js"]
