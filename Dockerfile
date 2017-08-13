FROM node:7
WORKDIR /app
CMD node index.js
EXPOSE 8080
COPY package.json /app
RUN npm install
COPY . /app
