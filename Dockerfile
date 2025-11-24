FROM node:22.21.1 AS base

FROM base AS production
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["sh", "-c", "npm run start"]

FROM base AS development
WORKDIR /packages
COPY package.json ./
RUN npm install
WORKDIR /app
COPY . .
CMD [ "sh", "-c", "rm -rf /app/node_modules && mv /packages/node_modules /app && npm run dev" ]
