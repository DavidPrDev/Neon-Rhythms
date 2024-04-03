<?php
//require "service/home.php";

class aboutController
{
    private $page_title;
    private $description;
    private $view;
    private $serviceObj;


    public function __construct()
    {
        $this->view = '';
        $this->page_title = '';
        $this->description = '';
        // $this->serviceObj = new HomeService(); //Creacion del objeto para poder invocar sus metodos 

    }

    public function index()
    {
        $this->view = 'index';
        $this->page_title = 'index';
        $this->description = 'pagina home de mi web';
        //return   $this->serviceObj->index();
    }

    //geter para mostrar atributos privados
    public function getPageTitle(): string
    {
        return $this->page_title;
    }

    public function getView(): string
    {
        return $this->view;
    }
    public function getDescription(): string
    {
        return $this->description;
    }
}
