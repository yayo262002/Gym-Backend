const express = require('express');
const {getAllSuplementos,getSuplementosById, postSuplemento, putSuplemento, deleteSuplemento} = require('../controllers/suplemento.controllers');
const router = express.Router();
const {isAuth} = require('../../middlewares/auth');

router.get('/', getAllSuplementos);
router.get('/:id', getSuplementosById);
router.post('/',postSuplemento);

router.put('/:id',[isAuth],putSuplemento);
router.delete('/:id',deleteSuplemento);

module.exports = router;