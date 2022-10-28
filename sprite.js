  window.onload = function(){
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var isBgLoaded = false;
  var isCharLoaded = false;

  //
  var bg = new Image();
  bg.src = 'images/bg3.png';
  bg.onload = function(){
  isBgLoaded = true;
}

  var character = new Image();
  character.src = 'images/charac4.png';
  character.onload = function(){
  isCharLoaded = true;
  }


  // Cell Specifications
  var cellWidth = 52;   //get width in photoshop divide row
  var cellHeight = 53;  // get height in photoshop devide column
  var currentCell = 0;


  // Time Specifications
  var animationStart = new Date();

  // Move Specifications
  var moveAmount = 15;
  var moveX = 100;
  animate();

  function animate() {
  var animationNow = new Date();
  if(animationNow - animationStart >= 120){
  animationStart = animationNow;

  // Clear
  context.clearRect(0, 0, canvas.width, canvas.height);
  // Update
  currentCell++;
  currentCell %= 4;   //identify image cell

  // Loop the run cycles
  if(moveX >= canvas.width){
  moveX = -1 * cellWidth;
  }else{

  moveX += moveAmount;

}

  // Draw

  if(isBgLoaded){
  // context.drawImage(background, 0, 0, canvas.width, canvas.height);
  context.drawImage(bg, 0 ,0, canvas.width, canvas.height);
  }

  if(isCharLoaded){
    context.drawImage(character, currentCell * cellWidth, 0, cellWidth, cellHeight,
    moveX, 400, 120, 100);  //image
  }

  }
  window.requestAnimationFrame(animate);
  }


  }
