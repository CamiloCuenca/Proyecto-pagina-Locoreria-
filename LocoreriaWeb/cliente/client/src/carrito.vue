<template>
    
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">

    
 

    <title>Tienda</title>
</head>

<body>

    <header>
       
    </header>
    <!-- START SECTION STORE -->
    <section class="store">
        <div class="container mt-3">
            <div class="items">
            </div>
        </div>
    </section>
    <!-- END SECTION STORE -->
    <!-- START SECTION SHOPPING CART -->
    <section class="shopping-cart">
        <div class="container">
            <h1 class="text-center">CARRITO</h1>
            <hr>
            <div class="row">
                <div class="col-3">
                    <div class="shopping-cart-header">
                        <h6>Producto</h6>
                    </div>
                </div>
                <div class="col-2">
                    <div class="shopping-cart-header">
                        <h6 class="text-truncate">Precio</h6>
                    </div>
                </div>
                <div class="col-4">
                    <div class="shopping-cart-header">
                        <h6>Cantidad</h6>
                    </div>
                </div>
            </div>
            <!-- ? START SHOPPING CART ITEMS -->
            <div class="shopping-cart-items shoppingCartItemsContainer">
            </div>
            <!-- ? END SHOPPING CART ITEMS -->

            <!-- START TOTAL -->
            <div class="row">
                <div class="col-12">
                    <div class="shopping-cart-total d-flex align-items-center">
                        <p class="mb-0">Total</p>
                        <p class="ml-4 mb-0 shoppingCartTotal">0€</p>
                        <div class="toast ml-auto bg-info" role="alert" aria-live="assertive" aria-atomic="true"
                            data-delay="2000">
                            <div class="toast-header">
                                <span>✅</span>
                                <strong class="mr-auto ml-1 text-secondary">Elemento en el carrito</strong>
                                <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="toast-body text-white">
                                Se aumentó correctamente la cantidad
                            </div>
                        </div>
                        <button class="btn btn-success ml-auto comprarButton" type="button" data-toggle="modal"
                            data-target="#comprarModal">Comprar</button>
                    </div>
                </div>
            </div>

            <!-- END TOTAL -->

            <!-- START MODAL COMPRA -->
            <div class="modal fade" id="comprarModal" tabindex="-1" aria-labelledby="comprarModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="comprarModalLabel">Datos para el envío</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <!-- ? STRIPE START -->
                            <form id="payment-form">
                                <div class="form-group">
                                    <label for="email-element">Email</label>
                                    <input type="email" class="form-control" id="email-element"
                                        aria-describedby="emailHelp" placeholder="E-mail">
                                </div>
                                <div class="form-group">
                                    <div id="card-element" class="form-control"
                                        style='height: 2.4em; padding-top: .7em;'>
                                        <!--Stripe.js injects the Card Element-->
                                    </div>
                                </div>
                                <button id="submit" class="btn btn-primary w-100">
                                    <div class="spinner-border text-light hidden" id="spinner" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                    <span id="button-text">Pagar</span>
                                </button>
                                <p id="card-error" role="alert"></p>
                                <p class="result-message hidden">
                                    Pago satisfactorio
                                    ✅
                                    En breve recibirá su pedido

                                </p>
                            </form>
                            <!-- ? STRIPE END -->
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END MODAL COMPRA -->


        </div>

    </section>
    <!-- END SECTION SHOPPING CART -->


    <!-- START FOOTER -->
   
    <!-- END FOOTER -->





</body>






</html>
</template>