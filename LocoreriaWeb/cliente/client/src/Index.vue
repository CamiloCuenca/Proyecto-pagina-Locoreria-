<template>


<header class="header-main">


    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Locoreria</title>
    <!-- conectar a fonts-awesome -->
    <link rel="icon" type="image/png" href="icono.png">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    </head>



    <div class="header-section">
        <div class="site-logo">
        <img alt="Vue logo" src="./assets/logo1p.png" class="img-logo">
        </div>
    </div>

   
<div id="app">
    <div id="nav">
        <a href="/producto"><i class="fas fa-home"></i>Inicio</a>
        <a href="/nuevosP"><i class="fas fa-glass-cheers"></i>Nuevos Productos</a>
        <a href="/pago"><i class="fas fa-dollar-sign"></i>Medios de Pago</a>
        <a href="/mostrar">Crear Nuevo Producto</a>




 


    </div>
    <router-view/>
  </div>
  
</header>

  


</template>


<style>
.input {
  position: relative;
  margin-top: 10px;
  margin-left: 28rem;
  max-width:10rem;
}
#app {
  position: relative;
  margin-top: -7rem;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #000000;
  margin-left: 13px;
}

#nav a.router-link-exact-active {
  color: #51a4d4;
}
.header-section{
background-color:   #f1b548 ;
}
.img-logo{
    height: auto;
    width: auto;
    max-width:20rem;
    max-height:20rem;
}

</style>
