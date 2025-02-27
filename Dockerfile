FROM node:20 as build

WORKDIR /usr/local/app

COPY ./ /usr/local/app/

RUN npm install --force

RUN npm run build

FROM nginx:latest

COPY --from=build /usr/local/app/dist/edhirya-web /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
