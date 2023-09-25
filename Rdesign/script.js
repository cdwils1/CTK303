let stars = [];
var canvas;
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index','-1');

  for (let i = 0; i < 50; i++) {
    stars.push(new Star());
  }
}

function draw() {
  background(0); // Set the background color to black

  for (let star of stars) {
    star.update();
    star.display();
  }
}

class Star {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.speedX = random(-2, 2);
    this.speedY = random(-2, 2);
    this.radius = random(2, 5);
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > width) {
      this.speedX *= -1;
    }

    if (this.y < 0 || this.y > height) {
      this.speedY *= -1;
    }
  }

  display() {
    fill(255); // Set the star color to white
    noStroke();
    ellipse(this.x, this.y, this.radius * 2);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

