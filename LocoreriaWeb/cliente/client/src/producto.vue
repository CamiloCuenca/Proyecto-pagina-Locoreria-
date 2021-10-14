<template>
    
        <!--Locoreria -->

<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Locoreria</title>
    <!-- conectar a fonts-awesome -->
    <link rel="icon" type="image/png" href="icono.png">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">



</head>



<!--Inicio cuerpo-->

<body class="body-main">

    <div class="site-body-ofertas">

        <div class="site-oferta1-img">
            <img src="./assets/licoroferta1.png" alt="Fail" class="img-licoroferta1">
        </div>

        <div class="site-oferta2-img">
            <img src="./assets/licoroferta2.png" alt="Fail" class="img-licoroferta2">
        </div>

        <div class="site-oferta3-img">
            <img src="./assets/licoroferta3.png" alt="Fail" class="img-licoroferta3">
        </div>

    </div>


    <!-- Inicio de muestra de productos -->
    <div class="site-body">
               <div v-for="(item, index) in notas" :key="index" class="conte">
            <div class="card num1">
                <img :src="item.imagen" alt="">
            </div>
            <div class="informacion">
                <h1>{{item.nombre}}</h1> 
                <h1>------------------</h1>
                <p class="fecha">
                    Fecha Salidad:03/20/2021
                </p>
            </div>
            <div class="precio">
                <div class="box-precio">
                    <span class="precio1"><strike>{{item.precioBase}}</strike> </span>
                    <span class="precio2"><b>{{item.precioDescuento}}</b></span>
                </div>
                <span class="shoping"><a href="/carrito"><i class="fas fa-cart-plus"></i></a></span>
            </div>

        </div>

    </div>


    

</body>


<footer class="footer-distributed">

    <div class="footer-left">


        <img src="./assets/logo1p.png" alt="" class="img-logo">

        <p class="footer-links">
            <a href="#" class="link-1">Home</a>

            <a href="#">Link</a>

            <a href="#">Link</a>

            <a href="#">Sobre nosotros</a>

            <a href="#">Faq</a>

            <a href="#">Contacto</a>
        </p>

        <p class="footer-company-name">Locoreria © 2021</p>
    </div>

    <div class="footer-center">

        <div>
            <i class="fa fa-map-marker"></i>
            <p><span>Cra. 27 ##10-02</span> Pereira, Risaralda, Colombia</p>
        </div>

        <div>
            <i class="fa fa-phone"></i>
            <p>+57 3218493728</p>
        </div>

        <div>
            <i class="fa fa-envelope"></i>
            <p><a href="mailto:locoreria@utp.com">locoreria@utp.com</a></p>
        </div>

    </div>

    <div class="footer-right">

        <p class="footer-company-about">
            <span>Sobre nosotros</span>
            Sistema de Licorería Web por parte del grupo 49.5 de la Universidad Tecnológica de Pereira en el desarrollo
            del Ciclo 3 del Diplomado en Programación de la Misión TIC 2022.
        </p>

        <div class="footer-icons">

            <a href="https://www.facebook.com/groups/1266068920457464/">
                <img src="./assets/logoFacebook.png" alt="" class="img-facebook">
            </a>

            <a href="https://twitter.com/UTPereira">
                <img src="./assets/logoTwitter.jpg" alt="" class="img-twitter">
            </a>

            <a href="https://www.linkedin.com/in/misi%C3%B3n-tic-63034a208">
                <img src="./assets/logoLinkedin.png" alt="" class="img-linkedin">
            </a>

            <a href="https://github.com/CamiloCuenca/Proyecto-pagina-Locoreria-">
                <img src="./assets/logoGitHub.png" alt="" class="img-github">
            </a>
            
        </div>

    </div>

</footer>

<!--Fin del cuerpo-->


</html>


</template>

// Estilos

<style>
/* Estilo de la pagina de Inicio */
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}
body{
    margin: 0;
    padding: 0;
    font-family: sans-serif;
}
/*  */

/* Estilo Cuerpo

Imagen Licor Oferta 1 */


.site-body-ofertas{
    margin-top: 2rem;
}
.site-oferta1-img{
    position: relative;
    top: 50px;
    margin-left:4px;
    margin-right:0px;
}

.img-licoroferta1{
    height: 250px;
    width: 1240px;
    border-radius: 20px;
    -webkit-transition: .5s linear;
  transition: .5s linear;
    
}

.img-licoroferta1:hover{
    
    
    -webkit-box-shadow: 0px 20px 14px 2px rgb(241, 181, 72);
    box-shadow: 0px 20px 14px 2px rgb(241, 181, 72);
    

}

/* Imagen Licor Oferta 2 */

.site-oferta2-img{
    float: left;
    margin-top: 90px;
    margin-left: 155px;
    margin-right:70px;
}

.img-licoroferta2{
    height: 380px;
    width: 480px;
    border-radius: 20px;
    -webkit-transition: .5s linear;
  transition: .5s linear;
  
}

.img-licoroferta2:hover{
    
    filter:saturate(100%);
    -webkit-box-shadow: -15px 15px 24px 2px rgb(241, 181, 72);
    box-shadow: -15px 15px 24px 2px rgb(241, 181, 72);
    -webkit-transform:scale(1.1);
    transform:scale(1.1);

}

/* Imagen Licor Oferta 3 */


.site-oferta3-img{
    
    margin-top: 90px;
    
}

