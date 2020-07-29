let meusPontos = 0;
let pontosOp = 0;
let random = 0;
/*Bolinha*/
let Xbola = 400;
let Ybola = 300;

let diametro = 25;
let raio = diametro / 2;

let velocidadeXBola = 5;
let velocidadeYBola = 5;

/*raquete*/
let Xrect = 5;
let Yrect = 200;
let Wrect = 15;
let Hrect = 150;

/*raquete Op*/
let XrectOp = 775;
let YrectOp = 200;
let WrectOp = 15;
let HrectOp = 150;
let velocidadeYOp;
/*uniques*/
function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaBordas();
  mostraRaquete(Xrect,Yrect);
  mostraRaquete(XrectOp,YrectOp);
  movimentaRaquete();
  //colisaoRaquete(Xrect,Yrect);
  colisaoRaqueteBiblioteca(Xrect,Yrect);
  colisaoRaqueteBiblioteca(XrectOp,YrectOp);
  movimentaOp();
  incluiPlacar();
  marcaPonto();
}


/*outras functions*/
function mostraBolinha() {
  circle(Xbola, Ybola, diametro);
}

function movimentaBolinha() {
  Xbola += velocidadeXBola;
  Ybola += velocidadeYBola;
}

function verificaBordas() {
  if (Xbola + raio > width || Xbola - raio < 0) {
    velocidadeXBola *= -1;
  }
  if (Ybola + raio > height || Ybola - raio < 0) {
    velocidadeYBola *= -1;
  }
}
/*       *           */
function mostraRaquete(XR,YR){
  rect(XR,YR,Wrect,Hrect);
}

function movimentaRaquete(){
  if(keyIsDown(UP_ARROW)){
    Yrect -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    Yrect -= -10;
  }
  
}
/*function colisaoRaquete(XR,YR){
  if(Xbola - raio < XR + Wrect && 
      Ybola - raio < YR + Hrect &&
       Ybola + raio > YR)
  {
    velocidadeXBola *= -1.01;
  }
}*/

function colisaoRaqueteBiblioteca(XR,YR) {
    colidiu = collideRectCircle(XR, YR, Wrect, Yrect, Xbola, Ybola, raio);
    if (colidiu){
        velocidadeXBola *= -1;
    }
}

function movimentaOp(){
  velocidadeYOp = Ybola - YrectOp - Wrect/2 - random;
  YrectOp += velocidadeYOp ;
}

setInterval( function() {
  random = Math.floor((300 - 100) * Math.random());
}, 3000 );

function incluiPlacar(){
  textSize(33)
  textAlign(CENTER)
  fill(111)
  rect(330,5,40,50)
  fill(255)
  text(meusPontos, 350, 40);
  fill(111)
  rect(430,5,40,50)
  fill(255)
  text(pontosOp, 450, 40);
}
function marcaPonto() {
    if (Xbola > 785) {
        meusPontos += 1;
    }
    if (Xbola < 15) {
        pontosOp += 1;
    }
}