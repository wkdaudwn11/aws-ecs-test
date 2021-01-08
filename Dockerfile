# Build environment
FROM node:12.8.0 as builder
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm install
COPY . .
RUN npm run build

# Production environment
FROM nginx:1.16.0-alpine
COPY --from=builder /app/build /usr/share/nginx/html
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# Production environment
# FROM nginx:1.16.0-alpine
# WORKDIR /app
# ENV PATH /app/node_modules/.bin:$PATH
# COPY build /app
# COPY /app/build /usr/share/nginx/html
# # COPY ./build /usr/share/nginx/html
# RUN rm -rf /etc/nginx/conf.d
# COPY conf /etc/nginx
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]