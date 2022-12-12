const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RopaSchema = new Schema({
    tipo:{type: String, required: true},
    hombres: { type: Schema.Types.ObjectId, ref: "hombres"},
    mujeres: { type: Schema.Types.ObjectId, ref: "mujeres"}
   
});

const Ropa = mongoose.model('ropa', RopaSchema);

module.exports = Ropa;
