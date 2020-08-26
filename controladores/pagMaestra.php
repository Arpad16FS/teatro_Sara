<?php
/**
 * Description of pagMaestra
 *
 * @author Árpád
 * @version 1.0
 * @creation_date 17/02/2019
 * @package PreAphaArpad
 */
class pagMaestra extends Controller{
    function __construct(){
        parent::__construct();
        $this->view->mensaje = "";
    }

    function render(){
        $this->view->render('pagMaestra/inicio');
    }

    public function saludo(){
        $this->view->mensaje =  "<p>Ejecutaste el método saludo</p>";
        $this->render();
    }

    public function __destruct() {

    }
}
?>