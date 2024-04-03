window.addEventListener('DOMContentLoaded',function()
{

  let puntos = 0;
  let mainGame = $("#mainGame");
  //SECCION ANDROID///
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

    const cntBtnA = document.getElementById("cntBtnA");
    const cntBtnS = document.getElementById("cntBtnS");
    const cntBtnD = document.getElementById("cntBtnD");

    cntBtnA.innerHTML = "<div class='btnLat' id='a'><b>A</b></div>";
    cntBtnS.innerHTML += "<div class='btnCnt' id='s'><b>S</b></div>";
    cntBtnD.innerHTML += "<div class='btnLat' id='d'><b>D</b></div>";

    const botonA = document.getElementById("a");
    botonA.addEventListener('click', function() {
      simularPulsacionTecla('a');
    });
    const botonS = document.getElementById("s");
    botonS.addEventListener('click', function() {
      simularPulsacionTecla('s');
    });
    const botonD = document.getElementById("d");
    botonD.addEventListener('click', function() {
      simularPulsacionTecla('d');
    });
  } 
   //FIN SECCION ANDROID///
  hidDiv()
  const tablaRanking = document.getElementById('tablaRanking');
  window.addEventListener('resize', function(){
    //768px
    if(window.outerWidth>=768){
      tablaRanking.style.right = "initial";
    }
    hidDiv()
  });

  var elementoPadre = document.getElementById("contenedorRanking");
  const btnRew = document.getElementById('btnRew');
  ////////////////IMPORTANTE///////////////////////////
  //Evento listener para un btn que se crea dinamicamente y evitar error
  elementoPadre.addEventListener("click", function (event) {
    if (event.target.id === "btnModal") {
      
      const miDiv3 = document.getElementById('tablaRanking');
      btnRew.style.display = "block";
      miDiv3.style.display = "block";
      miDiv3.style.animation = 'moverModal 0.3s linear';//
      miDiv3.addEventListener("animationend", function() {

        if(window.outerWidth>400){
          miDiv3.style.right = "0%";
        }else{
          miDiv3.style.right = "0%";
        }

        let btn=document.getElementById('btnModal');
        btn.style.display = "none";
        let btnrew=document.getElementById('btnRew');
        btnrew.style.display = "block";
      });
    }
  });


  btnRew.addEventListener('click', function() {
    
    tablaRanking.style.right = "initial";
    tablaRanking.style.animation = 'retornarModal 0.2s linear';

    tablaRanking.addEventListener('animationend', function() {
      
      tablaRanking.style.display = 'none';
      tablaRanking.style.right = "initial";
      btnRew.style.display = 'none';
      let elemento = document.getElementById("btnModalCont");
      elemento.innerHTML = "<div  id='btnModal'><i class='fa-regular fa-square-caret-down fa-rotate-90 fa-xl'></i></div>";
    }, { once: true }); 
  });

  const miDiv = document.getElementById('pantallon');
  
  const botonPantallaCompleta = document.getElementById('botonPantallaCompleta');

  botonPantallaCompleta.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      miDiv?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  });
  const secuenciaDeNotas = [
      { tiempo: 0.9, posicion: "15", tipo: 'a' },
      { tiempo: 2.6, posicion: "15", tipo: 'a' },
      { tiempo: 4.2, posicion: "15", tipo: 'a' },
      { tiempo: 5.8, posicion: "15", tipo: 'a' },
      { tiempo: 6, posicion: "15", tipo: 'a' },
      { tiempo: 7.8, posicion: "39", tipo: 's' },
      { tiempo: 9.5, posicion: "66", tipo: 'd' },
      { tiempo: 10.6, posicion: "66", tipo: 'd' },
      { tiempo: 11.6, posicion: "66", tipo: 'd' },
      { tiempo: 12, posicion: "39", tipo: 's' },
      { tiempo: 12.4, posicion: "15", tipo: 'a' },
      { tiempo: 12.8, posicion: "39", tipo: 's' },
      { tiempo: 13.2, posicion: "66", tipo: 'd' },
      // Continuación de la secuencia
      { tiempo: 14.0, posicion: "39", tipo: 's' },
      { tiempo: 15.0, posicion: "66", tipo: 'd' },
      { tiempo: 16.0, posicion: "15", tipo: 'a' },
      { tiempo: 17.0, posicion: "39", tipo: 's' },
      { tiempo: 17.5, posicion: "66", tipo: 'd' },

      { tiempo: 18.5, posicion: "39", tipo: 's' },
      { tiempo: 19.5, posicion: "66", tipo: 'd' },
      { tiempo: 19.8, posicion: "15", tipo: 'a' },
      { tiempo: 21.5, posicion: "39", tipo: 's' },
      { tiempo: 22, posicion: "66", tipo: 'd' },

      { tiempo: 23.5, posicion: "39", tipo: 's' },
      { tiempo: 24.5, posicion: "66", tipo: 'd' },
      { tiempo: 25, posicion: "15", tipo: 'a' },
      { tiempo: 26, posicion: "39", tipo: 's' },
      { tiempo: 26.5, posicion: "66", tipo: 'd' },

      { tiempo: 27, posicion: "15", tipo: 'a' },
      { tiempo: 27.5, posicion: "39", tipo: 's' },
      { tiempo: 28, posicion: "66", tipo: 'd' },

      { tiempo: 29, posicion: "15", tipo: 'a' },
      { tiempo: 29.6, posicion: "66", tipo: 'd' },
      { tiempo: 30.2, posicion: "15", tipo: 'a' },
      { tiempo: 30.8, posicion: "66", tipo: 'd' },
      { tiempo: 31.4, posicion: "15", tipo: 'a' },
      { tiempo: 32, posicion: "66", tipo: 'd' },
      { tiempo: 32.6, posicion: "15", tipo: 'a' },
      { tiempo: 33.2, posicion: "66", tipo: 'd' },

      { tiempo: 33.8, posicion: "15", tipo: 'a' },
      { tiempo: 34.4, posicion: "39", tipo: 's' },
      { tiempo: 35, posicion: "66", tipo: 'd' },

      { tiempo: 35, posicion: "15", tipo: 'a' },
      { tiempo: 29.6, posicion: "66", tipo: 'd' },
      { tiempo: 30.2, posicion: "15", tipo: 'a' },
      { tiempo: 30.8, posicion: "66", tipo: 'd' },
      { tiempo: 31.4, posicion: "15", tipo: 'a' },
      { tiempo: 32, posicion: "66", tipo: 'd' },
      { tiempo: 32.6, posicion: "15", tipo: 'a' },
      { tiempo: 33.2, posicion: "66", tipo: 'd' },

      { tiempo: 35, posicion: "15", tipo: 'a' },
      { tiempo: 35.6, posicion: "66", tipo: 'd' },
      { tiempo: 36.2, posicion: "15", tipo: 'a' },
      { tiempo: 36.8, posicion: "66", tipo: 'd' },
      { tiempo: 37.4, posicion: "15", tipo: 'a' },
      { tiempo: 38, posicion: "66", tipo: 'd' },
      { tiempo: 38.6, posicion: "15", tipo: 'a' },
      { tiempo: 39.2, posicion: "66", tipo: 'd' },

      { tiempo: 40.2, posicion: "15", tipo: 'a' },
      { tiempo: 40.7, posicion: "39", tipo: 's' },
      { tiempo: 41.2, posicion: "66", tipo: 'd' },
      // Puedes seguir agregando más notas según sea necesario
      { tiempo: 42, posicion: "15", tipo: 'a' },  // Incremento: N/A (Primera nota)
      { tiempo: 43.7, posicion: "15", tipo: 'a' },  // Incremento: 1.7 segundos
      { tiempo: 45.3, posicion: "15", tipo: 'a' },  // Incremento: 1.6 segundos
      { tiempo: 46.9, posicion: "15", tipo: 'a' },  // Incremento: 1.6 segundos
      { tiempo: 48.9, posicion: "39", tipo: 's' },  // Incremento: 1.8 segundos
      { tiempo: 50.6, posicion: "66", tipo: 'd' },  // Incremento: 1.7 segundos
      { tiempo: 51.7, posicion: "66", tipo: 'd' }, // Incremento: 1.1 segundos
      { tiempo: 52.7, posicion: "66", tipo: 'd' }, // Incremento: 1.0 segundos
      { tiempo: 53.1, posicion: "39", tipo: 's' },  // Incremento: 0.4 segundos
      { tiempo: 53.5, posicion: "15", tipo: 'a' }, // Incremento: 0.4 segundos
      { tiempo: 53.9, posicion: "39", tipo: 's' }, // Incremento: 0.4 segundos
      { tiempo: 54.3, posicion: "66", tipo: 'd' }, // Incremento: 0.4 segundos

      { tiempo: 55, posicion: "15", tipo: 'a' },     // Incremento: N/A (Primera nota)
      { tiempo: 55.5, posicion: "39", tipo: 's' },   // Incremento: 0.5 segundos
      { tiempo: 56, posicion: "66", tipo: 'd' },     // Incremento: 0.5 segundos

      { tiempo: 57, posicion: "15", tipo: 'a' },     // Incremento: 1.0 segundos
      { tiempo: 57.6, posicion: "66", tipo: 'd' },   // Incremento: 0.6 segundos
      { tiempo: 58.2, posicion: "15", tipo: 'a' },   // Incremento: 0.6 segundos
      { tiempo: 58.8, posicion: "66", tipo: 'd' },   // Incremento: 0.6 segundos
      { tiempo: 59.4, posicion: "15", tipo: 'a' },   // Incremento: 0.6 segundos
      { tiempo: 60, posicion: "66", tipo: 'd' },     // Incremento: 0.6 segundos
      { tiempo: 60.6, posicion: "15", tipo: 'a' },   // Incremento: 0.6 segundos
      { tiempo: 61.2, posicion: "66", tipo: 'd' },   // Incremento: 0.6 segundos

      { tiempo: 61.8, posicion: "15", tipo: 'a' },   // Incremento: 0.6 segundos
      { tiempo: 62.4, posicion: "39", tipo: 's' },   // Incremento: 0.6 segundos
      { tiempo: 63, posicion: "66", tipo: 'd' },     // Incremento: 0.6 segundos

      { tiempo: 63.6, posicion: "15", tipo: 'a' },     // Incremento: 0.0 segundos (Repetición de tiempo)
      { tiempo: 63.9, posicion: "66", tipo: 'd' },   // Incremento: 0.6 segundos
      { tiempo: 64.5, posicion: "15", tipo: 'a' },   // Incremento: 0.6 segundos
      { tiempo: 65.1, posicion: "66", tipo: 'd' },   // Incremento: 0.6 segundos
      { tiempo: 65.7, posicion: "15", tipo: 'a' },   // Incremento: 0.6 segundos
      { tiempo: 66.3, posicion: "66", tipo: 'd' },     // Incremento: 0.6 segundos
      { tiempo: 66.9, posicion: "15", tipo: 'a' },   // Incremento: 0.6 segundos
      { tiempo: 67.5, posicion: "66", tipo: 'd' }, 
      { tiempo: 68.1, posicion: "66", tipo: 'd' },     // Incremento: 0.6 segundos
      { tiempo: 68.7, posicion: "15", tipo: 'a' },

      { tiempo: 69.1, posicion: "15", tipo: 'a' },   // Incremento: 0.6 segundos
      { tiempo: 69.5, posicion: "39", tipo: 's' },   // Incremento: 0.6 segundos
      { tiempo: 69.9, posicion: "66", tipo: 'd' },   // Incremento: 0.6 segundos
  ];

  let audioGame = $("#sound")[0];
  let context;
  let tiemposYaCreados = new Set();
  let todasLasBolitasCreadas = false;
  var cont=0;
  const play = document.getElementById('play');
  var miModal = new bootstrap.Modal(document.getElementById('modalRanking'));
  var tituloModal=document.getElementById('tituloModal');
  var modalBody=document.getElementById('modalBody');

  play.addEventListener('click', function()  {
    miModal._element.classList.remove('rotate-modal');
    tituloModal.innerHTML="<span id='frsTit'>¿Es tu primera vez en <span id='titleTut'>Neon-rhythms?</span></span>";
    modalBody.innerHTML='Si es tu primera vez en neo-rhythms pulsa en si para ver un tutorial sobre el juego. ';

    let accpTut = document.getElementById("contGuardar");
    let noTut = document.getElementById("contCancel");
    noTut.innerHTML="";
    accpTut.innerHTML="";
    // Crea el botón "Si"
    let btnAceptar = document.createElement("button");
    btnAceptar.type = "button";
    btnAceptar.className = "btn btn-primary";
    btnAceptar.id = "aceptarTut";
    btnAceptar.textContent = "Si";
    
    // Agrega el botón "Si" al contenedor accpTut
    accpTut.appendChild(btnAceptar);
    
    // Crea el botón "No"
    let btnCancelar = document.createElement("button");
    btnCancelar.type = "button";
    btnCancelar.className = "btn btn-secondary";
    btnCancelar.setAttribute("data-bs-dismiss", "modal");
    btnCancelar.id = "cancelarTut";
    btnCancelar.textContent = "No";
    
    // Agrega el botón "No" al contenedor noTut
    noTut.appendChild(btnCancelar);
    
    // Muestra el modal
    miModal.show();

    btnAceptar.addEventListener('click', function(){
      //ajax para contenido html 
      var html;
      fetch('http://192.168.0.27/projects/Neon-Rhythms/ajax/tutorialContent.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud. Estado: ' + response.status + ' Mensaje: ' + response.statusText);
            }
            return response.text(); // Si esperas HTML como respuesta
        })
        .then(htmlResponse => {
         
      animarModal(htmlResponse,"<span id='tiTut'>Tutorial</span>","Finalizar",null)
        })
        .catch(error => {
            console.error('Error:', error);
        });

    
      noTut.addEventListener('click',  function(event){
        if (event.target.id === "finalizar") {
          iniciarJuego();
          miModal.hide();
        }
        
      }); 
  
    });
    btnCancelar.addEventListener('click', function(){
      iniciarJuego();
    })

  });

