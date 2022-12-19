const Ropa = require('../model/ropa.model');

const getAllRopas = async (req, res, next) => {
    try {
        const ropas = await Ropa.find().populate("hombres mujeres")
        return res.status(200).json(ropas);
    } catch (error) {
        return res.status(500).json(error) ;
    }
}
const getRopasById = async (req,res) => {
    try {
        const {id} = req.params;
        const getRopasById = await Ropa.findById(id);
        return res.status(200).json(getRopasById);
    } catch (error) {
        return res.status(500).json(error)
    }
};

const postRopa = async (req, res, next) => {
    try {
        const newRopa = new Ropa(req.body);
        const createdRopa = await newRopa.save();
        return res.status(200).json(createdRopa) ;
    } catch (error) {
        return res.status(500).json(error) ;
    }
}

const putRopa = async (req, res, next) => {
    try {
        const {id} = req.params;
        const ropa = new Ropa(req.body)
        ropa._id = id;
        const newRopa = await Ropa.findByIdAndUpdate(id,ropa, {new:true})
        return res.status(201).json(newRopa)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const deleteRopa = async (req, res, next) => {
    try {
        const {id} = req.params;
        const ropa = await Ropa.findByIdAndDelete(id)
        return res.status(200).json("Ropa borrado")
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = {getAllRopas,getRopasById, postRopa, putRopa, deleteRopa}