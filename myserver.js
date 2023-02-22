const http = require('http') //trae la libreria de http
const port = 3000 //definicion del puerto
const hostname = '127.0.0.1' //ip 
var colors = require('colors');
/*
//creacion del server
http.createServer(function(req,res){
//console.log("hello")
res.setHeader('Content-Type','text/html')
res.write(`hola mundo`)
//res.end()
}).listen(port,hostname, ()=>{
    console.log(`server is running in http://${hostname}:${port}`)
}) */
//npm install nodemon

const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html')
    res.write(`hola mundo`)
    res.end()
})
//subir el server 
server.listen(port,()=>{
    console.log(`el servidor esta corriendo en http://localhost:${port}`.rainbow)
})