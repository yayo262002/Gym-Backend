const express = require('express');
const {connect} = require('./src/utils/database')
const suplementosRouter= require('./src/api/routes/suplemento.routes')
const aminoacidosRouter= require('./src/api/routes/aminoacidos.routes')
const creatinasRouter= require('./src/api/routes/creatinas.routes')
const vitaminasRouter= require('./src/api/routes/vitaminas.routes')
const proteinasRouter= require('./src/api/routes/proteinas.routes')
const ropaRouter= require('./src/api/routes/ropa.routes')
const hombreRouter= require('./src/api/routes/hombre.routes')
const mujerRouter= require('./src/api/routes/mujer.routes')
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config()
const app = express()
const cloudinary = require('cloudinary').v2;

const PORT = process.env.PORT || 8000;


  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SECRET
});
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Method', 'POST, GET, DELETE, PUT, PATCH');
  res.header("Access-Control-Allow-Credentials", "true")
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
})
app.use(cors({
  origin: '*',
  credentials: true, 
}));
connect();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/suplementos', suplementosRouter)
app.use('/aminoacidos', aminoacidosRouter)
app.use('/proteinas', proteinasRouter)
app.use('/vitaminas', vitaminasRouter)
app.use('/creatinas', creatinasRouter)
app.use('/ropa', ropaRouter)
app.use('/hombre', hombreRouter)



app.use('/mujer', mujerRouter)
// app.use('/users', usersRouter)

app.listen(PORT,()=>console.log(`listening http://localhost:${PORT}`))