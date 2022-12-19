const Proteina = require('../model/proteinas');

const getAllProteinas = async (req, res, next) => {
    try {
        const proteinas = await Proteina.find().populate("");
        return res.status(200).json(proteinas);
    } catch (error) {
        return res.status(500).json(error) ;
    }
}
const getProteinasById = async (req,res) => {
    try {
        const {id} = req.params;
        const getProteinasById = await Proteina.findById(id);
        return res.status(200).json(getProteinasById);
    } catch (error) {
        return res.status(500).json(error)
    }
}

const postProteina = async (req, res, next) => {
    try {
       
        const newProteina = new Proteina(req.body);
        console.log(req.body)
        const createdProteina = await newProteina.save();
        return res.status(200).json(createdProteina) ;
    } catch (error) {
        return res.status(500).json(error) ;
    }
}

const putProteina = async (req, res, next) => {
    try {
        const {id} = req.params;
        const proteina = new Proteina(req.body)
        proteina._id = id;
        const newProteina = await Proteina.findByIdAndUpdate(id,proteina, {new:true})
        return res.status(201).json(newProteina)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const deleteProteina = async (req, res, next) => {
    try {
        const {id} = req.params;
        const proteina = await Proteina.findByIdAndDelete(id)
        return res.status(200).json("Proteina borrada")
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = {getAllProteinas, postProteina, putProteina, deleteProteina, getProteinasById}