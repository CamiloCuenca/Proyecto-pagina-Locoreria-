import express from 'express'; 
import morgan from 'morgan'; 
import cors from 'cors'; 
import path from 'path';


const app=express();

const mongoose = require('mongoose'); 


const uri='mongodb+srv://JuanCamilo:camilojc123@crud01.cwwas.mongodb.net/test';

const options = {useNewUrlParser: true,  useUnifiedTopology: true ,};

mongoose.connect(uri, options).then(
    () => { console.log('Conectado a DB') },
    err => { console.log(err) } 
);

//middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());


app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, ContentType, Accept");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
   });

//application/x-www-form-urlencoded 
app.use(express.urlencoded({ extended: true }))

app.use('/api', require('./routes/nota'));

const history = require('connect-history-api-fallback'); 
app.use(history()); 
app.use(express.static(path.join(__dirname, 'public/')));

//Puerto

app.set('puerto', process.env.PORT || 3000); 
app.listen(app.get('puerto'), function () { 
    console.log('Example app listening on port'+ app.get('puerto')); 
});




















