const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MujeresSchema = new Schema(
    {
        productName: {type: String, required: true},
        photo: {type: Array, required: true},
        description:{type: String, required: false},
        talla: {type: Array, required: true},
        precio: {type: Array, required: true},
        valoracion: {type: Number, required: true},
        
    }, 
);

const Mujer = mongoose.model('mujeres', MujeresSchema);

module.exports = Mujer;