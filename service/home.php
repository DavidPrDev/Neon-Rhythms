<?php
require "model/home.php";
require "service/Database.php";

class HomeService
{

    private $db;

    public function __construct()
    {

        $this->db = new Database();
    }
}
