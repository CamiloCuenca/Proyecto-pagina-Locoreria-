<template>
    <!--Pagina de Mediosde pago -->

<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Conectar a fonts-awesome y a estiloMediosP.css -->
    <link rel="stylesheet" href="estiloMediosP.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <title>Loreria/Medios-de-pago</title>
</head>
<body>
    

<!--Inicio cuerpo-->

    <h1 class="h1-titulo">!Preciona La imagen¡</h1>
    <div class="site-body">
    <div class="conte">
        <div class="card num1">
            <a href="https://www.paypal.com/co/home" target="_blank"><img src="./assets/paypal-logo.png" alt="" class="img1"></a>
        </div>
        </div>
    

    
        <div class="conte">
            <div class="card num1">
                <a href="https://www.nequi.com.co/" target="_blank"><img src="./assets/nequi-logo.png" alt="" class="img2"></a>
            </div>    
        </div>
        

        <div class="conte">
                <div class="card num1">
                    <a href="https://www.daviplata.com/wps/portal/daviplata/Home/QueEsDaviPlata/!ut/p/z1/hY7BDoIwEES_hQNXdgUU462gQY3R4EGhFwOmFkyhpFT4fWs8kWCc2-68mQxQSIE2eV_xXFeyyYW5M7q4BYmP28ifHWMSbTBBN9itLx5i7MP1H0CNjT9E0OTpBEIwPLvhp-DkTgKjjj1QLmTxnUuawltyoIo9mGLKeSnzLrVuu5WNNg7D4HApuWDOXdY2TkVK2WlIxyS0dYrPuegPxLLeIhg6wg!!/dz/d5/L2dBISEvZ0FBIS9nQSEh/" target="_blank"><img src="./assets/logo-Daviplata.png" alt="" class="img3"></a>
                </div>
            </div>
            
    </div>


</body>
</html>

</template>

<style>
/* Estilo de la pagina de Inicio */
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


/* Logos Medios de pago */


.h1-titulo{
    position: relative;
    margin-top:3rem;
    margin-left:3rem;
}

.site-body{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
.conte{
    display: flex;
    height: 30%;
    width: 100%;
    box-shadow:0 0 20px #111 ;
    margin: 30px 30px;
}
.conte .card{
    height: 200px;
    width: 100%;
    margin-bottom: 170px;
}
.card img{
    margin: auto;
    display: block;
}
.conte .num1 .img1{
    height: 19rem;
    width: 15rem;
}
.conte .num1 .img2{
    height: 20rem;
    width: 23rem;
}
.conte .num1 .img3{
    height: 20rem;
    width: 23rem;
}




</style>