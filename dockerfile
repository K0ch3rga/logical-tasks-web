# build for dev purpose with volume
# FROM node:18 AS build
# WORKDIR /app
# COPY . . 
# EXPOSE 3000
# VOLUME . .
# CMD ["npm", "run", "dev"]


FROM node:18 AS build
LABEL stage="build"
WORKDIR /app
COPY ./ ./
RUN npm ci
RUN npm run build

FROM node:18 AS production
LABEL stage="production"
WORKDIR /app
COPY --from=build /app/package*.json ./
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
RUN npm install --only=production
EXPOSE 3000
CMD ["npm", "start"]