.img-licoroferta3{
    height: 380px;
    width: 480px;
    border-radius: 20px;
    -webkit-transition: .5s linear;
    transition: .5s linear;
    
}
.img-licoroferta3:hover{
    
    filter:saturate(200%);
    -webkit-box-shadow: 15px 15px 24px 2px rgb(241, 181, 72);
    box-shadow: 15px 15px 24px 2px rgb(241, 181, 72);
    -webkit-transform:scale(1.1);
    transform:scale(1.1);

}


/* Inicio del muestra de produtos*/
.site-body{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
.conte{
    height: 510px;
    width: 25%;
    box-shadow:0 0 10px #111 ;
    margin: 30px 30px;
}
.conte .card{
    height: 200px;
    width: 25%;
    margin-bottom: 170px;
}
.card img{
    margin: auto;
    display: block;
    align-items: center;
}
.conte .num1 img{
    height: 19rem;
    width: 408%;
}




.informacion{
    height: 80px;
    width: 100%;
}
.informacion h1{
    font-family: sans-serif;
    font-size: 1.2em;
    text-align: center;
    color: #333;
    margin-bottom: -10px;
}
.informacion p{
    text-align: center;
    font-family: sans-serif;
    font-size: .9em;
    color: #555;
}
.precio {
    height:50px;
    width: 85%;
    margin: auto;
    font-family: sans-serif;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.box-precio{
    width: 80px;
}
 .precio1{
    color: red;
    font-size: .8em;
}
.precio .precio2{
    font-size: 1.5em;
}
.shoping{
    font-size: 1.5em;
    color: #555;
}

@media (max-width:320px)
{
    .conte{
        width: 100%;
        margin: 30px 0;
    }
}
@media (max-width:600px)
{
    .conte{
        width: 100%;
        margin: 30px 0;
    }
}

@media (max-width:700px)
{
    .conte{
        width: 80%;
        margin: 30px 0;
    }
}

@media (max-width:900px)
{
    .conte{
        width: 40%;
        margin: 30px 20px;
    }
}






.footer-distributed{
	background: #00658f;
	box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
	box-sizing: border-box;
	width: 100%;
    height: 280px;
	text-align: left;
	font: bold 16px sans-serif;
	padding: 35px 50px;
}

.footer-distributed .footer-left,
.footer-distributed .footer-center,
.footer-distributed .footer-right{
	display: inline-block;
	vertical-align: top;
}

/* Footer left */

.footer-distributed .footer-left{
	width: 40%;
}


/* Footer links */

.footer-distributed .footer-links{
	color:  #ffffff;
	margin: 20px 0 12px;
	padding: 0;
}

.footer-distributed .footer-links a{
	display:inline-block;
	line-height: 1.8;
  font-weight:400;
	text-decoration: none;
	color:  inherit;
}

.footer-distributed .footer-company-name{
	color:  #222;
	font-size: 14px;
	font-weight: normal;
	margin: 0;
}

/* Footer Center */

.footer-distributed .footer-center{
	width: 35%;
}

.footer-distributed .footer-center i{
	background-color:  #000000;
	color: #ffffff;
	font-size: 20px;
	width: 38px;
	height: 38px;
	border-radius: 50%;
	text-align: center;
	line-height: 40px;
	margin: 10px 15px;
	vertical-align: middle;
}

.footer-distributed .footer-center i.fa-envelope{
	font-size: 17px;
	line-height: 38px;
}

.footer-distributed .footer-center p{
	display: inline-block;
	color: #ffffff;
  font-weight:400;
	vertical-align: middle;
	margin:0;
}

.footer-distributed .footer-center p span{
	display:block;
	font-weight: normal;
	font-size:14px;
	line-height:2;
}

.footer-distributed .footer-center p a{
	color:  rgb(76, 219, 212);
	text-decoration: none;;
}

.footer-distributed .footer-links a:before {
  content: "|";
  font-weight:300;
  font-size: 20px;
  left: 0;
  color: #fff;
  display: inline-block;
  padding-right: 5px;
}

.footer-distributed .footer-links .link-1:before {
  content: none;
}

/* Footer Right */

.footer-distributed .footer-right{
	width: 20%;
}

.footer-distributed .footer-company-about{
	line-height: 20px;
	color:  #a0a7ad;
	font-size: 13px;
	font-weight: normal;
	margin: 0;
}

.footer-distributed .footer-company-about span{
	display: block;
	color:  #ffffff;
	font-size: 14px;
	font-weight: bold;
	margin-bottom: 20px;
}

.footer-distributed .footer-icons{
	margin-top: 25px;
}

.footer-distributed .footer-icons a{
	display: inline-block;
	width: 45px;
	height: 45px;
	cursor: pointer;
	background-color:  #000000;
	border-radius: 2px;

	font-size: 20px;
	color: #ffffff;
	text-align: center;
	line-height: 35px;

	margin-right: 3px;
	margin-bottom: 5px;
}

.img-facebook{
    margin-top: 4px;
    width: 30px;
    height: 30px;
}

.img-twitter{
    margin-top: 4px;
    width: 45px;
    height: 30px;
}

.img-linkedin{
    margin-top: 4px;
    width: 30px;
    height: 30px;
}

.img-github{
    margin-top: 4px;
    width: 45px;
    height: 30px;
}

 /*Codigos de paleta de colores  */
/* .color1 {color: #3d1818;}
.color2 {color: #5f2d22;}
.color3 {color: #894d2d;}
.color4 {color: #bb7939;}
.color5 {color: #f1b548;} */
</style>




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
