const mongoose = require("mongoose");
let PersonSchema = new mongoose.Schema({  //Creamos la estrutura de nuestro schema
    name: String,
    email: String,
    password: String
});

module.exports = mongoose.model('Users', PersonSchema); //exportamos el schema