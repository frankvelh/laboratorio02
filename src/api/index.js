 const http = require("http");
const port = process.env.PORT || 3000;
const host = process.env.HOST || "0.0.0.0"

const server = http.createServer((req, res) => {
    res.end(`Bienvenido desde el puerto ${port}`);
});

server.listen (port, host,()=>{
    console.log(`Servidor en puerto http://${host}:${port}`);
});