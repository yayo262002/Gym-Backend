const express = require('express');
const {getAllRopas,getRopasById, postRopa, putRopa, deleteRopa} = require('../controllers/ropa.controllers');
const router = express.Router();
const {isAuth} = require('../../middlewares/auth');

router.get('/', getAllRopas);
router.get('/:id', getRopasById);
router.post('/',postRopa);

router.put('/:id',[isAuth],putRopa);
router.delete('/:id',deleteRopa);

module.exports = router;