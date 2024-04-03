<?php
require __DIR__ . "/../service/Database.php";
class playService
{

    private $table = '';

    private $db;

    public function __construct()
    {

        $this->db = new Database();
    }
    function getScore()
    {
        $this->db->connect();
        $resultSet = $this->db->select(
            "scores",
            "id,user,score",
            "",
            "score DESC"
        );
        $this->db->disconnect();
        return $resultSet;
    }
    function updateSore($user, $score)
    {

        $this->db->connect();

        $longRanking = $this->db->select("scores", "id");

        if (count($longRanking) == 5) {
            $resultId = $this->db->select(
                "scores",
                "id",
                "",
                "score ASC LIMIT 1"
            );
            if ($resultId != false) {
                $idConv = intval($resultId[0]['id']);
                $deleteScore = $this->db->delete(
                    "scores",
                    true,
                    "id=$idConv"
                );
            }
        }



        $insertScore = $this->db->insertIdentity(
            "scores",
            [$user, $score],
            "user,score"
        );
        $this->db->disconnect();
        return $insertScore;
    }
}
