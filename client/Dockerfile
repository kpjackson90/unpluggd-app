##Get node image
FROM node:alpine

##Set Working Directory
WORKDIR '/usr/app'

##Install PM2
RUN npm install --global pm2

##COPY files over to working directory
COPY ./package*.json ./

##RUN npm install
RUN npm install --production

COPY ./ ./

RUN npm run build
EXPOSE 3000


USER node

##Issue Run Command
CMD ["pm2-runtime", "npm", "--", "start"]
