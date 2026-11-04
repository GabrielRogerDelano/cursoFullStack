import http from 'http'

const server = http.createServer((req, res) => {
    res.end('Ola do Node.js');
})
 
server.listen(3000)