const mongoose = require("mongoose");
let PersonSchema = new mongoose.Schema({  //Creamos la estrutura de nuestro schema
    nombre: String,
    edad: Number,
    tipoSangre: String,
    nss: String
});

module.exports = mongoose.model('Persons', PersonSchema); //exportamos el schema