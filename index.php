<?php
require_once 'config/config.php';
//require_once 'model/db.php';

//determinacion de si esta especificado el controlados y el action ,si no lo este se toman valores por defecto 
if (!isset($_GET["controller"])) {
    $_GET["controller"] = constant("DEFAULT_CONTROLLER");
}

if (!isset($_GET["action"])) {
    $_GET["action"] = constant("DEFAULT_ACTION");
}

//determina el path del controlador invocado
$controller_path = 'controller/' . $_GET["controller"] . '.php';

//si no exite el file le pone la ruta por defecto
if (!file_exists($controller_path)) {
    $controller_path = 'controller/' . constant("DEFAULT_CONTROLLER") . '.php';
}

require_once $controller_path;

$controllerName = $_GET["controller"] . 'Controller';
$controller = new $controllerName();

$dataToView["data"] = array();

if (method_exists($controller, $_GET["action"])) {
    $dataToView["data"] = $controller->{$_GET["action"]}();
}

require_once 'view/template/head.php';
require_once 'view/template/header.php';
require_once 'view/template/nav.php';

require_once 'view/' . $_GET["controller"] . "/" . $controller->getView() . '.php';

require_once 'view/template/aside.php';
require_once 'view/template/footer.php';
if ($_GET["controller"] == "play") {
    require_once 'view/template/linksS.php';
} else {
    require_once 'view/template/links.php';
}
