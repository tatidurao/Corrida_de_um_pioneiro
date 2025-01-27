var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup;

//Esttados de Jogo
var PLAY=1;
var END=0;
var gameState=0;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  cashImg = loadImage("cash.png");
  celularImg = loadImage("celular.png");
  tristeImg = loadImage("tristeza.png");
  abracoImg = loadImage("abraço.png");
  endImg =loadAnimation("fimdeJogo.png");
  bibliaImg = loadImage("biblia.png");
  risadaImg = loadImage("risadas.png");
  broxuraImg = loadImage("broxura.png")
}

function setup(){
  
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if(isMobile){
    canW = displayWidth; 
    canH = displayHeight; 
    createCanvas(displayWidth+80, displayHeight);
  } 
  else {
    canW = windowWidth; 
    canH = windowHeight; 
    createCanvas(windowWidth, windowHeight);
  }

//plano de fundo se movendo

path=createSprite(canW/2,200);
path.addImage(pathImg);
path.velocityY = 4;


//crie o menino correndo
boy = createSprite(canW/2,canH-200,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  
  
cashG=new Group();
CelularG=new Group();
tristeG=new Group();
abracoG=new Group();
bibliaG=new Group();
risadaG=new Group();
broxuraG=new Group();

var title = createElement('h2');

var buttonAndressa = createButton('Andressa');
var buttonAngela = createButton('Angela');
var buttonAntonio = createButton('Tátila');
var buttonBruno = createButton('Tátila');
var buttonCecilia = createButton('Ruan');
var buttonCleonice = createButton('Tátila');
var buttonEliana = createButton('Ruan');
var buttonElvis = createButton('Tátila');
var buttonFranciele = createButton('Ruan');
var buttonFernanda = createButton('Tátila');
var buttonGeovana = createButton('Ruan');
var buttonIsabela = createButton('Ruan');
var buttonJoao = createButton('Ruan');
var buttonLuis = createButton('Ruan');
var buttonMariaS = createButton('Ruan');
var buttonMariaJ = createButton('Ruan');
var buttonMariaH = createButton('Ruan');
var buttonNaty = createButton('Ruan');
var buttonruan = createButton('Ruan');
var buttonSilvia = createButton('Ruan');
var buttontati = createButton('Tátila');
var buttonVictor = createButton('Tátila');
var image = "";

title.html("Corrida de um pioneiro");
title.position(50, 500);
title.style('font-size', '70px');
title.style('color', 'skyblue');

buttonAndressa.position(10,50);
buttonAndressa.style('width', '200px');
buttonAndressa.style('height', '40px');
buttonAndressa.style('background', 'lightpink');

buttonAngela.position(210,50);
buttonAngela.style('width', '200px');
buttonAngela.style('height', '40px');
buttonAngela.style('background', 'lightpink');

buttontati.position(10,100);
buttontati.style('width', '200px');
buttontati.style('height', '40px');
buttontati.style('background', 'lightpink');

buttonruan.position(210,100);
buttonruan.style('width', '200px');
buttonruan.style('height', '40px');
buttonruan.style('background', 'lightblue');

buttontati.mousePressed(() => {
  title.hide()
  buttonruan.hide()
  buttontati.hide()
  buttonAndressa.hide()
  buttonAngela.hide()
  gameState=1
  image = createImg("tati.PNG")
  image.position(canW-130,50)
  image.size(70,70);
});
buttonruan.mousePressed(() => {
  title.hide()
  buttonruan.hide()
  buttontati.hide()
  gameState=1
  image = createImg("ruan.png")
  image.position(canW-130,50)
  image.size(70,70);
});

}

function draw() {

  if(gameState===PLAY){
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //código para reiniciar o plano de fundo

   if(path.y >canH){
     path.y = canH/2;
   }
  
    createCash();
    createCelular();
    createTriste();
    createabraco();
    createbiblia();
    createrisada();
    createbroxura();

    if (abracoG.isTouching(boy)) {
      abracoG.destroyEach();
      treasureCollection=treasureCollection + 50;
    }
    else if (bibliaG.isTouching(boy)) {
      bibliaG.destroyEach();
      treasureCollection=treasureCollection + 100;
      
    }else if(risadaG.isTouching(boy)) {
      risadaG.destroyEach();
      treasureCollection= treasureCollection + 150;
      
    }else if(broxuraG.isTouching(boy)) {
      broxuraG.destroyEach();
      treasureCollection= treasureCollection + 200;
      
    }
    else{
      if(cashG.isTouching(boy) || CelularG.isTouching(boy) || tristeG.isTouching(boy)  ) {
        gameState=END;
        
        boy.addAnimation("SahilRunning",endImg);
        boy.x=canW/2;
        boy.y=canH/2;
        boy.scale=0.6;
        
        cashG.destroyEach();
        CelularG.destroyEach();
        tristeG.destroyEach();
        abracoG.destroyEach();
        bibliaG.destroyEach();
        risadaG.destroyEach();
        
        cashG.setVelocityYEach(0);
        CelularG.setVelocityYEach(0);
        tristeG.setVelocityYEach(0);
        abracoG.setVelocityYEach(0);
        bibliaG.setVelocityYEach(0);
        risadaG.setVelocityYEach(0);
     
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Tesouro: "+ treasureCollection,canW-150,30);
 
  
  }

}

function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(50, canW-50),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 5;
  cash.lifetime = 200;
  cashG.add(cash);
  }
}

function createCelular() {
  if (World.frameCount % 320 == 0) {
  var Celular = createSprite(Math.round(random(50, canW-50),40, 10, 10));
  Celular.addImage(celularImg);
  Celular.scale=0.15;
  Celular.velocityY = 5;
  Celular.lifetime = 200;
  CelularG.add(Celular);
}
}

function createTriste() {
  if (World.frameCount % 410 == 0) {
  var triste = createSprite(Math.round(random(50, canW-50),40, 10, 10));
  triste.addImage(tristeImg);
  triste.scale=0.04;
  triste.velocityY = 5;
  triste.lifetime = 200;
  tristeG.add(triste);
  }
}

function createabraco(){
  if (World.frameCount % 530 == 0) {
  var abraco = createSprite(Math.round(random(50, canW-50),40, 10, 10));
  abraco.addImage(abracoImg);
  abraco.scale=0.2;
  abraco.velocityY = 4;
  abraco.lifetime = 200;
  abracoG.add(abraco);
  }
}

function createbiblia(){
  if (World.frameCount % 250 == 0) {
  var biblia = createSprite(Math.round(random(50, canW-50),40, 10, 10));
  biblia.addImage(bibliaImg);
  biblia.scale=0.6;
  biblia.velocityY = 4;
  biblia.lifetime = 200;
  bibliaG.add(biblia);
  }
}

function createrisada(){
  if (World.frameCount % 380 == 0) {
  var risada = createSprite(Math.round(random(50, canW-50),40, 10, 10));
  risada.addImage(risadaImg);
  risada.scale=0.2;
  risada.velocityY = 4;
  risada.lifetime = 200;
  risadaG.add(risada);
  }
}

function createbroxura(){
  if (World.frameCount % 590 == 0) {
  var broxura = createSprite(Math.round(random(50, canW-50),40, 10, 10));
  broxura.addImage(broxuraImg);
  broxura.scale=0.6;
  broxura.velocityY = 4;
  broxura.lifetime = 200;
  broxuraG.add(broxura);
  }
}


