<?php
//cuidadito con el header el localhost y la madre que lo pario jaja 
header("Access-Control-Allow-Origin: http://localhost");
$html = " <div id='carouselExampleControls' class='carousel slide' data-bs-ride='carousel' data-bs-interval='false'>
<div class='carousel-inner'>
    <div class='carousel-item active'>
        <div class='row' id='firstCarrusel'>
            <div class='col-2'></div>
            <div class='col-8 text-center'>
                <img src='content/source/img/a.png' width='50px' height='50px'>
                <img src='content/source/img/s.png' width='50px' height='50px'>
                <img src='content/source/img/d.png' width='50px' height='50px'>
            </div>
            <div class='col-2'></div>
        </div>
        <div class='row '>
            <div class='col-2'></div>
            <div class='col-8 text-light text-center'>
                <p>Tendrás que acertar una secuencia de notas , presiona en el teclado las letras a ,s o d según la imagen que aparezca.</p>
            </div>
            <div class='col-2'></div>
        </div>
    </div>
    <div class='carousel-item'>
        <div class='row'>

            <div class='col-2'></div>
            <div class='col-8 text-center'>
                <img src='content/source/img/tut2.png' width='240px' height='170px'>

            </div>
            <div class='col-2'></div>
        </div>
        <div class='row'>
            <div class='col-2'></div>
            <div class='col-8 text-light text-center'>
                <p>Si juegas en smartphone , aparecerán 3 botones para poder jugar.</p>
            </div>
            <div class='col-2'></div>
        </div>
    </div>
    <div class='carousel-item'>
        <div class='row'>

            <div class='col-2'></div>
            <div class='col-8 text-center'>
                <img src='content/source/img/tut3.png' width='240px' height='170px'>

            </div>
            <div class='col-2'></div>
        </div>
        <div class='row'>
            <div class='col-2'></div>
            <div class='col-8 text-light text-center'>
                <p>Si la nota está en la zona verde , sumarás un punto.</p>
            </div>
            <div class='col-2'></div>
        </div>
    </div>
    <div class='carousel-item'>
        <div class='row'>
            <div class='col-2'></div>
            <div class='col-8 text-light text-center'>
                <h2 id='titFtut'>¡Buena Suerte!</h2>
            </div>
            <div class='col-2'></div>
        </div>
    </div>
</div>
<div class='carousel-indicators '>
    <button type='button' data-bs-target='#carouselExampleControls' data-bs-slide-to='0' class='active' aria-current='true' aria-label='Slide 1'></button>
    <button type='button' data-bs-target='#carouselExampleControls' data-bs-slide-to='1' aria-label='Slide 2'></button>
    <button type='button' data-bs-target='#carouselExampleControls' data-bs-slide-to='2' aria-label='Slide 3'></button>
    <button type='button' data-bs-target='#carouselExampleControls' data-bs-slide-to='3' aria-label='Slide 4'></button>
</div>

<button class='carousel-control-prev' type='button' data-bs-target='#carouselExampleControls' data-bs-slide='prev'>
    <span class='carousel-control-prev-icon' aria-hidden='true'></span>
    <span class='visually-hidden'>Previous</span>
</button>
<button class='carousel-control-next' type='button' data-bs-target='#carouselExampleControls' data-bs-slide='next'>
    <span class='carousel-control-next-icon' aria-hidden='true'></span>
    <span class='visually-hidden'>Next</span>
</button>
</div>";
echo $html;
