FROM node:16-stretch AS build
WORKDIR /app
COPY . .
RUN npm ci && npm run build

FROM nginx:latest
COPY --from=build /app/dist /usr/share/nginx/html
