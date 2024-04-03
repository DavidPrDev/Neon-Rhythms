<?php
require "../config/config.php";
require __DIR__ . "/../service/play.php";
header("Access-Control-Allow-Origin: http://localhost");

if (isset($_POST['score']) && isset($_POST['user'])) {
    // Capturar el valor de 'parametro1'
    $score = $_POST['score'];
    $user = $_POST['user'];
    $playService = new playService();
    $resultId = $playService->updateSore($user, $score);
    $rankService = new playService();
    $newRank = $rankService->getScore();
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

        $user = isset($newRank[$i]['user']) && $newRank[$i]['user'] !== null   ? $newRank[$i]['user'] : "---------";
        $score = isset($newRank[$i]['score']) && $newRank[$i]['score'] !== null ? $newRank[$i]['score'] : "---------";
        $numRanking = $i + 1;
        $id = isset($newRank[$i]['id']) ? "id='a" . $newRank[$i]['id'] . "'" : "";
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
    $data = array(
        'id' => $resultId,
        'html' => $html,

    );
    // Convertir el array asociativo a JSON
    $jsonData = json_encode($data);
    echo $jsonData;
} else {
    echo 'No data';
}
