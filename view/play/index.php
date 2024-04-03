<main>
    <div class="container ">

        <div class="row ">
            <span id='pantallon'>
                <div class="row " id='buttonContainer'>

                    <div class='col-12'>
                        <div id="play"><b>Play</b></div>
                        <span id='contador'>score:00</span>
                        <div id="botonPantallaCompleta">
                            <i class="fa-solid fa-maximize"></i>
                        </div>
                    </div>

                </div>

                <div class='row'>
                    <div class="col-md-7 col-8 ">
                        <div id="mainGame">
                            <div class="line-vertical left"></div>
                            <div class="line-vertical center"></div>
                            <div class="line-vertical right"></div>
                            <div id="saltarin"></div>
                            <span id="zonaSegura"></span>
                        </div>

                    </div>
                    <div class="col-md-5 col-4 " id='contenedorRanking'>

                        <span id='btnModalCont'></span>
                        <div id="tablaRanking">
                            <div class="row">
                                <div class="col">
                                    <h4 class='text-center tituloTabla'>Rankings</h4>
                                    <div id='btnRew'><i class="fa-regular fa-square-caret-down fa-rotate-270 fa-lg"></i></div>

                                </div>
                            </div>
                            <div class='row'>
                                <div class='col' id="rankingContainer">
                                    <?= $dataToView["data"] ?>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class='row' id="btnSmarthphone">

                    <div class='col-4' id='cntBtnA'></div>
                    <div class='col-4' id='cntBtnS'></div>
                    <div class=' col-4' id='cntBtnD'></div>

                </div>

            </span>
        </div>
    </div>
    <audio id="miAudio">
        <source src="content/source/media/SergeQuadrado-DemonsFree.mp3" type="audio/mpeg">
        Tu navegador no soporta la reproducción de audio.
    </audio>
    <audio id="sound" src="content/source/media/click.mp3"></audio>

    <div class="modal fade" id="modalRanking" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header ">
                    <h5 class="modal-title" id="tituloModal"></h5>

                </div>
                <div class="modal-body" id="modalBody">

                </div>
                <div class="modal-footer">
                    <span id='contCancel'></span>
                    <span id='contGuardar'></span>
                </div>
            </div>
        </div>
    </div>




</main>