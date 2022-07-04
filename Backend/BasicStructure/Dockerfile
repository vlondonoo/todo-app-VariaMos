FROM node:stretch

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

##RUN npm run build
EXPOSE 3001
CMD [ "npm", "start" ]


# docker build -t vlondonoo/backend .
# docker run --name backend -it -p 3001:3001 -d vlondonoo/backend