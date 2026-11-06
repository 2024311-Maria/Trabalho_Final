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

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(bgColour,50);
}

function draw() {
  background(bgColour, 50);
  

  // ##################### divisão das linhas pela tela ##################

  stroke(255, 100);
  strokeWeight(2);
  line(windowWidth * 5 / 16, 0, windowWidth * 2 / 16, windowHeight); //linha da esq 1
  line(windowWidth * 6.5 / 16, 0, windowWidth * 5 / 16, windowHeight); //linha da esq 2
  line(windowWidth * 1 / 2, 0, windowWidth * 1 / 2, windowHeight); //linha do meio do ecra
  line(windowWidth * 9.5 / 16, 0, windowWidth * 11 / 16, windowHeight); //linha da dir 2
  line(windowWidth * 11 / 16, 0, windowWidth * 14 / 16, windowHeight); //linha da dir 1 

  //########## HITLINE #########
  push();
  stroke(255, 255);
  strokeWeight(5);
  line(windowWidth * 1 / 8, windowHeight * 6 / 8, windowWidth * 7 / 8, windowHeight * 6 / 8);
  pop();

  //################ Linhas para os circulos andarem (metade das de cima) ##################
  stroke(0, 100);
  line(windowWidth * 5.75 / 16, 0, windowWidth * 3.5 / 16, windowHeight); //linha da esq 1
  line(windowWidth * 7.25 / 16, 0, windowWidth * 6.5 / 16, windowHeight); //linha da esq 2
  line(windowWidth * 8.75 / 16, 0, windowWidth * 9.5 / 16, windowHeight); //linha da dir 2
  line(windowWidth * 10.25 / 16, 0, windowWidth * 12.5 / 16, windowHeight); //linha da dir 1 


  // ################### Adiciona circulos random a cada 60 frames ###################
  if (frameCount % 60 === 1) {
    notes.push({ //adiciona uma nova nota ao array
      lane: floor(random(lanes.length)),
      t: 0, //tempo q começa
      outcome: null //ainda n foi acertada ou errada
    });
  }
  
  const targetY = height * 6 / 8;
  
  //#################### acelaração do circulo e crescimento ao aproximar-se ##################
  
  for (const note of notes) {
    note.t += 0.006; // acelaração
  
    const lane = lanes[note.lane];
    const x = lerp(width * lane.top, width * lane.bottom, note.t);
    const y = height * note.t; //avanço ao longo do tempo
    const diameter = lerp(20, 100, note.t); // crescimento ao aproximar-se da linha
  
    // resultado do hit ou miss da nota (e mudança de cor)
    if (y > targetY && note.outcome) {
      fill(note.outcome === "correct" ? "green" : "red");
    } else {
      fill(255);
    }
  
    noStroke();
    circle(x, y, diameter);
  
    // circulo passado = miss 
    if (y > targetY + height * 0.03 && !note.outcome) {
      note.outcome = "wrong";
    }
  }
  
  notes = notes.filter(note => note.t <= 1);
  

  //####################### LETRAS #########################
  //parametros gerais
  rectMode(CENTER);
  textSize(28);
  textAlign(CENTER, CENTER);

  // A
  fill(255, 100);
  rect(windowWidth * 4 / 16, targetY + 40, windowWidth * 2.25 / 16, windowHeight * 0.05, 15);  
  
  fill(255);
  text("A", windowWidth * 4 / 16, targetY + 40);

  // S
  fill(255, 100);
  rect(windowWidth * 6.67 / 16, targetY + 40, windowWidth * 2.25 / 16, windowHeight * 0.05, 15);  
  
  fill(255);
  text("S", windowWidth * 6.67 / 16, targetY + 40);

  // K
  fill(255, 100);
  rect(windowWidth * 9.33 / 16, targetY + 40, windowWidth * 2.25 / 16, windowHeight * 0.05, 15);  
  
  fill(255);
  text("K", windowWidth * 9.33 / 16, targetY + 40);

  // L
  fill(255, 100);
  rect(windowWidth * 12 / 16, targetY + 40, windowWidth * 2.25 / 16, windowHeight * 0.05, 15);  
  
  fill(255);
  text("L", windowWidth * 12 / 16, targetY + 40);
}


//######################### Função para o hit ou miss da nota ##########################

function keyPressed() {
  const targetY = height * 6 / 8;
  const hitWindow = height * 0.03;

  // Choose the closest circle currently inside the hit window
  const candidate = notes
    .filter(note => {
      const y = height * note.t;
      return !note.outcome && Math.abs(y - targetY) <= hitWindow; // notas perto o suficiente da linha
    })
    .sort((a, b) =>
      Math.abs(height * a.t - targetY) -
      Math.abs(height * b.t - targetY)
    )[0];

  if (!candidate) return; //se n tiver nada ope, faz nada

  //########### Verificação de nota correta ou errada ################
  const expectedKey = lanes[candidate.lane].key; // tecla correta para a nota 
  candidate.outcome =
    key.toLowerCase() === expectedKey ? "correct" : "wrong";
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}