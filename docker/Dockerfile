FROM node:alpine
WORKDIR /app
ENV NODE_ENV=production
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
CMD npx http-server dist -p 8080