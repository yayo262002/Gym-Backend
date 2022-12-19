const Mujer = require('../model/mujer');

const getAllMujeres = async (req, res, next) => {
    try {
        const mujeres = await Mujer.find().populate("");
        return res.status(200).json(mujeres);
    } catch (error) {
        return res.status(500).json(error) ;
    }
}
const getMujeresById = async (req,res) => {
    try {
        const {id} = req.params;
        const getMujeresById = await Mujer.findById(id);
        return res.status(200).json(getMujeresById);
    } catch (error) {
        return res.status(500).json(error)
    }
};
const postMujer = async (req, res, next) => {
    try {
       
        const newMujer = new Mujer(req.body);
        console.log(req.body)
        const createdMujer = await newMujer.save();
        return res.status(200).json(createdMujer) ;
    } catch (error) {
        return res.status(500).json(error) ;
    }
}

const putMujer = async (req, res, next) => {
    try {
        const {id} = req.params;
        const mujer = new Mujer(req.body)
        mujer._id = id;
        const newMujer = await Mujer.findByIdAndUpdate(id,mujer, {new:true})
        return res.status(201).json(newMujer)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const deleteMujer = async (req, res, next) => {
    try {
        const {id} = req.params;
        const mujer = await Mujer.findByIdAndDelete(id)
        return res.status(200).json("Mujer borrada")
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = {getAllMujeres, postMujer, putMujer, deleteMujer, getMujeresById}