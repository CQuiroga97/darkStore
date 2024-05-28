# Stage 1: Build the Angular app
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build --prod

# Stage 2: Serve the Angular app with Nginx
FROM nginx:latest
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80

