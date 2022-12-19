const Creatina = require('../model/creatinas');

const getAllCreatinas = async (req, res, next) => {
    try {
        const creatinas = await Creatina.find().populate("");
        return res.status(200).json(creatinas);
    } catch (error) {
        return res.status(500).json(error) ;
    }
}
const getCreatinasById = async (req,res) => {
    try {
        const {id} = req.params;
        const getCreatinasById = await Creatina.findById(id);
        return res.status(200).json(getCreatinasById);
    } catch (error) {
        return res.status(500).json(error)
    }
};
const postCreatina = async (req, res, next) => {
    try {
       
        const newCreatina = new Creatina(req.body);
        console.log(req.body)
        const createdCreatina = await newCreatina.save();
        return res.status(200).json(createdCreatina) ;
    } catch (error) {
        return res.status(500).json(error) ;
    }
}

const putCreatina = async (req, res, next) => {
    try {
        const {id} = req.params;
        const creatina = new Creatina(req.body)
        creatina._id = id;
        const newCreatina = await Creatina.findByIdAndUpdate(id,creatina, {new:true})
        return res.status(201).json(newCreatina)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const deleteCreatina = async (req, res, next) => {
    try {
        const {id} = req.params;
        const creatina = await Creatina.findByIdAndDelete(id)
        return res.status(200).json("Creatina borrada")
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = {getAllCreatinas, postCreatina, putCreatina, deleteCreatina, getCreatinasById}