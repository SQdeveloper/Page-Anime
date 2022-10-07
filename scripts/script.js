const check = document.querySelector(".switch [type='checkbox']");
const container = document.querySelector(".container");
const imgLogo = document.querySelector(".logo img");
const slider = document.querySelector(".slider");
const arrowNext = document.querySelector(".swiper-button-next");
const arrowPrev = document.querySelector(".swiper-button-prev");
const pText = document.querySelectorAll(".show p");
const space = "<p style='opacity:0'>g</p>";
const nameAnimes = [`Jujutsu${space}Kaisen`, `One${space}Punch${space}Man`, `Jujutsu${space}Kaisen`, `Boku${space}No${space}Heroe`, `Black${space}Clover`, `Kimetsu${space}No${space}Yaiba`, `Hunter${space}x${space}Hunter`, `One${space}Piece`];
let index = 1;
const img = document.querySelectorAll(".footer picture img");

//Inicializamos el nombre del primer anime
pText[0].innerHTML = `Jujutsu${space}Kaisen`;
pText[1].innerHTML = `Jujutsu${space}Kaisen`;
//sombra para el primero
tShadow1 = `0 0 5px rgba(216, 24, 255, 1),
0 0 10px rgba(216, 24, 255, 1),
0 0 20px rgba(216, 24, 255, 1),
0 0 40px rgba(160, 6, 190, 1),
0 0 80px rgba(160, 6, 190, 1),
0 0 90px rgba(160, 6, 190, 1)`;

bShadow1 = `0 0 5px rgba(216, 24, 255, 1),
0 0 15px rgba(216, 24, 255, 1),
0 0 40px rgba(160, 6, 190, 1),
0 0 80px rgba(160, 6, 190, 1)`;

//sombra para el segundo
tShadow2 = `0 0 5px rgba(0,178,255,1),
0 0 10px rgba(0,178,255,1),
0 0 20px rgba(0,178,255,1),
0 0 40px rgba(38,104,127,1),
0 0 80px rgba(38,104,127,1),
0 0 90px rgba(38,104,127,1)`;

bShadow2 = `0 0 5px rgba(0,178,255,1),
0 0 15px rgba(0,178,255,1),
0 0 40px rgba(38,104,127,1),
0 0 80px rgba(38,104,127,1)`;

//sombra para el cuarto
tShadow3 = `0 0 5px rgb(177, 0, 68,1),
0 0 10px rgba(177, 0, 68,1),
0 0 20px rgba(177, 0, 68,1),
0 0 40px rgb(139, 16, 30,1),
0 0 80px rgba(139, 16, 30,1),
0 0 90px rgba(139, 16, 30,1)`;

bShadow3 = `0 0 5px rgba(177, 0, 68,1),
0 0 15px rgba(177, 0, 68,1),
0 0 40px rgba(139, 16, 30,1),
0 0 80px rgba(139, 16, 30,1)`;

//sombra para el cuarto
tShadow4 = `0 0 5px rgb(26, 254, 253,1),
0 0 10px rgba(26, 254, 253,1),
0 0 20px rgba(26, 254, 253,1),
0 0 40px rgb(15, 83, 90,1),
0 0 80px rgba(15, 83, 90,1),
0 0 90px rgba(15, 83, 90,1)`;

bShadow4 = `0 0 5px rgba(26, 254, 253,1),
0 0 15px rgba(26, 254, 253,1),
0 0 40px rgb(15, 83, 90,1),
0 0 80px rgba(15, 83, 90,1)`;

//sombra para el quinto
tShadow5 = `0 0 5px rgb(177, 0, 68,1),
0 0 10px rgba(177, 0, 68,1),
0 0 20px rgba(177, 0, 68,1),
0 0 40px rgb(139, 16, 30,1),
0 0 80px rgba(139, 16, 30,1),
0 0 90px rgba(139, 16, 30,1)`;

bShadow5 = `0 0 5px rgba(177, 0, 68,1),
0 0 15px rgba(177, 0, 68,1),
0 0 40px rgba(139, 16, 30,1),
0 0 80px rgba(139, 16, 30,1)`;

