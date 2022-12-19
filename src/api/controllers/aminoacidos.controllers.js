const Aminoacido = require('../model/aminoacidos');

const getAllAminoacidos = async (req, res, next) => {
    try {
        const aminoacidos = await Aminoacido.find().populate("");
        return res.status(200).json(aminoacidos);
    } catch (error) {
        return res.status(500).json(error) ;
    }
}
const getAminoacidosById = async (req,res) => {
    try {
        const {id} = req.params;
        const getAminoacidosById = await Aminoacido.findById(id);
        return res.status(200).json(getAminoacidosById);
    } catch (error) {
        return res.status(500).json(error)
    }
};
const postAminoacido = async (req, res, next) => {
    try {
       
        const newAminoacido = new Aminoacido(req.body);
        console.log(req.body)
        const createdAminoacido = await newAminoacido.save();
        return res.status(200).json(createdAminoacido) ;
    } catch (error) {
        return res.status(500).json(error) ;
    }
}

const putAminoacido = async (req, res, next) => {
    try {
        const {id} = req.params;
        const aminoacido = new Aminoacido(req.body)
        aminoacido._id = id;
        const newAminoacido = await Aminoacido.findByIdAndUpdate(id,aminoacido, {new:true})
        return res.status(201).json(newAminoacido)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const deleteAminoacido = async (req, res, next) => {
    try {
        const {id} = req.params;
        const aminoacido = await Aminoacido.findByIdAndDelete(id)
        return res.status(200).json("Aminoacido borrada")
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = {getAllAminoacidos, postAminoacido, putAminoacido, deleteAminoacido, getAminoacidosById}