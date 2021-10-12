import  mongoose  from "mongoose";
const Schema=mongoose.Schema;


const notaShema=new Schema({

    nombre: {type: String, required: [true, 'Nombre del producto obligatorio']},
    imagen: {type: String, required: [true, 'url de la imagen obligatoria']},
    tipo: {type:String,required: [true, 'Tipo del producto obligatorio']},
    usuarioId: {type: String, required: [true, 'Nombre obligatorio']},
    precioBase: {type: String, required: [true, 'el precio es obligatorio']},
    precioDescuento: String,
    date:{type: Date, default: Date.now},
    activo: {type: Boolean, default: true}

});

//convertir a modelo
const Nota=mongoose.model('Nota',notaShema);
export default Nota;