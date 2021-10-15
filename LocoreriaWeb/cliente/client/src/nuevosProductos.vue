<template>
    <body>

     <!-- inicio  nuevos productos-->
    <div class="site-content-main">
      

    
        <div class="content">
            <div class="post">
              <div class="post-header">
                  <div class=" img1"></div>
              </div>
              <div class="post-body">
                  <span>VINO TINTO MARQUÉS</span>
                  <h2>CASTILLO YGAY</h2>
                  <p class="descripcion">referente del vino de calidad,con reconocimiento a nivel mundial, representa la solidez de un camino iniciado en 1852 y  mantenido en la actualidad. Parte de su grandeza reside en el hecho de que 
                    solamente se elabora en añadas consideradas excepcionales.</p>
                      
              </div>    
            </div>
        </div>  
    
    
        <div class="content">
            <div class="post">
              <div class="post-header">
                  <div class=" img2"></div>
    
    
              </div>
              <div class="post-body">
                  <span>SLOE</span>
                  <h2>GINEBRA</h2>
                  <p class="descripcion">Sloe es una ginebra dry gin elaborada mediante la maceración de alcohol de grano con botánicos seleccionados y redestilación en alambiques coffey de doble columna. Para un cuidado exquisito de los procesos de elaboración, 
                      las producciones que se llevan a cabo son elaboraciones cortas.</p>
                      
              </div>    
            </div>
        </div>
      
    
    
        <div class="content">
            <div class="post">
              <div class="post-header">
                  <div class=" img3"></div>
    
    
              </div>
              <div class="post-body">
                  <span>"El gran fácil"</span>
                  <h2>Absolut Nueva Orleans</h2>
                  <p class="descripcion">Absolut New Orleans fue la primera de nuestra serie de edición limitada "Cities", celebrando el famoso ambiente de carnaval de una de las ciudades más vibrantes de los Estados Unidos. Como marca conocida por promover un 
                      espíritu de independencia, tenía sentido comenzar aquí.</p>
              </div>    
            </div>
        </div>
    </div> 



               
    

</body>

</template>


// Estilo

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
/*incio de publicaciones nuevas*/
.site-content-main{
    display: flex;
    margin-top: 3rem;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

/*contenido de las publicaciones*/

.content{
    display: flex;
    height: 25%;
    width: 25%;
    box-shadow:0 0 7px #111 ;
    margin: 30px 30px 30px;
}
   
   
/*configuraciones de imagenes en publicacion*/
.img1{
    background: url(./assets/imagen1.jpg);
    width: 100%;
    height: 200px;
    background-size: cover;
    background-position: center;
    transition: .2;
	
}
.img2{
    background: url(./assets/imagen2.jpg);
    width: 100%;
    height: 200px;
    background-size: cover;
    background-position: center;
    transition: .2;
	
}
.img3{
    background: url(./assets/imagen3.jpg);
    width: 100%;
    height: 200px;
    background-size: cover;
    background-position: center;
    transition: .2;
	
}



/*animacion de publicacion*/
.post{
    box-shadow: 0 1px 6px 1px rgba(0, 0,0,.1);
    overflow: hidden;
    transition: .2s;
}
.post:hover{
    transform: translate(-2px);
    box-shadow: 0 14px 2px rgba(0, 0,0,.15);

}

.post-header{
    width: 100%;
    height: 200px;
    overflow: hidden;
    cursor: pointer;
}

.post:hover.img1{
    transform: scale(1.1);
    
}

.post-body{
    padding: 15px;
    text-align: center;
}

.post-body span{
    display: inline-block;
    color: black;
    margin-bottom: 10px;
}
.post-body h2{
    margin-bottom: 15px;
}
.post-body p{
    line-height: 1.5;
    margin-bottom: 20px;
}
/*configuracion de leer mas...*/
.post-body.imagen-link{
    
    text-decoration: none;
    padding: 10px;
    background: #fff;
    color: #f1b548;
    width: 50%;
    margin: auto;
    border-radius: 20px;
    box-shadow: 1px 2px 6px 1px rgba(0, 0, 0, .1);
    transition: .2s;
}
.post-body.imagen-link:hover{
    background: #f1b548;
    box-shadow: 1px 2px 6px 1px rgba(0, 0, 0, .2);
    transform: translateY(-2px);
}



</style>