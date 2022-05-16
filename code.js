var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

// Mantenha a caixa no ar movendo a raquete com as setas para esquerda e para direita.
var paddle = createSprite(200, 375, 50, 15);
paddle.shapeColor = "cadetblue"
var ball = createSprite(150, 250, 20, 20);
ball.shapeColor = "orange"


//Linha 1
var box1 = createSprite(25, 75, 50, 50);
box1.shapeColor="bisque";
var box2 = createSprite(75, 75, 50, 50);
box2.shapeColor="lemonchiffon";
var box3 = createSprite(125, 75, 50, 50);
box3.shapeColor="bisque";
var box4 = createSprite(175, 75, 50, 50);
box4.shapeColor="lemonchiffon";
var box5 = createSprite(225, 75, 50, 50);
box5.shapeColor="bisque";
var box6 = createSprite(275, 75, 50, 50);
box6.shapeColor="lemonchiffon";
var box7 = createSprite(325, 75, 50, 50);
box7.shapeColor="bisque";
var box8 = createSprite(375, 75, 50, 50);
box8.shapeColor="lemonchiffon";

//Linha 2
var box9 = createSprite(25, 125, 50, 50);
box9.shapeColor = "powderblue";
var box10 = createSprite(75, 125, 50, 50);
box10.shapeColor = "palegoldenrod";
var box11 = createSprite(125, 125, 50, 50);
box11.shapeColor = "powderblue";
var box12 = createSprite(175, 125, 50, 50);
box12.shapeColor = "palegoldenrod";
var box13 = createSprite(225, 125, 50, 50);
box13.shapeColor = "powderblue";
var box14 = createSprite(275, 125, 50, 50);
box14.shapeColor = "palegoldenrod";
var box15 = createSprite(325, 125, 50, 50);
box15.shapeColor = "powderblue";
var box16 = createSprite(375, 125, 50, 50);
box16.shapeColor = "palegoldenrod";

//Linha 3 
var box17 = createSprite(25,25,50,50)
box17.shapeColor = "thistle"
var box18 = createSprite(75,25,50,50)
box18.shapeColor = "mistyrose"
var box19 = createSprite(125,25,50,50)
box19.shapeColor = "thistle"
var box20 = createSprite(175,25,50,50)
box20.shapeColor = "mistyrose"
var box21 = createSprite(225,25,50,50)
box21.shapeColor = "thistle"
var box22 = createSprite(275,25,50,50)
box22.shapeColor = "mistyrose"
var box23 = createSprite(325,25,50,50)
box23.shapeColor = "thistle"
var box24 = createSprite(375,25,50,50)
box24.shapeColor = "mistyrose"

var vidas = 3 

function draw() {
  background("whitesmoke");
  
  if(keyDown("space")){
    ball.velocityX = 5;
    ball.velocityY = 5;
  }
  
  createEdgeSprites();
  ball.bounceOff(rightEdge);
  ball.bounceOff(leftEdge);
  ball.bounceOff(topEdge);


  paddle.x=World.mouseX;

  
  if(ball.isTouching(box1)){
    box1.destroy();
  }
  
  if(ball.isTouching(box2)){
    box2.destroy();
  }
  
  if(ball.isTouching(box3)){ 
    box3.destroy();
  }
  
  if(ball.isTouching(box4)){
    box4.destroy();
  }
  
   if(ball.isTouching(box5)){ 
     box5.destroy();
  }
  
   if(ball.isTouching(box6)) {
     box6.destroy();
  }
  
  if(ball.isTouching(box7)) { 
    box7.destroy();
  }
  
  if(ball.isTouching(box8)){
    box8.destroy();
  }
  // row 2 
  if(ball.isTouching(box9)){
    box9.destroy();
  }
  
  if(ball.isTouching(box10)){
    box10.destroy();
  }
  
  if(ball.isTouching(box11)){ 
    box11.destroy();
  }
  
  if(ball.isTouching(box12)){
    box12.destroy();
  }
  
   if(ball.isTouching(box13)){ 
     box13.destroy();
  }
  
   if(ball.isTouching(box14)) {
     box14.destroy();
  }
  
  if(ball.isTouching(box15)) { 
    box15.destroy();
  }
  
  if(ball.isTouching(box16)){
    box16.destroy();
  }
  
  if(ball.isTouching(box17)){
  box17.destroy()
  }
  
  if(ball.isTouching(box18)){
  box18.destroy()
  }
  
  if(ball.isTouching(box19)){
  box19.destroy()
  }
  
  if(ball.isTouching(box20)){
  box20.destroy()
  }
  
  if(ball.isTouching(box21)){
  box21.destroy()
  }
  
  if(ball.isTouching(box22)){
  box22.destroy()
  }
  
  if(ball.isTouching(box23)){
  box23.destroy()
  }
  
  if(ball.isTouching(box24)){
  box24.destroy()
   }
  
  
  ball.bounceOff(paddle);
  
  //placar 
  textSize(10)
  fill("black")
  text("vidas: " +vidas, 356,162)

  
  //se a bola passar de y400 ela vai ser destruida e -1v
  if(ball.y > 400){
    ball.x = 200
    ball.y = 200
    ball.velocityX = 0 
    ball.velocityY = 0 
    vidas = vidas -1
  }
  //se pasar de 3 vidas acabou 
  if(vidas <= 0){
  ball.destroy()
  fill("firebrick")
  textSize(55)
  text("game over" ,80,200)
  }
  
  
  drawSprites();

}







// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
