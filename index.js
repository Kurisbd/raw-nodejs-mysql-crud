const http = require('http');
const server = http.createServer();
server.listen(4000, () => {
    console.log(`Server running at http://127.0.0.1:${4000}`);
})