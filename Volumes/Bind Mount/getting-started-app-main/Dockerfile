#As informações desse projeto foram retiradas da seguinte página web: 
#https://docs.docker.com/get-started/workshop/02_our_app/
#Para a criação de um volume mount nesse caso devemos utilizar a seguinte sintaxe:
# docker run -d -p 127.0.0.1:3000:3000 --mount type=bind,source="D:\_Udemy\Docker\Docker\volumes\Bind Mount/src",target=/app/src getting-start 

FROM node:lts-alpine
WORKDIR /app
COPY . .
RUN yarn install --production
CMD ["node", "src/index.js"]
EXPOSE 3000