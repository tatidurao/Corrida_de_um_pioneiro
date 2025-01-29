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
    createCanvas(displayWidth, displayHeight);
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

boy.setCollider("rectangle",0,0,boy.width-600, boy.height-400);
boy.debug = false
  
  
cashG=new Group();
CelularG=new Group();
tristeG=new Group();
abracoG=new Group();
bibliaG=new Group();
risadaG=new Group();
broxuraG=new Group();

var title = createElement('h2');
var title2 = createElement('h2');
var title3 = createElement('h3');

var buttonAndressa = createButton('Andressa');
var buttonAngela = createButton('Angela');
var buttonAntonio = createButton('Antonio');
var buttonBruno = createButton('Bruno');
var buttonCecilia = createButton('Cecilia');
var buttonCleonice = createButton('Cleonice');
var buttonEliana = createButton('Eliana');
var buttonElvis = createButton('Elvis');
var buttonFranciele = createButton('Fran');
var buttonFernanda = createButton('Fernanda');
var buttonGeovana = createButton('Geovana');
var buttonIsabela = createButton('Isabela');
var buttonIsaira = createButton('Izaira');
var buttonJoao = createButton('Joao');
var buttonLuis = createButton('Luis');
var buttonMariaS = createButton('Maria Sanches');
var buttonMariaJ = createButton('Maria José');
var buttonMariaH = createButton('Maria Socorro');
var buttonNaty = createButton('Naty');
var buttonruan = createButton('Ruan');
var buttonSilvia = createButton('Silvia');
var buttontati = createButton('Tátila');
var buttonVictor = createButton('Victor');
var image = "";

title3.html("Clique no seu nome para jogar:");
title3.position(5, 5);
title3.style('font-size', '20px');
title3.style('color', 'black');

title.html("Caminhada de um pioneiro");
title.position(10, 600);
title.style('font-size', '60px');
title.style('color', 'black');


title2.html("Durante o percurso evite distrações como tristeza, ladrões de tempo e dinheiro.");
title2.position(10, 770);
title2.style('font-size', '27px');
title2.style('color', 'black');

buttonAndressa.position(10,50);
buttonAndressa.style('width', '200px');
buttonAndressa.style('height', '40px');
buttonAndressa.style('background', 'lightpink');

buttonAngela.position(220,50);
buttonAngela.style('width', '200px');
buttonAngela.style('height', '40px');
buttonAngela.style('background', 'lightpink');

buttonAntonio.position(10,100);
buttonAntonio.style('width', '200px');
buttonAntonio.style('height', '40px');
buttonAntonio.style('background', 'lightblue');

buttonBruno.position(220,100);
buttonBruno.style('width', '200px');
buttonBruno.style('height', '40px');
buttonBruno.style('background', 'lightblue');

buttonCecilia.position(10,150);
buttonCecilia.style('width', '200px');
buttonCecilia.style('height', '40px');
buttonCecilia.style('background', 'lightpink');

buttonCleonice.position(220,150);
buttonCleonice.style('width', '200px');
buttonCleonice.style('height', '40px');
buttonCleonice.style('background', 'lightpink');

buttonEliana.position(10,200);
buttonEliana.style('width', '200px');
buttonEliana.style('height', '40px');
buttonEliana.style('background', 'lightpink');

buttonElvis.position(220,200);
buttonElvis.style('width', '200px');
buttonElvis.style('height', '40px');
buttonElvis.style('background', 'lightblue');

buttonFranciele.position(220,250);
buttonFranciele.style('width', '200px');
buttonFranciele.style('height', '40px');
buttonFranciele.style('background', 'lightpink');

buttonFernanda.position(10,250);
buttonFernanda.style('width', '200px');
buttonFernanda.style('height', '40px');
buttonFernanda.style('background', 'lightpink');

buttonGeovana.position(10,300);
buttonGeovana.style('width', '200px');
buttonGeovana.style('height', '40px');
buttonGeovana.style('background', 'lightpink');

buttonIsabela.position(220,300);
buttonIsabela.style('width', '200px');
buttonIsabela.style('height', '40px');
buttonIsabela.style('background', 'lightpink');

buttonIsaira.position(10,350);
buttonIsaira.style('width', '200px');
buttonIsaira.style('height', '40px');
buttonIsaira.style('background', 'lightpink');

