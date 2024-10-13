<template>
    <!--Formulario para ingreso a la página-->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Formulario Registro</title>
</head>

<body>
    <section class="form-registro">
        <h4>Formulario Registro</h4>
        <input class="control" type="text" name="nombres" id="nombres" placeholder="Ingrese su nombre">
        <input class="control" type="number" name="numero id" id="numero id" placeholder="Ingrese su número de cédula">
        <input class="control" type="" name="direccion" id="direccion" placeholder="Ingrese su dirección">
        <input class="control" type="number" name="telefono" id="telefono" placeholder="Ingrese su número de telefono">
        <p>Estoy de acuerdo con <a href="#">Terminos y condiciones</p>
        <input class="boton" type="submit" value="Ingresar">
        <p><a href="#">¿Ya tengo cuenta?</p>
    </section>


</body>

</html>
</template>


// style

<style>
/*Estilo formulario de registro*/
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    margin: auto;
    margin-top: 100px;
    border-radius: 4px;
    background-image: url('./assets/locoreria-form.jpg');
    margin-bottom: 100px;

}

.form-registro{
    width: 400px;
    background: white;
    padding: 30px;
    margin: auto;
    margin-top: 100px;
    border-radius: 4px;
    font-family: 'Times';
    color: black;
    box-shadow: 7px 13px 37px #000;
}

.form-registro h4{
    font-size: 22px;
    margin-bottom: 20px;
}

.control{
    width: 100%;
    background: white;
    padding: 10px;
    border-radius: 4px;
    margin-bottom: 16px;
    border: 1px solid #ffcd4e;
    font-family: 'Times';
    font-size: 18px;
}

.form-registro p{
    height: 40px;
    text-align: center;
    font-size: 18px;
    line-height: 40px;
}

.form-registro a{
    color: black;
    text-decoration: none;
}

.form-registro a:hover{
    color: black;
    text-decoration: underline;
}

.form-registro .boton{
    font-weight: bold;
    width: 100%;
    background: #ffc92c;
    border: none;
    padding: 12px;
    color: black;
    font-family: 'Times';
    margin: 16px 0;
    font-size: 16px;


}
</style>