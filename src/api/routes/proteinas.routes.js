const express = require('express');
const {getAllProteinas,getProteinasById, postProteina, putProteina, deleteProteina} = require('../controllers/proteinas.controllers');
const router = express.Router();
const upload = require('../../middlewares/upload.files');
const {isAuth} = require('../../middlewares/auth');

router.get('/', getAllProteinas);
router.get('/:id', getProteinasById);
router.post('/',  postProteina);
router.put('/:id',[isAuth],putProteina);
router.delete('/:id',[isAuth], deleteProteina);

module.exports = router;