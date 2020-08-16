##Get node image
FROM node:alpine

##Set Working Directory
WORKDIR '/app'

##Copy Package.json file
COPY ./package.json ./

##RUN npm install
RUN npm install

##COPY files over to working directory
COPY . .

##Issue Run Command
CMD ["npm", "run", "start"]