function iniciarJuego(){

  cont++;
  context = new (window.AudioContext || window.webkitAudioContext)();
  audioGame = new Audio('content/source/media/SergeQuadrado-DemonsFree.mp3');
  audioGame.volume=0.2;
  // Escuchar el evento 'canplaythrough' en lugar de 'canplay' para asegurarse de que se pueda reproducir sin problemas
  audioGame.addEventListener('canplaythrough', function () {
      iniciarAparicionBolitas();

  });

  

  var modalAnimation = new bootstrap.Modal(document.getElementById('modalRanking'))
  modalAnimation._element.classList.remove('rotate-modal');

  document.getElementById('play').classList.add('disabled');
  
  //evento para detectar fin cancion y pasar a introduccir nick
  audioGame.addEventListener('ended', function () {
    
    document.getElementById('tituloModal').innerHTML = "Introducce 3 letras para el ranking";
    modalBody.innerHTML="<div class='row'><div class='col-6'><label for='iniciales' id='lname'>Nombre</label><input type='text' class='form-control' name='iniciales' id='iniciales' maxlength='3' required></div><div class='col-6'><p id='scoreR'></p></div></div>";
     tiemposYaCreados = new Set();
     todasLasBolitasCreadas = false;
    cont=0;
    var contador = document.getElementById('contador');
    var score = contador.innerHTML;
    //inyectar los parametros que faltan 
    var scoreR = document.getElementById('scoreR');
    scoreR.innerHTML=score;

    const arrScore = score.split(":");
    let newScore=parseInt(arrScore[1]);
    let btnGuardar = document.getElementById('contGuardar');
    let btnCancelar=document.getElementById('contCancel');

    btnGuardar.innerHTML="<button type='button' class='btn btn-primary' id='guardar'>Guardar</button>";
    btnCancelar.innerHTML="<button type='button' class='btn btn-secondary' data-bs-dismiss='modal' id='cancelar'>Cancelar</button>";
    
    miModal.show();

    var iniciales = document.getElementById('iniciales');
    
    var guardar = document.getElementById('guardar');
    guardar.addEventListener('click', function()  {
      modalAnimation._element.classList.add('rotate-modal');
   //AJAX
   if(iniciales.value.length>=3){

    let score1=document.getElementById('score-1').innerHTML;
    let score2=document.getElementById('score-2').innerHTML;
    let score3=document.getElementById('score-3').innerHTML;
    let score4=document.getElementById('score-4').innerHTML;
    let score5=document.getElementById('score-5').innerHTML;

    if(score1=="---------"){score1=0;}
    if(score2=="---------"){score2=0;}
    if(score3=="---------"){score3=0;}
    if(score4=="---------"){score4=0;}
    if(score5=="---------"){score5=0;}


    if(newScore>score1  || 
      newScore>score2 || 
      newScore>score3 || 
      newScore>score4||
      newScore>score5){
        // Definir los parámetros de la solicitud POST
  var parametros = 'score=' + parseInt(newScore) + '&user=' + iniciales.value;

  // Configurar la solicitud con fetch 
 //para entorno local wifi fetch('http://192.168.0.27/projects/Neon-Rhythms/ajax/updateScore.php', 
    fetch('http://192.168.0.27/projects/Neon-Rhythms/ajax/updateScore.php', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: parametros,
    })
    .then(response => {
      if (!response.ok) {
          throw new Error('Error en la solicitud. Estado: ' + response.status + ' Mensaje: ' + response.statusText);
      }
      return response.json();
    })
    .then(jsonResponse => {
      var tRank = document.getElementById('rankingContainer');
      tRank.innerHTML = spinner;

      var newId = jsonResponse.id;
      console.log(newId);
      var htmlTable = jsonResponse.html;
      modalAnimation._element.classList.remove('rotate-modal');

      var spinner = "<div class='spinner-border text-info' role='status'><span class='sr-only'>Loading...</span></div>";
      
      tRank.innerHTML = htmlTable;

      var cosa = "a" + newId;
      var ranking = document.getElementById(cosa).innerHTML;

      let bodyCnt = "Posicion  " + ranking + " 👌";
      animarModal(bodyCnt, "!Enhorabuena estas en el <b id='rnkTtl'>Ranking!</b>", btnAccept = null, btnCancel = null)
      
      // Ahora puedes utilizar htmlTable sin problemas
      setTimeout(() => {
          tRank.innerHTML = htmlTable;
      }, 700);
    })
    .catch(error => {
      console.error('Error de red al intentar hacer la solicitud:', error.message);
    });


      }else{

         animarModal("No has llegado a la puntuación necesaria, inténtalo otra vez y consigue el poder del neon .","<span id='gameOver'>¡Game over!</span>",btnAccept=null,btnCancel=null)
         document.getElementById('play').classList.remove('disabled');
      }
      
   }else{
    
    iniciales.classList.add('error');
    iniciales.placeholder = '3 iniciales';
   }

    })
    document.getElementById('contador').innerHTML="score:00";
    document.getElementById('play').classList.remove('disabled');
  });
 }
