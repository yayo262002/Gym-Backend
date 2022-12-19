const Vitamina = require('../model/vitaminas');

const getAllVitaminas = async (req, res, next) => {
    try {
        const vitaminas = await Vitamina.find().populate("");
        return res.status(200).json(vitaminas);
    } catch (error) {
        return res.status(500).json(error) ;
    }
}
const getVitaminasById = async (req,res) => {
    try {
        const {id} = req.params;
        const getVitaminasById = await Vitamina.findById(id);
        return res.status(200).json(getVitaminasById);
    } catch (error) {
        return res.status(500).json(error)
    }
};
const postVitamina = async (req, res, next) => {
    try {
       
        const newVitamina = new Vitamina(req.body);
        console.log(req.body)
        const createdVitamina = await newVitamina.save();
        return res.status(200).json(createdVitamina) ;
    } catch (error) {
        return res.status(500).json(error) ;
    }
}

const putVitamina = async (req, res, next) => {
    try {
        const {id} = req.params;
        const vitamina = new Vitamina(req.body)
        vitamina._id = id;
        const newVitamina = await Vitamina.findByIdAndUpdate(id,vitamina, {new:true})
        return res.status(201).json(newVitamina)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const deleteVitamina = async (req, res, next) => {
    try {
        const {id} = req.params;
        const vitamina = await Vitamina.findByIdAndDelete(id)
        return res.status(200).json("Vitamina borrada")
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = {getAllVitaminas, postVitamina, putVitamina, deleteVitamina, getVitaminasById}