buttonLuis.position(220,350);
buttonLuis.style('width', '200px');
buttonLuis.style('height', '40px');
buttonLuis.style('background', 'lightblue');

buttonMariaS.position(220,400);
buttonMariaS.style('width', '200px');
buttonMariaS.style('height', '40px');
buttonMariaS.style('background', 'lightpink');

buttonMariaJ.position(10,400);
buttonMariaJ.style('width', '200px');
buttonMariaJ.style('height', '40px');
buttonMariaJ.style('background', 'lightpink');

buttonMariaH.position(10,450);
buttonMariaH.style('width', '200px');
buttonMariaH.style('height', '40px');
buttonMariaH.style('background', 'lightpink');

buttonNaty.position(220,450);
buttonNaty.style('width', '200px');
buttonNaty.style('height', '40px');
buttonNaty.style('background', 'lightpink');

buttonruan.position(10,500);
buttonruan.style('width', '200px');
buttonruan.style('height', '40px');
buttonruan.style('background', 'lightblue');

buttonSilvia.position(220,500);
buttonSilvia.style('width', '200px');
buttonSilvia.style('height', '40px');
buttonSilvia.style('background', 'lightpink');

buttontati.position(10,550);
buttontati.style('width', '200px');
buttontati.style('height', '40px');
buttontati.style('background', 'lightpink');

buttonJoao.position(220,550);
buttonJoao.style('width', '200px');
buttonJoao.style('height', '40px');
buttonJoao.style('background', 'lightblue');

buttonVictor.position(10,600);
buttonVictor.style('width', '200px');
buttonVictor.style('height', '40px');
buttonVictor.style('background', 'lightblue');

