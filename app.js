const express = require ("express");
const app = express();
const path = require ("path");

app.listen(3030,() => console.log("esto fue exitoso"));

app.get("/index",function (req, res) {
    console.log("entraron a la ruta home")

    const rutaAlArchivo = path.join(__dirname, './views/index.html')

    res.sendFile(rutaAlArchivo);
});

app.get("/babbage",function (req, res) {
    console.log("entraron a la ruta babbage")

    const rutaAlArchivo = path.join(__dirname, './views/babbage.html')
    
    res.sendFile(rutaAlArchivo);
});

app.get("/berners-lee",function (req, res) {
    console.log("entraron a la ruta berners-lee")

    const rutaAlArchivo = path.join(__dirname, './views/berners-lee.html')
    
    res.sendFile(rutaAlArchivo);
});

app.get("/clarke",function (req, res) {
    console.log("entraron a la ruta clarke")

    const rutaAlArchivo = path.join(__dirname, './views/clarke.html')
    
    res.sendFile(rutaAlArchivo);
});

app.get("/hamilton",function (req, res) {
    console.log("entraron a la ruta hamilton")

    const rutaAlArchivo = path.join(__dirname, './views/hamilton.html')
    
    res.sendFile(rutaAlArchivo);
});

app.get("/hopper",function (req, res) {
    console.log("entraron a la ruta hopper")

    const rutaAlArchivo = path.join(__dirname, './views/hopper.html')
    
    res.sendFile(rutaAlArchivo);
});

app.get("/lovelace",function (req, res) {
    console.log("entraron a la ruta lovelace")

    const rutaAlArchivo = path.join(__dirname, './views/lovelace.html')
    
    res.sendFile(rutaAlArchivo);
});

app.get("/turing",function (req, res) {
    console.log("entraron a la ruta turing")

    const rutaAlArchivo = path.join(__dirname, './views/turing.html')
    
    res.sendFile(rutaAlArchivo);
});

app.use(express.static("public"));