const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProteinasSchema = new Schema(
    {
        productName: {type: String, required: true},
        photo: {type: String, required: false},
        description:{type: String, required: false},
        volumen: {type: Array, required: true},
        precio: {type: Array, required: true},
        valoracion: {type: Number, required: true},
        
    }, 
);

const Proteina = mongoose.model('proteinas', ProteinasSchema);

module.exports = Proteina;