buttontati.mousePressed(() => {
  title.hide()
  title2.hide()
  title3.hide()
  title3.hide()
  buttonIsaira.hide()
  buttonAntonio.hide()
  buttonBruno.hide()
  buttonCecilia.hide()
  buttonCleonice.hide()
  buttonEliana.hide()
  buttonElvis.hide()
  buttonFranciele.hide()
  buttonFernanda.hide()
  buttonGeovana.hide()
  buttonIsabela.hide()
  buttonJoao.hide()
  buttonLuis.hide()
  buttonMariaS.hide()
  buttonMariaJ.hide()
  buttonMariaH.hide()
  buttonNaty.hide()
  buttonruan.hide()
  buttontati.hide()
  buttonSilvia.hide()
  buttonVictor.hide()
  buttonAndressa.hide()
  buttonAngela.hide()
  gameState=1
  image = createImg("tati.PNG")
  image.position(canW-130,50)
  image.size(70,70);
  image.style('border-radius', '40px');
  image.style('border-style', 'solid');
  image.style('border-width', '10px');
  image.style('border-color', 'pink');
});
buttonruan.mousePressed(() => {
  title.hide()
  title2.hide()
  title3.hide()
  buttonIsaira.hide()
  buttonAntonio.hide()
  buttonBruno.hide()
  buttonCecilia.hide()
  buttonCleonice.hide()
  buttonEliana.hide()
  buttonElvis.hide()
  buttonFranciele.hide()
  buttonFernanda.hide()
  buttonGeovana.hide()
  buttonIsabela.hide()
  buttonJoao.hide()
  buttonLuis.hide()
  buttonMariaS.hide()
  buttonMariaJ.hide()
  buttonMariaH.hide()
  buttonNaty.hide()
  buttonruan.hide()
  buttontati.hide()
  buttonSilvia.hide()
  buttonVictor.hide()
  buttonAndressa.hide()
  buttonAngela.hide()
  gameState=1
  image = createImg("ruan.png")
  image.position(canW-150,50)
  image.size(70,70);
  image.style('border-radius', '40px');
  image.style('border-style', 'solid');
  image.style('border-width', '10px');
  image.style('border-color', 'blue');
});
buttonAndressa.mousePressed(() => {
  title.hide()
  title2.hide()
  title3.hide()
  buttonIsaira.hide()
  buttonAntonio.hide()
  buttonBruno.hide()
  buttonCecilia.hide()
  buttonCleonice.hide()
  buttonEliana.hide()
  buttonElvis.hide()
  buttonFranciele.hide()
  buttonFernanda.hide()
  buttonGeovana.hide()
  buttonIsabela.hide()
  buttonJoao.hide()
  buttonLuis.hide()
  buttonMariaS.hide()
  buttonMariaJ.hide()
  buttonMariaH.hide()
  buttonNaty.hide()
  buttonruan.hide()
  buttontati.hide()
  buttonSilvia.hide()
  buttonVictor.hide()
  buttonAndressa.hide()
  buttonAngela.hide()
  gameState=1
  image = createImg("andressa.png")
  image.position(canW-130,50)
  image.size(70,70);
  image.style('border-radius', '40px');
  image.style('border-style', 'solid');
  image.style('border-width', '10px');
  image.style('border-color', 'pink');
});
buttonAngela.mousePressed(() => {
  title.hide()
  title2.hide()
  title3.hide()
  buttonIsaira.hide()
  buttonAntonio.hide()
  buttonBruno.hide()
  buttonCecilia.hide()
  buttonCleonice.hide()
  buttonEliana.hide()
  buttonElvis.hide()
  buttonFranciele.hide()
  buttonFernanda.hide()
  buttonGeovana.hide()
  buttonIsabela.hide()
  buttonJoao.hide()
  buttonLuis.hide()
  buttonMariaS.hide()
  buttonMariaJ.hide()
  buttonMariaH.hide()
  buttonNaty.hide()
  buttonruan.hide()
  buttontati.hide()
  buttonSilvia.hide()
  buttonVictor.hide()
  buttonAndressa.hide()
  buttonAngela.hide()
  gameState=1
  image = createImg("angela.png")
  image.position(canW-130,50)
  image.size(70,70);
  image.style('border-radius', '40px');
  image.style('border-style', 'solid');
  image.style('border-width', '10px');
  image.style('border-color', 'pink');
});
buttonAntonio.mousePressed(() => {
  title.hide()
  title2.hide()
  title3.hide()
  buttonIsaira.hide()
  buttonAntonio.hide()
  buttonBruno.hide()
  buttonCecilia.hide()
  buttonCleonice.hide()
  buttonEliana.hide()
  buttonElvis.hide()
  buttonFranciele.hide()
  buttonFernanda.hide()
  buttonGeovana.hide()
  buttonIsabela.hide()
  buttonJoao.hide()
  buttonLuis.hide()
  buttonMariaS.hide()
  buttonMariaJ.hide()
  buttonMariaH.hide()
  buttonNaty.hide()
  buttonruan.hide()
  buttontati.hide()
  buttonSilvia.hide()
  buttonVictor.hide()
  buttonAndressa.hide()
  buttonAngela.hide()
  gameState=1
  image = createImg("antonio.png")
  image.position(canW-130,50)
  image.size(70,70);
  image.style('border-radius', '40px');
  image.style('border-style', 'solid');
  image.style('border-width', '10px');
  image.style('border-color', 'blue');
});
buttonBruno.mousePressed(() => {
  title.hide()
  title2.hide()
  title3.hide()
  buttonIsaira.hide()
  buttonAntonio.hide()
  buttonBruno.hide()
  buttonCecilia.hide()
  buttonCleonice.hide()
  buttonEliana.hide()
  buttonElvis.hide()
  buttonFranciele.hide()
  buttonFernanda.hide()
  buttonGeovana.hide()
  buttonIsabela.hide()
  buttonJoao.hide()
  buttonLuis.hide()
  buttonMariaS.hide()
  buttonMariaJ.hide()
  buttonMariaH.hide()
  buttonNaty.hide()
  buttonruan.hide()
  buttontati.hide()
  buttonSilvia.hide()
  buttonVictor.hide()
  buttonAndressa.hide()
  buttonAngela.hide()
  gameState=1
  image = createImg("bruno.png")
  image.position(canW-130,50)
  image.size(70,80);
  image.style('border-radius', '40px');
  image.style('border-style', 'solid');
  image.style('border-width', '10px');
  image.style('border-color', 'blue');
});
buttonCecilia.mousePressed(() => {
  title.hide()
  title2.hide()
  title3.hide()
  buttonIsaira.hide()
  buttonAntonio.hide()
  buttonBruno.hide()
  buttonCecilia.hide()
  buttonCleonice.hide()
  buttonEliana.hide()
  buttonElvis.hide()
  buttonFranciele.hide()
  buttonFernanda.hide()
  buttonGeovana.hide()
  buttonIsabela.hide()
  buttonJoao.hide()
  buttonLuis.hide()
  buttonMariaS.hide()
  buttonMariaJ.hide()
  buttonMariaH.hide()
  buttonNaty.hide()
  buttonruan.hide()
  buttontati.hide()
  buttonSilvia.hide()
  buttonVictor.hide()
  buttonAndressa.hide()
  buttonAngela.hide()
  gameState=1
  image = createImg("cecilia.png")
  image.position(canW-130,50)
  image.size(70,70);
  image.style('border-radius', '40px');
  image.style('border-style', 'solid');
  image.style('border-width', '10px');
  image.style('border-color', 'pink');
});
buttonCleonice.mousePressed(() => {
  title.hide()
  title2.hide()
  title3.hide()
  buttonIsaira.hide()
  buttonAntonio.hide()
  buttonBruno.hide()
  buttonCecilia.hide()
  buttonCleonice.hide()
  buttonEliana.hide()
  buttonElvis.hide()
  buttonFranciele.hide()
  buttonFernanda.hide()
  buttonGeovana.hide()
  buttonIsabela.hide()
  buttonJoao.hide()
  buttonLuis.hide()
  buttonMariaS.hide()
  buttonMariaJ.hide()
  buttonMariaH.hide()
  buttonNaty.hide()
  buttonruan.hide()
  buttontati.hide()
  buttonSilvia.hide()
  buttonVictor.hide()
  buttonAndressa.hide()
  buttonAngela.hide()
  gameState=1
  image = createImg("cleonice.png")
  image.position(canW-130,50)
  image.size(70,70);
  image.style('border-radius', '40px');
  image.style('border-style', 'solid');
  image.style('border-width', '10px');
  image.style('border-color', 'pink');
});
buttonEliana.mousePressed(() => {
  title.hide()
  title2.hide()
  title3.hide()
  buttonIsaira.hide()
  buttonAntonio.hide()
  buttonBruno.hide()
  buttonCecilia.hide()
  buttonCleonice.hide()
  buttonEliana.hide()
  buttonElvis.hide()
  buttonFranciele.hide()
  buttonFernanda.hide()
  buttonGeovana.hide()
  buttonIsabela.hide()
  buttonJoao.hide()
  buttonLuis.hide()
  buttonMariaS.hide()
  buttonMariaJ.hide()
  buttonMariaH.hide()
  buttonNaty.hide()
  buttonruan.hide()
  buttontati.hide()
  buttonSilvia.hide()
  buttonVictor.hide()
  buttonAndressa.hide()
  buttonAngela.hide()
  gameState=1
  image = createImg("eliana.png")
  image.position(canW-130,50)
  image.size(70,70);
  image.style('border-radius', '40px');
  image.style('border-style', 'solid');
  image.style('border-width', '10px');
  image.style('border-color', 'pink');
});
buttonElvis.mousePressed(() => {
  title.hide()
  title2.hide()
  title3.hide()
  buttonAntonio.hide()
  buttonIsaira.hide()
  buttonBruno.hide()
  buttonCecilia.hide()
  buttonCleonice.hide()
  buttonEliana.hide()
  buttonElvis.hide()
  buttonFranciele.hide()
  buttonFernanda.hide()
  buttonGeovana.hide()
  buttonIsabela.hide()
  buttonJoao.hide()
  buttonLuis.hide()
  buttonMariaS.hide()
  buttonMariaJ.hide()
  buttonMariaH.hide()
  buttonNaty.hide()
  buttonruan.hide()
  buttontati.hide()
  buttonSilvia.hide()
  buttonVictor.hide()
  buttonAndressa.hide()
  buttonAngela.hide()
  gameState=1
  image = createImg("elvis.png")
  image.position(canW-130,50)
  image.size(70,80);
  image.style('border-radius', '40px');
  image.style('border-style', 'solid');
  image.style('border-width', '10px');
  image.style('border-color', 'blue');
});
buttonFernanda.mousePressed(() => {
  title.hide()
  title2.hide()
  title3.hide()
  buttonIsaira.hide()
  buttonAntonio.hide()
  buttonBruno.hide()
  buttonCecilia.hide()
  buttonCleonice.hide()
  buttonEliana.hide()
  buttonElvis.hide()
  buttonFranciele.hide()
  buttonFernanda.hide()
  buttonGeovana.hide()
  buttonIsabela.hide()
  buttonJoao.hide()
  buttonLuis.hide()
  buttonMariaS.hide()
  buttonMariaJ.hide()
  buttonMariaH.hide()
  buttonNaty.hide()
  buttonruan.hide()
  buttontati.hide()
  buttonSilvia.hide()
  buttonVictor.hide()
  buttonAndressa.hide()
  buttonAngela.hide()
  gameState=1
  image = createImg("fernanda.png")
  image.position(canW-130,50)
  image.size(70,70);
  image.style('border-radius', '40px');
  image.style('border-style', 'solid');
  image.style('border-width', '10px');
  image.style('border-color', 'pink');
});
buttonFranciele.mousePressed(() => {
  title.hide()
  title2.hide()
  title3.hide()
  buttonIsaira.hide()
  buttonAntonio.hide()
  buttonBruno.hide()
  buttonCecilia.hide()
  buttonCleonice.hide()
  buttonEliana.hide()
  buttonElvis.hide()
  buttonFranciele.hide()
  buttonFernanda.hide()
  buttonGeovana.hide()
  buttonIsabela.hide()
  buttonJoao.hide()
  buttonLuis.hide()
  buttonMariaS.hide()
  buttonMariaJ.hide()
  buttonMariaH.hide()
  buttonNaty.hide()
  buttonruan.hide()
  buttontati.hide()
  buttonSilvia.hide()
  buttonVictor.hide()
  buttonAndressa.hide()
  buttonAngela.hide()
  gameState=1
  image = createImg("franciele.png")
  image.position(canW-130,50)
  image.size(70,70);
  image.style('border-radius', '40px');
  image.style('border-style', 'solid');
  image.style('border-width', '10px');
  image.style('border-color', 'pink');
});
buttonGeovana.mousePressed(() => {
  title.hide()
  title2.hide()
  title3.hide()
  buttonIsaira.hide()
  buttonAntonio.hide()
  buttonBruno.hide()
  buttonCecilia.hide()
  buttonCleonice.hide()
  buttonEliana.hide()
  buttonElvis.hide()
  buttonFranciele.hide()
  buttonFernanda.hide()
  buttonGeovana.hide()
  buttonIsabela.hide()
  buttonJoao.hide()
  buttonLuis.hide()
  buttonMariaS.hide()
  buttonMariaJ.hide()
  buttonMariaH.hide()
  buttonNaty.hide()
  buttonruan.hide()
  buttontati.hide()
  buttonSilvia.hide()
  buttonVictor.hide()
  buttonAndressa.hide()
  buttonAngela.hide()
  gameState=1
  image = createImg("geovana.png")
  image.position(canW-130,50)
  image.size(70,70);
  image.style('border-radius', '40px');
  image.style('border-style', 'solid');
  image.style('border-width', '10px');
  image.style('border-color', 'pink');
});
buttonIsabela.mousePressed(() => {
  title.hide()
  title2.hide()
  title3.hide()
  buttonIsaira.hide()
  buttonAntonio.hide()
  buttonBruno.hide()
  buttonCecilia.hide()
  buttonCleonice.hide()
  buttonEliana.hide()
  buttonElvis.hide()
  buttonFranciele.hide()
  buttonFernanda.hide()
  buttonGeovana.hide()
  buttonIsabela.hide()
  buttonJoao.hide()
  buttonLuis.hide()
  buttonMariaS.hide()
  buttonMariaJ.hide()
  buttonMariaH.hide()
  buttonNaty.hide()
  buttonruan.hide()
  buttontati.hide()
  buttonSilvia.hide()
  buttonVictor.hide()
  buttonAndressa.hide()
  buttonAngela.hide()
  gameState=1
  image = createImg("isa.png")
  image.position(canW-130,50)
  image.size(70,70);
  image.style('border-radius', '40px');
  image.style('border-style', 'solid');
  image.style('border-width', '10px');
  image.style('border-color', 'pink');
});
buttonIsaira.mousePressed(() => {
  title.hide()
  title2.hide()
  title3.hide()
  buttonAntonio.hide()
  buttonBruno.hide()
  buttonCecilia.hide()
  buttonCleonice.hide()
  buttonEliana.hide()
  buttonElvis.hide()
  buttonFranciele.hide()
  buttonFernanda.hide()
  buttonGeovana.hide()
  buttonIsabela.hide()
  buttonJoao.hide()
  buttonLuis.hide()
  buttonMariaS.hide()
  buttonMariaJ.hide()
  buttonMariaH.hide()
  buttonNaty.hide()
  buttonruan.hide()
  buttontati.hide()
  buttonSilvia.hide()
  buttonVictor.hide()
  buttonAndressa.hide()
  buttonAngela.hide()
  buttonIsaira.hide()
  gameState=1
  image = createImg("isaira.png")
  image.position(canW-130,50)
  image.size(70,70);
  image.style('border-radius', '40px');
  image.style('border-style', 'solid');
  image.style('border-width', '10px');
  image.style('border-color', 'pink');
});
buttonLuis.mousePressed(() => {
  title.hide()
  title2.hide()
  title3.hide()
  buttonAntonio.hide()
  buttonBruno.hide()
  buttonCecilia.hide()
  buttonCleonice.hide()
  buttonEliana.hide()
  buttonElvis.hide()
  buttonFranciele.hide()
  buttonFernanda.hide()
  buttonGeovana.hide()
  buttonIsabela.hide()
  buttonJoao.hide()
  buttonLuis.hide()
  buttonMariaS.hide()
  buttonMariaJ.hide()
  buttonMariaH.hide()
  buttonNaty.hide()
  buttonruan.hide()
  buttontati.hide()
  buttonSilvia.hide()
  buttonVictor.hide()
  buttonAndressa.hide()
  buttonAngela.hide()
  buttonIsaira.hide()
  gameState=1
  image = createImg("luismiguel.png")
  image.position(canW-130,50)
  image.size(80,80);
  image.style('border-radius', '40px');
  image.style('border-style', 'solid');
  image.style('border-width', '10px');
  image.style('border-color', 'blue');
});
buttonMariaJ.mousePressed(() => {
  title.hide()
  title2.hide()
  title3.hide()
  buttonAntonio.hide()
  buttonBruno.hide()
  buttonCecilia.hide()
  buttonCleonice.hide()
  buttonEliana.hide()
  buttonElvis.hide()
  buttonFranciele.hide()
  buttonFernanda.hide()
  buttonGeovana.hide()
  buttonIsabela.hide()
  buttonJoao.hide()
  buttonLuis.hide()
  buttonMariaS.hide()
  buttonMariaJ.hide()
  buttonMariaH.hide()
  buttonNaty.hide()
  buttonruan.hide()
  buttontati.hide()
  buttonSilvia.hide()
  buttonVictor.hide()
  buttonAndressa.hide()
  buttonAngela.hide()
  buttonIsaira.hide()
  gameState=1
  image = createImg("maria jose.png")
  image.position(canW-130,50)
  image.size(80,80);
  image.style('border-radius', '40px');
  image.style('border-style', 'solid');
  image.style('border-width', '10px');
  image.style('border-color', 'pink');
});
buttonMariaS.mousePressed(() => {
  title.hide()
  title2.hide()
  title3.hide()
  buttonAntonio.hide()
  buttonBruno.hide()
  buttonCecilia.hide()
  buttonCleonice.hide()
  buttonEliana.hide()
  buttonElvis.hide()
  buttonFranciele.hide()
  buttonFernanda.hide()
  buttonGeovana.hide()
  buttonIsabela.hide()
  buttonJoao.hide()
  buttonLuis.hide()
  buttonMariaS.hide()
  buttonMariaJ.hide()
  buttonMariaH.hide()
  buttonNaty.hide()
  buttonruan.hide()
  buttontati.hide()
  buttonSilvia.hide()
  buttonVictor.hide()
  buttonAndressa.hide()
  buttonAngela.hide()
  buttonIsaira.hide()
  gameState=1
  image = createImg("mariasanches.png")
  image.position(canW-130,50)
  image.size(80,80);
  image.style('border-radius', '40px');
  image.style('border-style', 'solid');
  image.style('border-width', '10px');
  image.style('border-color', 'pink');
});
buttonMariaH.mousePressed(() => {
  title.hide()
  title2.hide()
  title3.hide()
  buttonAntonio.hide()
  buttonBruno.hide()
  buttonCecilia.hide()
  buttonCleonice.hide()
  buttonEliana.hide()
  buttonElvis.hide()
  buttonFranciele.hide()
  buttonFernanda.hide()
  buttonGeovana.hide()
  buttonIsabela.hide()
  buttonJoao.hide()
  buttonLuis.hide()
  buttonMariaS.hide()
  buttonMariaJ.hide()
  buttonMariaH.hide()
  buttonNaty.hide()
  buttonruan.hide()
  buttontati.hide()
  buttonSilvia.hide()
  buttonVictor.hide()
  buttonAndressa.hide()
  buttonAngela.hide()
  buttonIsaira.hide()
  gameState=1
  image = createImg("mariasocorro.png")
  image.position(canW-130,50)
  image.size(80,80);
  image.style('border-radius', '40px');
  image.style('border-style', 'solid');
  image.style('border-width', '10px');
  image.style('border-color', 'pink');
});
buttonNaty.mousePressed(() => {
  title.hide()
  title2.hide()
  title3.hide()
  buttonAntonio.hide()
  buttonBruno.hide()
  buttonCecilia.hide()
  buttonCleonice.hide()
  buttonEliana.hide()
  buttonElvis.hide()
  buttonFranciele.hide()
  buttonFernanda.hide()
  buttonGeovana.hide()
  buttonIsabela.hide()
  buttonJoao.hide()
  buttonLuis.hide()
  buttonMariaS.hide()
  buttonMariaJ.hide()
  buttonMariaH.hide()
  buttonNaty.hide()
  buttonruan.hide()
  buttontati.hide()
  buttonSilvia.hide()
  buttonVictor.hide()
  buttonAndressa.hide()
  buttonAngela.hide()
  buttonIsaira.hide()
  gameState=1
  image = createImg("naty.png")
  image.position(canW-130,50)
  image.size(80,80);
  image.style('border-radius', '40px');
  image.style('border-style', 'solid');
  image.style('border-width', '10px');
  image.style('border-color', 'pink');
});
buttonSilvia.mousePressed(() => {
  title.hide()
  title2.hide()
  title3.hide()
  buttonAntonio.hide()
  buttonBruno.hide()
  buttonCecilia.hide()
  buttonCleonice.hide()
  buttonEliana.hide()
  buttonElvis.hide()
  buttonFranciele.hide()
  buttonFernanda.hide()
  buttonGeovana.hide()
  buttonIsabela.hide()
  buttonJoao.hide()
  buttonLuis.hide()
  buttonMariaS.hide()
  buttonMariaJ.hide()
  buttonMariaH.hide()
  buttonNaty.hide()
  buttonruan.hide()
  buttontati.hide()
  buttonSilvia.hide()
  buttonVictor.hide()
  buttonAndressa.hide()
  buttonAngela.hide()
  buttonIsaira.hide()
  gameState=1
  image = createImg("silvia.png")
  image.position(canW-130,50)
  image.size(80,80);
  image.style('border-radius', '40px');
  image.style('border-style', 'solid');
  image.style('border-width', '10px');
  image.style('border-color', 'pink');
});
buttonJoao.mousePressed(() => {
  title.hide()
  title2.hide()
  title3.hide()
  buttonAntonio.hide()
  buttonBruno.hide()
  buttonCecilia.hide()
  buttonCleonice.hide()
  buttonEliana.hide()
  buttonElvis.hide()
  buttonFranciele.hide()
  buttonFernanda.hide()
  buttonGeovana.hide()
  buttonIsabela.hide()
  buttonJoao.hide()
  buttonLuis.hide()
  buttonMariaS.hide()
  buttonMariaJ.hide()
  buttonMariaH.hide()
  buttonNaty.hide()
  buttonruan.hide()
  buttontati.hide()
  buttonSilvia.hide()
  buttonVictor.hide()
  buttonAndressa.hide()
  buttonAngela.hide()
  buttonIsaira.hide()
  gameState=1
  image = createImg("joao.png")
  image.position(canW-130,50)
  image.size(60,80);
  image.style('border-radius', '40px');
  image.style('border-style', 'solid');
  image.style('border-width', '10px');
  image.style('border-color', 'blue');
});
buttonVictor.mousePressed(() => {
  title.hide()
  title2.hide()
  title3.hide()
  buttonAntonio.hide()
  buttonBruno.hide()
  buttonCecilia.hide()
  buttonCleonice.hide()
  buttonEliana.hide()
  buttonElvis.hide()
  buttonFranciele.hide()
  buttonFernanda.hide()
  buttonGeovana.hide()
  buttonIsabela.hide()
  buttonJoao.hide()
  buttonLuis.hide()
  buttonMariaS.hide()
  buttonMariaJ.hide()
  buttonMariaH.hide()
  buttonNaty.hide()
  buttonruan.hide()
  buttontati.hide()
  buttonSilvia.hide()
  buttonVictor.hide()
  buttonAndressa.hide()
  buttonAngela.hide()
  buttonIsaira.hide()
  gameState=1
  image = createImg("vitor.png")
  image.position(canW-130,50)
  image.size(70,80);
  image.style('border-radius', '40px');
  image.style('border-style', 'solid');
  image.style('border-width', '10px');
  image.style('border-color', 'blue');
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
      treasureCollection=treasureCollection + 5;
    }
    else if (bibliaG.isTouching(boy)) {
      bibliaG.destroyEach();
      treasureCollection=treasureCollection + 15;
      
    }else if(risadaG.isTouching(boy)) {
      risadaG.destroyEach();
      treasureCollection= treasureCollection + 5;
      
    }else if(broxuraG.isTouching(boy)) {
      broxuraG.destroyEach();
      treasureCollection= treasureCollection + 10;
      
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
        broxuraG.destroyEach();
        
        cashG.setVelocityYEach(0);
        CelularG.setVelocityYEach(0);
        tristeG.setVelocityYEach(0);
        abracoG.setVelocityYEach(0);
        bibliaG.setVelocityYEach(0);
        risadaG.setVelocityYEach(0);
        broxuraG.setVelocityYEach(0);
     
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Tesouro espiritual: "+ treasureCollection,canW-220,30);

  
  text(" Toque",40,canH-70);
  text("<<<<<< ",40,canH-50);
  text("Toque ",canW-100,canH-70);
  text(">>>>>> ",canW-100,canH-50);
 
  
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
  cash.setCollider("rectangle",0,0,cash.width-100, cash.height-100);
  cash.debug = false
  }
}

