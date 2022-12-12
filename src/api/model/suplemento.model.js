const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SuplementoSchema = new Schema({
    tipo:{type: String, required: true},
    proteinas: { type: Schema.Types.ObjectId, ref: "proteinas"}
   
   
});

const Suplemento = mongoose.model('suplemento', SuplementoSchema);

module.exports = Suplemento;
