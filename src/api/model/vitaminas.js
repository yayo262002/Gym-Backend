const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VitaminasSchema = new Schema(
    {
        productName: {type: String, required: true},
        photo: {type: String, required: true},
        photo2: {type: Array, required: false},
        description:{type: String, required: true},
        volumen: {type: Array, required: true},
        precio: {type: Array, required: true},
        valoracion: {type: Number, required: true},
        desde: {type: String, required: true},
        
    }, 
);

const Vitamina = mongoose.model('vitaminas', VitaminasSchema);

module.exports = Vitamina;