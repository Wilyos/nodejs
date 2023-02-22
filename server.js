const http = require('http');
const port = 3001;

const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    let a = 20
    let b = 30
    const suma = function(n1,n2){ return n1 + n2};
    const resta = (a,b) => a - b;
    function multip(a, b=10){
        return a*b
    }
    res.write(`<meta charset='utf-8'/>`)
    res.write(`<div style='background-color:#ECE1F4; text-align:center; margin-left:400px; margin-right:400px; margin-top:50px; padding:5px; border:2px
    ; border-radius:10px'>`)
    res.write(`<body style='background-color:#1A51F5'> <h1 style='text-align:center'>Node JS</h1></body>`)
    res.write(`<b> Mi aplicación con node JS </b><i>nice</i>`);
    res.write(`<br> <p style= 'background-color:#0D78DE; text-align:center; border:2px; border-radius:5px; margin:5px'>El resultado de la suma es: ${suma(a,b)}</p>`);
    res.write(`<br> <p style= 'background-color:#0D78DE; text-align:center; border:2px; border-radius:5px; margin:5px'>El resultado de la suma es: ${resta(a,b)}</p>`);
    res.write(`<br> <p style= 'background-color:#0D78DE; text-align:center; border:2px; border-radius:5px; margin:5px'>El resultado de la suma es: ${multip(b)}</p>`);

    let datos = {cedular:12,nombre:'Anacleto Tarcicio',salario:3500}
    res.write(`el nombre del empleado:${datos.nombre} <br> `)
    res.write(`${datos.salario < 3500 ? 'Tiene subsidio':'No tiene subsidio'}<br>`)
    let vehiculo=[
    {placa:"asd123",marca:"Renault",precio:25},
    {placa:"qwe592",marca:"BMW",precio:45},
    {placa:"zxc157",marca:"Toyota",precio:23}]

    
    vehiculo.forEach((info) => { 
        res.write(`<p style= 'background-color:#100DDE; text-align:center; border:2px; border-radius:5px; margin:5px'>Vehiculo</p>`)
        res.write(`<p style= 'background-color:#0D78DE; text-align:center; border:2px; border-radius:5px; margin:5px'>Placa</p>`)
        res.write(`<p style='border:2px; border-radius:5px; margin:5px; border-style:solid;
        border-color:black'>${info.placa}</p>`)
        res.write(`<p style= 'background-color:#0D78DE; text-align:center; border:2px; border-radius:5px; margin:5px'>Marca</p>`)
        res.write(`<p style='border:2px; border-radius:5px; margin:5px; border-style:solid;
        border-color:black'>${info.marca}</p>`)
        res.write(`<p style= 'background-color:#0D78DE; text-align:center; border:2px; border-radius:5px; margin:5px'>Precio</p>`)
        res.write(`<p style='border:2px; border-radius:5px; margin:5px; border-style:solid;
        border-color:black }'>${info.precio}</p><br>`)
    
    })
    res.end();
})
server.listen(port, ()=>{
    console.log(`Server is ready in http://localhost:${port}`);
})