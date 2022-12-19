const express = require('express');
const {getAllMujeres, getMujeresById, postMujer, putMujer, deleteMujer} = require('../controllers/mujer.controller');
const router = express.Router();
const upload = require('../../middlewares/upload.files');
const {isAuth} = require('../../middlewares/auth');

router.get('/', getAllMujeres);
router.get('/:id', getMujeresById);
router.post('/',  postMujer);
router.put('/:id',[isAuth],putMujer);
router.delete('/:id', deleteMujer);

module.exports = router;