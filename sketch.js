let myFont;
var screen = 0;
var quadrat1, quadrat2, quadrat3;
var timer = 1;
var imatge;

function preload() {
  myFont = loadFont('LECO 1976-Regular.otf');
  imatge = loadImage('text.png');
}

function setup() {
  createCanvas(450, 600);
}

function draw() {
  if (screen == 0) {
    poster_animation();
  } else if (screen == 1) {
    borrar();
    white_screen();
    if (frameCount % 60 == 0 && timer > 0) { //frameCount divisible per 60 => ha passat 1 segon
          timer --;
          if (timer == 0) {
            screen = 0;
            timer = 1; 
          }
        }
  }
}

function mouseClicked() {

  //Canvi d'escena
  screen = 1;
}

function deviceShaken(){
  
  //Canvi d'escena
  screen = 1;
}