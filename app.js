const http = require('http');

http.createServer((request, response) => {
    response.write('hola server');
    response.end();

}).listen(8080);

console.log('Escuchando el puesto 8080');