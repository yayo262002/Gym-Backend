const Hombre = require('../model/hombre');

const getAllHombres = async (req, res, next) => {
    try {
        const hombres = await Hombre.find().populate("");
        return res.status(200).json(hombres);
    } catch (error) {
        return res.status(500).json(error) ;
    }
}
const getHombresById = async (req,res) => {
    try {
        const {id} = req.params;
        const getHombresById = await Hombre.findById(id);
        return res.status(200).json(getHombresById);
    } catch (error) {
        return res.status(500).json(error)
    }
};
const postHombre = async (req, res, next) => {
    try {
       
        const newHombre = new Hombre(req.body);
        console.log(req.body)
        const createdHombre = await newHombre.save();
        return res.status(200).json(createdHombre) ;
    } catch (error) {
        return res.status(500).json(error) ;
    }
}

const putHombre = async (req, res, next) => {
    try {
        const {id} = req.params;
        const hombre = new Hombre(req.body)
        hombre._id = id;
        const newHombre = await Hombre.findByIdAndUpdate(id,hombre, {new:true})
        return res.status(201).json(newHombre)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const deleteHombre = async (req, res, next) => {
    try {
        const {id} = req.params;
        const hombre = await Hombre.findByIdAndDelete(id)
        return res.status(200).json("Hombre borrada")
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = {getAllHombres, postHombre, putHombre, deleteHombre, getHombresById}