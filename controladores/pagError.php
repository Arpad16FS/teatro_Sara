<?php

class pagError extends Controller{
    function __construct(){
        parent::__construct();
        $this->view->message = "<b>Error</b> al cargar el recurso";
        $this->view->render('pagError/inicio');

    }
}

?>