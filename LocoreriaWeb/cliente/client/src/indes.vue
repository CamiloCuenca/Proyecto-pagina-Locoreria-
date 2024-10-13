
<template>

<div class="container">
    
    


    <form @submit.prevent="editarNota(notaEditar)" v-if="editar">
        <h3>Editar nota</h3>

        <input type="text" class="form-control my-2" placeholder="Nombre del producto" v-model="notaEditar.nombre">
        <input type="text" class="form-control my-2" placeholder="imagen" v-model="notaEditar.imagen">
        <input type="text" class="form-control my-2" placeholder="Tipo" v-model="nota.tipo">
        <input type="text" class="form-control my-2" placeholder="Nombre de Usuario" v-model="nota.usuarioId">
        <input type="text" class="form-control my-2" placeholder="Precio del producto" v-model="precioBase">
        <input type="text" class="form-control my-2" placeholder="Precio con Descuento" v-model="precioDescuento">
        <b-button class="btn-success my-2 mx-2" type="submit">Editar</b-button>
        <b-button class=" my-2" type="submit" @click="editar=false">Cancelar</b-button>

    </form>
    <h3 class="my-5 ">Agregar un nuevo production</h3>
    <form @submit.prevent="agregarNota()" v-if="!editar">

        <input type="text" class="form-control my-2" placeholder="Nombre del producto" v-model="nota.nombre">
        <input type="text" class="form-control my-2" placeholder="imagen" v-model="nota.imagen">
        <input type="text" class="form-control my-2" placeholder="Tipo" v-model="nota.tipo">
        <input type="text" class="form-control my-2" placeholder="Nombre de Usuario" v-model="nota.usuarioId">
        <input type="text" class="form-control my-2" placeholder="Precio del producto" v-model="nota.precioBase">
        <input type="text" class="form-control my-2" placeholder="Precio con Descuento" v-model="nota.precioDescuento"> 
        
        <b-button class="btn-success my-2" type="submit">Agregar</b-button>

    </form>

    <table class="table">
        <thead>
            <tr>

                <!-- <th scope="col">#</th> -->
                <th scope="col">Nombre Del producto</th>
                <th scope="col">imagen</th>
                <th scope="col">Tipo</th>
                <th scope="col"> Nombre de usuario</th>
                <th scope="col">Precio Base</th>
                <th scope="col">Precio con Descuento</th>
            </tr>
        </thead>
        <tbody>

            <tr v-for="(item, index) in notas" :key="index">
                <!-- <th scope="row">{{item._id}}</th> -->
                <td>{{item.nombre}}</td>
                <td>{{item.imagen}}</td>
                <td>{{item.tipo}}</td>
                <td>{{item.usuarioId}}</td>
                <td>{{item.precioBase}}</td>
                  <td>{{item.precioDescuento}}</td>
                <td>
                    <b-button class="btn-danger mx-2" @click="eliminarNota(item._id)">Eliminar</b-button>
                    <b-button class="btn-warning mx-2" @click="activarEdicion(item._id)">Editar</b-button>
                </td>
            </tr>

        </tbody>

    </table>
      


</div>
</template>

<script>
export default {

    data() {
        return {

            notas: [],
            mensaje: {color: 'success', texto: ''}, 
            dismissSecs: 5, 
            dismissCountDown: 0,

            nota:{nombre:"",imagen:""},
            editar:false,
            notaEditar:{}

        }

    },

    created() {

        this.listarNotas();

    },

    methods: {

        listarNotas() {

            this.axios.get('/nota')
                .then(res => {
                    console.log(res.data);
                    this.notas = res.data;

                })
                .catch(e => {

                    console.log(e.response);

                })

        },

        agregarNota(){


            this.axios.post('/nueva-nota',this.nota)
            .then(res=>{

                this.notas.push(res.data)
                this.nota.nombre="";
                this.nota.imagen="";
                this.nota.tipo="";
                this.nota.usuarioId="";
                this.nota.precioBase="";
                this.nota.precioDescuento="";
                this.mensaje.color="success";
                this.mensaje.texto="Nota Agregada";
                this.showAlert();


            })
            .catch(e=>{

                console.log(e.response);

            })


        },

        eliminarNota(id){

            this.axios.delete(`/nota/${id}`)
            .then(res=>{

                const index = this.notas.findIndex(item=> item._id===res.data._id);
                this.notas.splice(index, 1);
                this.mensaje.color="success";
                this.mensaje.texto="Nota Eliminada";
                this.showAlert();


            })
            .catch(e=>{

                  console.log(e.response);

            })
        },

        activarEdicion(id){

            this.editar=true;
            this.axios.get(`/nota/${id}`)
            .then(res=>{

                this.notaEditar=res.data;

            })
            .catch(e=>{

                 console.log(e.response);


            })


        },

        editarNota(item){
            
            this.axios.put(`/nota/${item._id}`, item)
            .then(res=>{
                const index= this.notas.findIndex(n=> n._id===res.data._id);
                this.notas[index].nombre=res.data.nombre;
                this.notas[index].imagen=res.data.imagen;
                this.notas[index].tipo=res.data.tipo;
                this.notas[index].usuarioId=res.data.usuarioId;
                this.notas[index].precioBase=res.data.precioBase;
                this.notas[index].precioDescuento=res.data.precioDescuento;
                this.mensaje.color="success";
                this.mensaje.texto="Nota Editada";
                this.showAlert();
                this.editar=false;


            })
            .catch(e=>{

                console.log(e.response);

            })



        },
        countDownChanged(dismissCountDown) { 
            this.dismissCountDown = dismissCountDown 
        }, 
        showAlert() { 
            this.dismissCountDown = this.dismissSecs 
        }

    }

}
</script>
