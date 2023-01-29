FROM node:alpine

WORKDIR /app
COPY package.json .
RUN npm install -g npm@9.4.0
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build
EXPOSE 3000 
CMD ["npm", "start"]