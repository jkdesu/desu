// CANVAS 1 – Festive Rings
new p5((p) => {
  p.setup = () => {
    let c = p.createCanvas(1000, 1000, p.WEBGL);
    c.parent("canvas1");
    p.angleMode(p.DEGREES);
    p.colorMode(p.HSB, 360, 100, 100);
    p.noFill();
    p.strokeWeight(1.2);
  };

  p.draw = () => {
    p.background(0);
    p.rotateY(p.frameCount * 0.5);
    p.rotateX(45);
    let rings = 100;
    let segments = 80;
    let radius = 150;
    for (let i = 0; i < rings; i++) {
      p.push();
      let ringAngle = i * 3.6;
      p.rotateZ(ringAngle);
      p.beginShape();
      for (let j = 0; j < segments; j++) {
        let segAngle = j * (360 / segments);
        let x = radius * p.cos(segAngle);
        let y = radius * p.sin(segAngle);
        let z = p.map(i, 0, rings, -200, 200);
        let hue = (segAngle + p.frameCount * 2) % 360;
        p.stroke(hue, 100, 100);
        p.vertex(x, y, z);
      }
      p.endShape(p.CLOSE);
      p.pop();
    }
  };
}, "canvas1");

// CANVAS 2 – Dynamic RGB Ellipse
new p5((p) => {
  p.setup = () => {
    let c = p.createCanvas(1000, 1000, p.WEBGL);
    c.parent("canvas2");
    p.angleMode(p.DEGREES);
  };

  p.draw = () => {
    p.background(30);
    p.noFill();
    p.stroke(255);
    let x = p.sin(p.frameCount * 2) * 50;
    let y = p.cos(p.frameCount) * 50;
    let z = p.sin(p.frameCount * 4) * 50;
    p.translate(x, y, z);
    p.rotateX(p.frameCount);
    p.rotateY(p.frameCount / 2);
    p.rotateZ(p.frameCount / 4);

    for (let i = 0; i < 360; i++) {
      p.push();
      let r = p.map(p.sin(i + p.frameCount), -1, 1, 200, 50);
      let g = p.map(p.sin(i + p.frameCount / 3), -1, 1, 50, 200);
      let b = p.map(p.cos(i + p.frameCount / 7), -1, 1, 50, 200);
      p.stroke(r, g, b);
      p.rotateY(i / 2);
      p.ellipse(0, 0, 200);
      p.pop();
    }
  };
}, "canvas2");

// CANVAS 3 – Layered Ellipses in HSB
new p5((p) => {
  p.setup = () => {
    let c = p.createCanvas(1000, 1000, p.WEBGL);
    c.parent("canvas3");
    p.angleMode(p.DEGREES);
    p.colorMode(p.HSB, 360, 100, 100, 100);
    p.noFill();
  };

  p.draw = () => {
    p.background(0, 0, 10);
    p.rotateY(p.frameCount * 0.3);
    p.rotateX(p.frameCount * 0.2);
    p.strokeWeight(1.2);

    for (let j = 0; j < 5; j++) {
      p.push();
      let zOffset = p.map(j, 0, 5, -100, 100);
      p.translate(0, 0, zOffset);
      for (let i = 0; i < 360; i += 10) {
        p.push();
        let hue = (i * 2 + p.frameCount * 2 + j * 30) % 360;
        let sat = p.map(p.sin(i + p.frameCount / 3), -1, 1, 60, 100);
        let bri = p.map(p.cos(i + p.frameCount / 5), -1, 1, 60, 100);
        p.stroke(hue, sat, bri, 80);
        p.rotateY(i + p.frameCount);
        let radius = 100 + p.sin(p.frameCount + j * 30) * 40;
        p.ellipse(0, 0, radius, radius / 2);
        p.pop();
      }
      p.pop();
    }
  };
}, "canvas3");

// CANVAS 4 – Placeholder / Custom
new p5((p) => {
  p.setup = () => {
    let c = p.createCanvas(1000, 1000, p.WEBGL);
    c.parent("canvas4");
    p.background(20, 20, 30);
    p.textAlign(p.CENTER, p.CENTER);
    p.textSize(48);
    p.fill(200);
    p.noStroke();
    p.text("Artwork 4", 0, 0);
  };

  p.draw = () => {};
}, "canvas4");
