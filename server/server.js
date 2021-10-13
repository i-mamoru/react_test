const PORT = 8000
const http = require('http')

const server = http.createServer()
server.listen(PORT)
console.log(`http://localhost:${PORT}`);