//sombra par el sexto
tShadow6 = `0 0 5px rgb(255, 5, 138,1),
0 0 8px rgb(255, 5, 138,1),
0 0 10px rgba(110, 6, 62,1),
0 0 12px rgba(110, 6, 62,1),
0 0 18px rgba(110, 6, 62,1),
0 0 22px rgba(110, 6, 62,1),
0 0 90px rgba(110, 6, 62,1)`;

bShadow6 = `0 0 5px rgba(255, 5, 138,1),
0 0 15px rgba(255, 5, 138,1),
0 0 20px rgba(255, 5, 138,1),
0 0 30px rgba(110, 6, 62,1),
0 0 50px rgba(110, 6, 62,1)`;

//sombra para el septimo
tShadow7 = `0 0 5px rgba(98, 0, 255, 1),
0 0 10px rgba(98, 0, 255, 1),
0 0 20px rgba(98, 0, 255, 1),
0 0 40px rgba(67, 7, 163, 1),
0 0 80px rgba(67, 7, 163, 1),
0 0 90px rgba(67, 7, 163, 1)`;

bShadow7 = `0 0 5px rgba(98, 0, 255, 1),
0 0 15px rgba(98, 0, 255, 1),
0 0 40px rgba(67, 7, 163, 1),
0 0 80px rgba(67, 7, 163, 1)`;

//sombra par el octavo
tShadow8 = `0 0 5px rgb(250, 237, 30,1),
0 0 8px rgb(250, 237, 30,1),
0 0 10px rgba(254, 83, 4,1),
0 0 12px rgba(254, 83, 4,1),
0 0 18px rgba(254, 83, 4,1),
0 0 22px rgba(254, 83, 4,1),
0 0 90px rgba(219, 140, 2,1)`;

bShadow8 = `00 0 5px rgba(250, 237, 30,1),
0 0 15px rgba(250, 237, 30,1),
0 0 30px rgb(254, 83, 4,1),
0 0 50px rgba(254, 83, 4,1)`;

//Inicializamos con este color a las flechas next y prev
arrowNext.style.textShadow = tShadow1;
arrowPrev.style.textShadow = tShadow1;

//Eventos para abrir enlaces de redes sociales
img[0].addEventListener("click", ()=>{
    window.open("https://github.com/SQdeveloper");
});
img[1].addEventListener("click", ()=>{
    window.open("https://www.linkedin.com/in/jefferson-silva-quinto-03b1a1252/");
});

function modification(color, shadowBox, shadowText){
    slider.style.backgroundColor = color;
    slider.style.boxShadow =  shadowBox;
    arrowNext.style.textShadow = shadowText;
    arrowPrev.style.textShadow = shadowText;
}

function conditionals(){
    pText[0].innerHTML = nameAnimes[index-1];
    pText[1].innerHTML = nameAnimes[index-1];

    if(index == 1 || index == -7){
        modification("#800a97", bShadow1, tShadow1);
        index = 1;
    }
    else if(index == 2 || index == -6){
        modification("#049cf3", bShadow2, tShadow2);
    }
    else if (index == 3 || index == -5){
        modification("#800202", bShadow3, tShadow3);
    }
    else if (index == 4 || index == -4){
        modification("#0f535a", bShadow4, tShadow4);
    }
    else if(index == 5 || index == -3){
        modification("#800202", bShadow5, tShadow5);
    }
    else if(index == 6 || index == -2){
        modification("#8b034c", bShadow6, tShadow6);
    }
    else if(index == 7 || index == -1){
        modification("#4720d6", bShadow7, tShadow7);
    }
    else if(index == 8 || index == 0){
        modification("#fe5304", bShadow8, tShadow8);
        index = 0;
    }
}

//Eventos para los botones flechas next y prev
arrowNext.addEventListener("click", ()=>{
    index++;
    conditionals();
});

arrowPrev.addEventListener("click", ()=>{
    index--;
    conditionals();
});

//Funcion para cambiar el color del fondo y de los textos
check.addEventListener("change", ()=>{
    if(check.checked) {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        imgLogo.style.filter = "invert(0)";
    }
    else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        imgLogo.style.filter = "invert(100%)";
    }
});

//Esta seccion es para modificar el slide(el contenedor donde se deslizan las imagenes)
var swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });