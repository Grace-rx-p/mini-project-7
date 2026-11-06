/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  createCanvas(windowWidth, windowHeight);

  // ...except to adjust the dancer's name on the next line:
  dancer = new Brokenclock(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class Brokenclock {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;

    this.angle = 0;
    this.clockColor = color(100, 180, 220);
  }

  update() {
    this.angle += 0.05;
  }

  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️

    // Clock body
    push();
    translate(0, sin(this.angle) * 8);
    rotate(sin(this.angle) * 0.15);

    // Blue clock
    stroke(40, 50, 70);
    strokeWeight(3);
    fill(this.clockColor);
    ellipse(0, 0, 100, 100);

    // Clock face
    fill(255, 245, 220);
    ellipse(0, 0, 80, 80);

    // Clock hands
    stroke(40, 50, 70);
    strokeWeight(3);

    push();
    rotate(this.angle);
    line(0, 0, 0, -25);
    pop();

    push();
    rotate(this.angle * 2);
    line(0, 0, 20, 0);
    pop();

    // Clock center
    fill(255, 100, 120);
    noStroke();
    ellipse(0, 0, 8, 8);

    // =====  Clock Face =====

    // Eyes follow the mouse
    let eyeMoveX = constrain((mouseX - this.x) * 0.02, -4, 4);
    let eyeMoveY = constrain((mouseY - this.y) * 0.02, -4, 4);

    // Left eye
    fill(40, 50, 70);
    noStroke();
    ellipse(-18 + eyeMoveX, -12 + eyeMoveY, 10, 12);

    // Right eye
    ellipse(18 + eyeMoveX, -12 + eyeMoveY, 10, 12);

    // Eye highlights
    fill(255);
    ellipse(-20 + eyeMoveX, -14 + eyeMoveY, 3, 3);
    ellipse(16 + eyeMoveX, -14 + eyeMoveY, 3, 3);

    // Smile
    noFill();
    stroke(230, 90, 100);
    strokeWeight(3);
    arc(0, 5, 28, 20, 0, PI);

    pop();

    // Dancing legs
    stroke(40, 50, 70);
    strokeWeight(5);

    line(-20, 45, -25 + sin(this.angle) * 8, 70);
    line(20, 45, 25 - sin(this.angle) * 8, 70);

    // Little shoes
    noStroke();
    fill(255, 100, 120);

    ellipse(-28 + sin(this.angle) * 8, 72, 18, 10);
    ellipse(28 - sin(this.angle) * 8, 72, 18, 10);






    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    this.drawReferenceShapes()

    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}



/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/