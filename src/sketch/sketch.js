import Dot from './Dot';
import fontFile from './font-times-new-roman.ttf';

const defaultFrameRate = 30; // low framerate to avoid too much strain on mobile phones


export default (parent, text) => (sketch) => {
  let font;
  let dots;
  let firstWordPoints;
  let secondWordPoints;
  let thirdWordPoints = [];

  sketch.preload = () => {
    font = sketch.loadFont(fontFile);
  };

  const fillDots = (width, height) => {
    dots = [];
    let words = text.split(' ');
    let fontSize, x, y;

    if (width > height) {
      // Desktop view
      fontSize = Math.min(width * 0.08, height * 0.2);
      x = width * 0.1;
      y = height * 0.4;
    } else {
      // Mobile view
      fontSize = Math.min(width * 0.15, height * 0.1);
      x = width * 0.05;
      y = height * 0.3;
    }

    let allPoints = [];
    words.forEach((word, index) => {
      let points = font.textToPoints(word, x, y, fontSize);
      allPoints = allPoints.concat(points);

      // Move to next line
      y += fontSize * 1.2;

      if (y > height * 0.8) {
        y = height * 0.3;
        x += width * 0.5;
      }
    });

    allPoints.forEach((point) => {
      dots.push(new Dot(point.x, point.y, sketch));
    });
  };

  sketch.setup = () => {
    const width = parent.offsetWidth;
    const height = parent.offsetHeight;
    sketch.createCanvas(width, height);
    fillDots(width, height);
    sketch.frameRate(defaultFrameRate);
  };

  sketch.draw = () => {
    sketch.clear();
    dots.forEach((dot) => {
      dot.update();
      dot.applyAllForces();
      dot.show();
    });
  };
};
