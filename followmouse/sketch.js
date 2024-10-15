let canvasXMax=400;
let canvasYMax=400;

function setup() {
  createCanvas(canvasXMax, canvasYMax);
  background(220)
}

function draw() {


  textSize(20)
  strokeWeight(0)
  let string_toprint="Mouse x="+mouseX+", y="+mouseY;
  //la parte tra virgolette (rossa) è il testo decorativo che vedremo sullo schermo
  text(string_toprint, 20, 20)

  strokeWeight(1)
  line(0, mouseY,canvasXMax, mouseX)

  //feedback tasto mouse sx
  //linea diventa gialla se click col mouse
  //uso variabile p5 --> true se il mouse schiacciato
  if(mouseIsPressed == true){
    if(mouseButton == RIGHT){
      background(220)
    }
    //se variabile vera coloro di giallo
    stroke("yellow")
  }else{
    //altrimenti riga nera
    stroke("black")
  }
}