function createCelular() {
  if (World.frameCount % 300 == 0) {
  var Celular = createSprite(Math.round(random(50, canW-50),40, 10, 10));
  Celular.addImage(celularImg);
  Celular.scale=0.15;
  Celular.velocityY = 5;
  Celular.lifetime = 200;
  CelularG.add(Celular);
  Celular.setCollider("rectangle",0,0,Celular.width-250, Celular.height-50);
  Celular.debug = false
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
  triste.setCollider("rectangle",0,0,triste.width-50, triste.height-50);
  triste.debug = false
  }
}

function createabraco(){
  if (World.frameCount % 500 == 0) {
  var abraco = createSprite(Math.round(random(50, canW-50),40, 10, 10));
  abraco.addImage(abracoImg);
  abraco.scale=0.2;
  abraco.velocityY = 5;
  abraco.lifetime = 200;
  abracoG.add(abraco);
  abraco.setCollider("rectangle",0,0,abraco.width-100, abraco.height-100);
  abraco.debug = false
  }
}

function createbiblia(){
  if (World.frameCount % 250 == 0) {
  var biblia = createSprite(Math.round(random(50, canW-50),40, 10, 10));
  biblia.addImage(bibliaImg);
  biblia.scale=0.6;
  biblia.velocityY = 5;
  biblia.lifetime = 200;
  bibliaG.add(biblia);
  biblia.setCollider("rectangle",0,0,biblia.width, biblia.height);
  biblia.debug = false
  }
}

function createrisada(){
  if (World.frameCount % 350 == 0) {
  var risada = createSprite(Math.round(random(50, canW-50),40, 10, 10));
  risada.addImage(risadaImg);
  risada.scale=0.18;
  risada.velocityY = 5;
  risada.lifetime = 200;
  risadaG.add(risada);
  risada.setCollider("rectangle",0,0,risada.width-400, risada.height-400);
  risada.debug = false
  }
}

function createbroxura(){
  if (World.frameCount % 450 == 0) {
  var broxura = createSprite(Math.round(random(50, canW-50),40, 10, 10));
  broxura.addImage(broxuraImg);
  broxura.scale=0.6;
  broxura.velocityY = 5;
  broxura.lifetime = 200;
  broxuraG.add(broxura);
  broxura.setCollider("rectangle",0,0,broxura.width, broxura.height);
  broxura.debug = false
  }
}


