<?php
require "service/play.php";


class playController
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
        $this->serviceObj = new playService(); //Creacion del objeto para poder invocar sus metodos 

    }

    public function index()
    {
        $this->view = 'index';
        $this->page_title = 'index';
        $this->description = 'pagina home de mi web';
        $result = $this->serviceObj->getScore();

        $html = "<table class='table table-dark'>
        <thead>
            <tr>
                <th scope='col'>#</th>
                <th scope='col'>name</th>
                <th scope='col' class='text-center'>score</th>
            </tr>
        </thead>
        <tbody>";
        $cont = 1;

        for ($i = 0; $i < 5; $i++) {

            $user = isset($result[$i]['user']) ? $result[$i]['user'] : "---------";
            $score = isset($result[$i]['score']) ? $result[$i]['score'] : "---------";
            $numRanking = $i + 1;
            $id = isset($result[$i]['id']) ? "id='a" . $result[$i]['id'] . "'" : "";
            if ($numRanking == 1) {
                $html .= "<tr>
                            <th " . $id . ">$numRanking</th>
                            <td>$user 👑</td>
                            <td id='score-$cont' class='text-center'>$score</td>
                         </tr>";
            } else {
                $html .= "<tr>
                <th $id>$numRanking</th>
                <td>$user</td>
                <td id='score-$cont' class='text-center'>$score</td>
              </tr>";
            }
            $cont++;
        }
        $html .= "</tbody></table>";
        return $html;
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
