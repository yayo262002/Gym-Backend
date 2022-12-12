
const mongoose = require('mongoose');

const Proteina = require('../api/model/proteinas');

const DB_URL = 'mongodb+srv://Proteinas:root@cluster0.6qtvjtz.mongodb.net/test'
const proteinas = [{
  productName: "Impact Whey Protein",
  description:"La proteína de suero de leche whey n.º 1 en el Reino Unido",
  photo: "https://static.thcdn.com/images/large/original/productimg/1600/1600/11490827-4784672460097159.jpg",
  peso: "1kg",
  precio: "37,99 €",
  valoracion: 4.5, 
},
{
  productName: "Clear Whey Isolate",
  description:"Suero Aislado Transparente Ultrafiltrado",
  photo: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12081396-1994792209042321.jpg",
  peso: "1kg",
  precio: "30,99 €",
  valoracion: 4.5, 
},

]

const proteinasMap = proteinas.map((proteina) => new Proteina(proteina));

mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(async () => {
    const allProteinas = await Proteina.find();
    if(allProteinas.length){
        await Proteina.collection.drop();
        console.log(allProteinas)
    }
}).catch((error) => console.log("error ", error))
.then(async () => {
    await Proteina.insertMany(proteinasMap)
    console.log("prote creada")
}).catch((error) => console.log("error insertando ", error))
.finally(() => {mongoose.disconnect()});