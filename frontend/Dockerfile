# Étape de construction
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration production

# Étape de déploiement
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
