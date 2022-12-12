const express = require('express');
const {getAllHombres,getHombresById, postHombre, putHombre, deleteHombre} = require('../controllers/hombre.controllers');
const router = express.Router();
const upload = require('../../middlewares/upload.files');
const {isAuth} = require('../../middlewares/auth');

router.get('/', getAllHombres);
router.get('/:id', getHombresById);
router.post('/',  postHombre);
router.put('/:id',[isAuth],putHombre);
router.delete('/:id',[isAuth], deleteHombre);

module.exports = router;