FROM node:lts-alpine3.16
LABEL author="shamskhalil@gmail.com"
WORKDIR /app
COPY package*.* .
RUN npm install
COPY src src
EXPOSE 3000
CMD npm start