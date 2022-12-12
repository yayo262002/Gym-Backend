const Suplemento = require('../model/suplemento.model');

const getAllSuplementos = async (req, res, next) => {
    try {
        const suplementos = await Suplemento.find().populate("proteinas")
        return res.status(200).json(suplementos);
    } catch (error) {
        return res.status(500).json(error) ;
    }
}
const getSuplementosById = async (req,res) => {
    try {
        const {id} = req.params;
        const getSuplementosById = await Suplemento.findById(id);
        return res.status(200).json(getSuplementosById);
    } catch (error) {
        return res.status(500).json(error)
    }
};

const postSuplemento = async (req, res, next) => {
    try {
        const newSuplemento = new Suplemento(req.body);
        const createdSuplemento = await newSuplemento.save();
        return res.status(200).json(createdSuplemento) ;
    } catch (error) {
        return res.status(500).json(error) ;
    }
}

const putSuplemento = async (req, res, next) => {
    try {
        const {id} = req.params;
        const suplemento = new Suplemento(req.body)
        suplemento._id = id;
        const newSuplemento = await Suplemento.findByIdAndUpdate(id,suplemento, {new:true})
        return res.status(201).json(newSuplemento)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const deleteSuplemento = async (req, res, next) => {
    try {
        const {id} = req.params;
        const suplemento = await Suplemento.findByIdAndDelete(id)
        return res.status(200).json("Suplemento borrado")
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = {getAllSuplementos,getSuplementosById, postSuplemento, putSuplemento, deleteSuplemento}