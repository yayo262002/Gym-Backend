const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const {connect} = require('./src/utils/database');

const suplementosRouter= require('./src/api/routes/suplemento.routes')
const aminoacidosRouter= require('./src/api/routes/aminoacidos.routes')
const creatinasRouter= require('./src/api/routes/creatinas.routes')
const vitaminasRouter= require('./src/api/routes/vitaminas.routes')
const proteinasRouter= require('./src/api/routes/proteinas.routes')
const ropaRouter= require('./src/api/routes/ropa.routes')
const hombreRouter= require('./src/api/routes/hombre.routes')
const mujerRouter= require('./src/api/routes/mujer.routes')
const usersRouter = require('./src/api/routes/users.routes');

dotenv.config();
const PORT = 8000;


const app = express();
connect();

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

app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use('/suplementos', suplementosRouter)
app.use('/aminoacidos', aminoacidosRouter)
app.use('/proteinas', proteinasRouter)
app.use('/vitaminas', vitaminasRouter)
app.use('/creatinas', creatinasRouter)
app.use('/ropa', ropaRouter)
app.use('/hombre', hombreRouter)
app.use('/mujer', mujerRouter)
app.use('/users', usersRouter)

app.use('*', (req,res,next) => {
  return res.status(404).json("Route not found")
});

app.listen(PORT, () => console.log(`listening on port:http://localhost:${PORT}`));