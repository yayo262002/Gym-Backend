const express = require('express');
const {getAllAminoacidos,getAminoacidosById, postAminoacido, putAminoacido, deleteAminoacido} = require('../controllers/aminoacidos.controllers');
const router = express.Router();
const upload = require('../../middlewares/upload.files');
const {isAuth} = require('../../middlewares/auth');

router.get('/', getAllAminoacidos);
router.get('/:id', getAminoacidosById);
router.post('/',  postAminoacido);
router.put('/:id',[isAuth],putAminoacido);
router.delete('/:id',[isAuth], deleteAminoacido);

module.exports = router;