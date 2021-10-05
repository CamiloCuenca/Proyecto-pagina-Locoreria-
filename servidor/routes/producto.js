import express from 'express'
const router = express.Router();

//importar el modelo nota

import Producto from '../models/producto';

// Agregar una nota

router.post('/nuevo-producto', async(req, res)=>{

const body = req.body;
try {

    const notaDB= await Producto.create(body);
    res.status(200).json(notaDB);
    
} catch (error) {

    return res.status(500).json({

        mensaje:'Ocurrio un error',
        error
    })
    
}


});

//Get con parametro

router.get('/producto/:id', async(req, res)=>{

    const _id=req.params.id;

    try {

        const notaDb= await Producto.findOne({_id});
        res.json(notaDb);
        
    } catch (error) {

        return res.status(500).json({

            mensaje:'Ocurrio un error',
            error
        })
        
    }



});

//Get con todos los documentos

router.get('/producto',async(req,res)=>{

    try {

        const notaDb=await Producto.find();
        res.json(notaDb);
        
    } catch (error) {

        return res.status(500).json({

            mensaje:'Ocurrio un error',
            error
        })
        
    }


});

//Delete eliminar una nota

router.delete('/producto/:id', async(req,res)=>{


    const _id=req.params.id;

    try {

        const notaDb=await Producto.findByIdAndDelete({_id});
        if(!notaDb){ 
            return res.status(400).json({ 
                mensaje: 'No se encontró el id indicado', error 
            }) 
        } 
        res.json(notaDb);
        
    } catch (error) {

        return res.status(500).json({

            mensaje:'Ocurrio un error',
            error
        })
        
    }
});

//Actualizar una nota

router.put('/producto/:id', async(req,res)=>{

    const _id=req.params.id;
    const body =req.body;

    try {

        const notaDb= await Producto.findByIdAndUpdate(_id,body,{new:true});
        res.json(notaDb);
        
    } catch (error) {

        return res.status(500).json({

            mensaje:'Ocurrio un error',
            error
        })
        
    }



})

//Exportacion de router
module.exports=router;