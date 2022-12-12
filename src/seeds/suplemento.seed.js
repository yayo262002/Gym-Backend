const mongoose = require('mongoose');
const Suplemento = require('../api/model/suplemento.model');
const dotenv = require('dotenv');
dotenv.config()

const DB_URL = 'mongodb+srv://Proteinas:root@cluster0.6qtvjtz.mongodb.net/test'

const suplementos = [{
  proteinas: {},
  },
]
  

const suplementoDocuments = suplementos.map(suplemento => new Suplemento(suplemento));
mongoose
  .connect(DB_URL , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allSuplementoss = await Suplemento.find();
    if (allSuplementoss.length) {
      await Suplemento.collection.drop(); 
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
		await Suplemento.insertMany(suplementoDocuments);
    console.log('DatabaseCreated')
	})
  .catch((err) => console.log(`Error creating data: ${err}`))
  .finally(() => mongoose.disconnect());