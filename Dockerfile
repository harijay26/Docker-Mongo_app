FROM node:latest

# Create app directory
WORKDIR /usr/src/app 

# Install app dependencies
COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install 

# Copy app source code
COPY . .

#Expose port and start application
EXPOSE 3002
CMD [ "node", "server.js" ]