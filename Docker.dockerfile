# Use a lightweight base image with Node.js (since most front-end apps use Node)
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the front-end application (if using a framework like React, Vue, etc.)
RUN npm run build

# Expose the port your app runs on (e.g., 3000 for React)
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]