<?php 
//aqui iira login i to el rollo 

class Home 
{

    private $demo = '';
   
    public function __construct($demo)
    {

        $this->demo=$demo;

    }

    /* Index */
    
    public function getDemo(){return $this->demo;}
    
   
}
?>