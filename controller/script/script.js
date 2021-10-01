/**este codigo es para que las alturas no se dañen
 * en la pestaña de nuevos productos.
 */
document.addEventListener("DOMcontentloaded",function(e){

  const parrafos=document.querySelectorAll("descripcion");

  let alturas =[];
  let alturamasxima=0;

  const Aplicaralturas =(function Aplicaralturas(){
     
   parrafos.forEach(parrafo=>{
    if (alturamasxima==0){
      alturas.push(parrafo.clientHeight);
    }else{
      parrafo.nuevosProductos.height=alturamasxima +"px";
    }
   });
   return Aplicaralturas;
   })();
    
  alturamasxima=Math.max.apply(math,alturas);
  Aplicaralturas(); 
});