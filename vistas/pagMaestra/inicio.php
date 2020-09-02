<?php
require 'vistas/diseños/cabecera.php';
?>

<body>
    <div class="wrapper fb-s-btwn">
        <div class="title-container">
            <img class="title-container__img title-container__img--sun" src="recursos/imagenes/pagMaestra/sun-in-his-splendor-1.svg" alt="El Sol">
            <img class="title-container__img title-container__img--moon" src="recursos/imagenes/pagMaestra/moon-in-his-splendor-1.svg" alt="La Luna">
            <h1 class="title-container__text">Gran Teatro Sara</h1>
        </div>
    </div>
    <div class="text-container fb-s-btwn">
        <h2>Bienvenido a la nueva forma de disfrutar el teatro</h2>
        <p>En hora buena, estas a punto de experimentar una experiencia sin igual, ya casi estás ahí, solo debes <b>llegar</b> montandote al bus.</p>
    </div>
    <div class="nav-1-container fb-s-btwn">
        <a class="a-bus f-50p">Llegar</a>
    </div>
    <div class="nav-2-container fb-s-btwn">
        <a class="f-50p fb-center nav-btn"><i class="fa fa-bars" style="flex: 0 0;"></i></a>
        <div class="hidden-nav fb-s-btwn">
            <a class="a-bus f-50p">Nuestro proyecto</a>
            <a class="a-bus f-50p">Contactanos</a>
            <a class="a-bus f-50p">¿Quiénes somos?</a>
        </div>
    </div>
    </div>
    <?php echo $this->mensaje; ?>
    <?php
    require 'vistas/diseños/piePag.php';
    ?>
    <!-- <script src="recursos/js/scroll.js"></script> -->
</body>

</html>