// Función para iniciar la aparición de las bolitas
function iniciarAparicionBolitas() {
  audioGame.play();
  // Iniciar el seguimiento del tiempo de audio
  startTime = context.currentTime;
  audioGame.addEventListener('timeupdate', function () {
    let currentTime = audioGame.currentTime;
    
    if (!todasLasBolitasCreadas) {
      secuenciaDeNotas.forEach((nota) => {
          if (currentTime >= nota.tiempo && !tiemposYaCreados.has(nota.tiempo)) {
              crearBolita(nota.posicion,nota.tipo);
              tiemposYaCreados.add(nota.tiempo);
          }
      });
        // Verificar si se han creado todas las bolitas
      if (tiemposYaCreados.size === secuenciaDeNotas.length) {
          todasLasBolitasCreadas = true;
      }
    }
  });
}

  document.addEventListener("keydown", function(event) {
    if (event.repeat) {
      // Ignorar eventos 'keydown' repetidos
      return;
    }
    // Verifica si se presionó la tecla "A" (código de tecla 65) y si hay elementos .keyContainer en el DOM
    if ((event.key === "a" || event.key === "s" || event.key === "d") && cont==1 ) {

      const saltarin = $("#saltarin");

      // Quita y luego agrega la clase de animación para reiniciarla
      saltarin.removeClass('saltarin');
      void saltarin.width();
      saltarin.addClass('saltarin');

      const sound = document.getElementById("sound");
      sound.play();
      sound.volume=0.1;
      const firstContainer = $(".img").first();
      //proteccion para cuando la imagen no esta en la zona
      if (firstContainer.length > 0) {
        var tipo = firstContainer.data('tipo');
        // Verifica si la imagen está en la posición final y en el tramo específico antes de eliminarla y sumar un punto
        const containerBottom = firstContainer.offset().top + firstContainer.height();
        const gameBottom = $("#mainGame").offset().top + $("#mainGame").height();
        if (containerBottom >= gameBottom -40) {
          firstContainer.remove();
          if(tipo==event.key){
            puntos++;
            let puntosFormateador=(puntos<10 ? "0"+puntos : puntos);
            $("#contador").html("score:"+puntosFormateador); // Actualiza el contador en tiempo real

          mainGame.css("border-bottom-color", "green");
          mainGame.css("box-shadow", "0 0 10px rgba(0, 255, 0, 0.5), 0 0 15px rgba(0, 255, 0, 0.5), 0 0 20px rgba(0, 255, 0, 0.5), 0 0 30px rgba(0, 255, 0, 0.5)");
          saltarin.css("background-color","green")
          setTimeout(function() {
            // Restaura el color del borde a su valor original después de un tiempo
            mainGame.css("border-bottom-color", "rgb(155, 155, 155)");
            mainGame.css("box-shadow","0 0 10px rgba(192, 192, 192, 0.5),0 0 15px rgba(192, 192, 192, 0.7),0 0 20px rgba(192, 192, 192, 0.9),0 0 30px rgba(192, 192, 192, 1)");
            saltarin.css("background-color","rgb(205, 220, 68)")
          }, 300);// Cambia el color de vuelta después de 1 segundo
          }
        }
      }
    }
  });
});
// Función para crear y mover las bolitas
function crearBolita(posicion,tipo) {

  var bolita = document.createElement("img");
  
  bolita.className = "img";
  bolita.setAttribute("data-tipo", tipo);
  bolita.src = "content/source/img/" + tipo + ".png";
  
  if(tipo=='s'){
    bolita.classList.add('imgCentral');
  }else{
    bolita.classList.add('img-lat');
  }

  bolita.style.marginLeft = `${posicion}%`;

  
  var mainGame = document.getElementById("mainGame");
  mainGame.appendChild(bolita);
  
  bolita.style.animation = 'moverBolita 1.5s linear';
  
  bolita.addEventListener('animationend', function() {
    mainGame.removeChild(bolita);  // Eliminar la bolita
  });
  
}
function simularPulsacionTecla(tecla) {
  var eventoTecla = new KeyboardEvent('keydown', { key: tecla });
 
  document.dispatchEvent(eventoTecla);
}
function hidDiv() {
  const miDiv = document.getElementById('tablaRanking');

  if (window.innerWidth <= 768) {
      // Si la pantalla es pequeña, oculta el elemento y muestra el botón 👑
      miDiv.style.display = "none";
      miDiv.style.left = "initial";
      let elemento = document.getElementById("btnModalCont");
      elemento.innerHTML = "<div id='btnModal'></div><i class='fa-regular fa-square-caret-down fa-rotate-90 fa-xl'></i>";
  }
  if (window.innerWidth > 768) {
     
      miDiv.style.display = "block";
      let elemento = document.getElementById("btnModal");
      let btnCovery = document.getElementById("btnRew");
      if (elemento) {
          elemento.remove();
      }
      btnCovery.style.display = "none";

      miDiv.style.left = "initial";
      miDiv.style.animation = 'none';
      void miDiv.offsetWidth; 
      miDiv.style.animation = null;
  }
}
function animarModal(bodyCnt,titleCnt,btnAccept=null,btnCancel=null){
  var tituloModal=document.getElementById('tituloModal');
  var modalBody=document.getElementById('modalBody');

  var cancelar=document.getElementById('contCancel');
  var btnGuardar=document.getElementById("contGuardar");

  var modalAnimation = new bootstrap.Modal(document.getElementById('modalRanking'));
  var btnFin="<button type='button' class='btn btn-secondary' data-bs-dismiss='modal' id='finPartida'>Finalizar</button>";
        // Accede al elemento del modal y aplica la clase
    modalAnimation._element.classList.add('rotate-modal');
    
    setTimeout(() => {
      modalBody.style.visibility = "hidden";
      tituloModal.style.visibility = "hidden";
      if(btnAccept==null && btnCancel==null){
      btnGuardar.innerHTML="";
      cancelar.innerHTML="<button type='button' class='btn btn-secondary' data-bs-dismiss='modal' id='finPartida'>Fin de Partida</button>";
      
      }
      else if(btnCancel==null){
        //qui boton con id finalizar
        btnGuardar.innerHTML="";
        cancelar.innerHTML="<button type='button' class='btn btn-secondary' data-bs-dismiss='modal' id='finalizar'>Finalizar</button>";
      }
      
    }, "400");
    
    setTimeout(() => {
      modalBody.innerHTML=bodyCnt;
      tituloModal.innerHTML=titleCnt;
      tituloModal.style.visibility = "visible";
      modalBody.style.visibility = "visible";
      }, "500");
}
