const express = require('express');
const {getAllVitaminas,getVitaminasById, postVitamina, putVitamina, deleteVitamina} = require('../controllers/vitaminas.controllers');
const router = express.Router();
const upload = require('../../middlewares/upload.files');
const {isAuth} = require('../../middlewares/auth');

router.get('/', getAllVitaminas);
router.get('/:id', getVitaminasById);
router.post('/',  postVitamina);
router.put('/:id',putVitamina);
router.delete('/:id', deleteVitamina);

module.exports = router;