<?php
    require 'vistas/diseños/cabecera.php';
?>
<body>
    <div class="wrapper fb-sbtwn">
        <div class="title-container fb-sbtwn">
            <h1>Gran Teatro Sara</h1>
        </div>
        <div class="text-container fb-sbtwn">
            <h2>Bienvenido a la nueva forma de disfrutar el teatro</h2>
            <p>En hora buena, estas a punto de experimentar una experiencia sin igual, ya casi estás ahí, solo debes <b>llegar</b> montandote al bus.</p>
        </div>
        <div class="nav-1-container fb-sbtwn">
            <a class="a-bus f-50p">Llegar</a>
        </div>
        <div class="nav-2-container fb-sbtwn">
            <a class="f-50p fb-center nav-btn"><i class="fa fa-bars" style="flex: 0 0;"></i></a>
            <div class="hidden-nav fb-sbtwn">
                <a class="a-bus f-50p">Nuestro proyecto</a>
                <a class="a-bus f-50p">Contactanos</a>
                <a class="a-bus f-50p">¿Quiénes somos?</a>
            </div>
        </div>
        <?php echo $this->mensaje; ?>
        <?php
            require 'vistas/diseños/piePag.php';
        ?>
    </div>
</body>
</html>