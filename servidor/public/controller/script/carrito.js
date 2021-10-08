class carrito{
  //añadir productor

  comprarproducto(e){
    e.preventDefault();
    if(e.target.classList.contains("cart-plus")){
      const producto = e.target.parentElement.parentElement;
      this.leerDatosProductos(producto)
    }
  }
}