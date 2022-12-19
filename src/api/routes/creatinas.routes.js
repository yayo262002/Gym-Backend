const express = require('express');
const {getAllCreatinas,getCreatinasById, postCreatina, putCreatina, deleteCreatina} = require('../controllers/creatinas.controllers');
const router = express.Router();
const upload = require('../../middlewares/upload.files');
const {isAuth} = require('../../middlewares/auth');

router.get('/', getAllCreatinas);
router.get('/:id', getCreatinasById);
router.post('/',  postCreatina);
router.put('/:id',[isAuth],putCreatina);
router.delete('/:id',[isAuth], deleteCreatina);

module.exports = router;