const http = require('node:http');
const hostname = '0.0.0.0';
const hostname_externo = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Ricardo Souza Quina de Assis \n');
});

server.listen(port, hostname, () => {
    console.log(`Server em execução em http://${hostname_externo}:${port}/`);
});