const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProteinasSchema = new Schema(
    {
        productName: {type: String, required: false},
        photo: {type: String, required: false},
        photo2: {type: Array, required: false},
        description:{type: String, required: false},
        volumen: {type: Array, required: false},
        precio: {type: Array, required: false},
        valoracion: {type: Number, required: false},
        desde: {type: String, required: false},
        
    }, 
);

const Proteina = mongoose.model('proteinas', ProteinasSchema);

module.exports = Proteina;