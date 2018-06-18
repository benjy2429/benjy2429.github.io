import 'core-js/fn/array/fill';
import React from 'react';
import Delaunator from 'delaunator';

const POINT_COUNT = 20;
const TRIANGLE_ALPHA = 0.05;
const ANIMATION_SPEED = 20;
const DELAY_SPACING = 2;

const randomPoint = (width, height) => {
  const x = Math.random() * width;
  const y = Math.random() * height;
  return [x, y];
};

export default class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.canvas = undefined;
    this.ctx = undefined;
    this.triangles = [];
    this.points = [];
    this.frame = 0;
  }

  componentDidMount() {
    this.ctx = this.canvas.getContext('2d');

    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;

    this.initCanvas(this.ctx, this.canvas.width, this.canvas.height);
  }

  generateTriangles(triangles, points) {
    for (let i = 0; i < triangles.length; i += 3) {
      const p0 = triangles[i];
      const p1 = triangles[i + 1];
      const p2 = triangles[i + 2];
      this.triangles.push({
        points: [points[p0], points[p1], points[p2]],
        alpha: Math.random() * TRIANGLE_ALPHA,
        delay: (i + 1) * DELAY_SPACING / triangles.length * ANIMATION_SPEED
      });
    }
  }

  initCanvas() {
    const points = Array(POINT_COUNT)
      .fill(0)
      .map(() => randomPoint(this.canvas.width, this.canvas.height));

    points.push([0, 0]);
    points.push([0, this.canvas.height]);
    points.push([this.canvas.width, 0]);
    points.push([this.canvas.width, this.canvas.height]);

    const { triangles } = Delaunator.from(points);
    this.generateTriangles(triangles, points);
    setTimeout(
      () => global.window.requestAnimationFrame(this.draw.bind(this)),
      1000
    );
  }

  drawTriangle({ points, alpha, delay }) {
    this.ctx.beginPath();
    this.ctx.moveTo(points[0][0], points[0][1]);
    this.ctx.lineTo(points[1][0], points[1][1]);
    this.ctx.lineTo(points[2][0], points[2][1]);
    this.ctx.closePath();

    const frameAlpha = alpha * ((this.frame - delay) / ANIMATION_SPEED);

    this.ctx.fillStyle = `rgba(0, 0, 0, ${
      frameAlpha > alpha ? alpha : frameAlpha
    })`;
    this.ctx.fill();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.triangles.forEach(triangle => {
      this.drawTriangle(triangle);
    });

    if (this.frame < ANIMATION_SPEED + this.triangles.length * DELAY_SPACING) {
      this.frame += 1;
      global.window.requestAnimationFrame(this.draw.bind(this));
    }
  }

  render() {
    return (
      <canvas
        ref={ref => {
          this.canvas = ref;
        }}
        id="background-canvas"
      />
    );
  }
}
