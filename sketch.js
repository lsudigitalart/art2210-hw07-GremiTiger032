let soundFile;
let soundPlayed = false;
let startTime;

function preload() {
    soundFile = loadSound('Game Loop.mp3');
}

function setup() {
    createCanvas(400, 400);
}

function mousePressed() {
  if (!soundFile.isPlaying()) {
    soundFile.play();
  }
  startTime = millis(2000);

}

function draw() {
    background(220);

    if (millis() - startTime > 7200) {
      ellipse(width / 2, height / 2, 400);
  }
    if (millis() - startTime > 7000) {
      ellipse(width / 2, height / 2, 350);
  }
    if (millis() - startTime > 6800) {
      ellipse(width / 2, height / 2, 300);
  }
    if (millis() - startTime > 6600) {
      ellipse(width / 2, height / 2, 250);
  }
    if (millis() - startTime > 6400) {
      ellipse(width / 2, height / 2, 200);
  }
    if (millis() - startTime > 6200) {
      ellipse(width / 2, height / 2, 150);
  }
    if (millis() - startTime > 6000) {
      ellipse(width / 2, height / 2, 100);
  }
    if (millis() - startTime > 500) {
        ellipse(width / 2, height / 2, 50);
    }
    if (millis() - startTime > 2300) {
      ellipse(width / 4, height / 4, 50);
  }
    if (millis() - startTime > 2000) {
      ellipse(width / 4, height / 4, 20);
  }
  if (millis() - startTime > 3300) {
    ellipse(width / 1.3, height / 4, 50);
  }
  if (millis() - startTime > 3000) {
    ellipse(width / 1.3, height / 4, 20);
  }
  if (millis() - startTime > 4300) {
    ellipse(width / 4, height / 1.3, 50);
  }
  if (millis() - startTime > 4000) {
      ellipse(width / 4, height / 1.3, 20);
    }
    if (millis() - startTime > 5300) {
      ellipse(width / 1.3, height / 1.3, 50);
    }
    if (millis() - startTime > 5000) {
      ellipse(width / 1.3, height / 1.3, 20);
    }
   
}