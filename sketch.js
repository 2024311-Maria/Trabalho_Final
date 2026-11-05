//colours
let bgColour = [64, 62, 122];

//lanes para oas notas andarem e as letras
const lanes = [
  { top: 5.75 / 16, bottom: 3.5 / 16, key: "a" },
  { top: 7.25 / 16, bottom: 6.5 / 16, key: "s" },
  { top: 8.75 / 16, bottom: 9.5 / 16, key: "k" },
  { top: 10.25 / 16, bottom: 12.5 / 16, key: "l" }
];

let notes = [];

let radius = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(bgColour,50);
}

function draw() {
  background(bgColour, 50);
  
  //rectangulo
  //rect(x, y, w, [h])
  /* fill(58, 13, 39, 160);
  rect (windowWidth * 1 / 8, windowHeight * 6 / 8, windowWidth * 12 / 16, 150); //linha de cima 1
 */
  //divisão das linhas pela tela
  stroke(255, 100);
  strokeWeight(1);
  line(windowWidth * 5 / 16, 0, windowWidth * 2 / 16, windowHeight); //linha da esq 1
  line(windowWidth * 6.5 / 16, 0, windowWidth * 5 / 16, windowHeight); //linha da esq 2
  line(windowWidth * 1 / 2, 0, windowWidth * 1 / 2, windowHeight); //linha do meio do ecra
  line(windowWidth * 9.5 / 16, 0, windowWidth * 11 / 16, windowHeight); //linha da dir 2
  line(windowWidth * 11 / 16, 0, windowWidth * 14 / 16, windowHeight); //linha da dir 1 

  line(windowWidth * 1 / 8, windowHeight * 6 / 8, windowWidth * 7 / 8, windowHeight * 6 / 8); //linha de cima 1

  //Linhas para os circulos andarem (metade das de cima)
  stroke(0, 100);
  line(windowWidth * 5.75 / 16, 0, windowWidth * 3.5 / 16, windowHeight); //linha da esq 1
  line(windowWidth * 7.25 / 16, 0, windowWidth * 6.5 / 16, windowHeight); //linha da esq 2
  line(windowWidth * 8.75 / 16, 0, windowWidth * 9.5 / 16, windowHeight); //linha da dir 2
  line(windowWidth * 10.25 / 16, 0, windowWidth * 12.5 / 16, windowHeight); //linha da dir 1 

  //tenho q mudar o x e y do circulo para ele andar pelas linhas
  circle(100,100,radius);
  //radius += 0.2;

  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}