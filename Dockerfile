FROM node:carbon
# Create app directory
RUN mkdir -p /usr/src/competition-results
WORKDIR /usr/src/competition-results
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json /usr/src/competition-results
RUN npm install
COPY . /usr/src/competition-results
# If you are building your code for production
# RUN npm install --only=production
EXPOSE 3000
CMD [ "npm", "start" ]
