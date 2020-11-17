##Get node image
FROM node:alpine

##Set Working Directory
WORKDIR '/usr/app'

##Install PM2
##RUN npm install --global pm2

##Copy Package.json file
COPY ./package.json ./

##RUN npm install
RUN npm install 

##COPY files over to working directory
COPY ./ ./

##Issue Run Command
CMD ["npm", "run", "start"]
