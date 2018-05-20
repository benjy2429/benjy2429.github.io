import React from 'react';
import Delaunator from 'delaunator';

const POINT_COUNT = 20;
const TRIANGLE_ALPHA = 0.05;

const randomPoint = (width, height) => {
  const x = Math.random() * width;
  const y = Math.random() * height;
  return [x, y];
};

const drawTriangle = (ctx, points) => {
  ctx.beginPath();
  ctx.moveTo(points[0][0], points[0][1]);
  ctx.lineTo(points[1][0], points[1][1]);
  ctx.lineTo(points[2][0], points[2][1]);
  ctx.closePath();

  const alpha = Math.random() * TRIANGLE_ALPHA;
  ctx.fillStyle = `rgba(0, 0, 0, ${alpha})`;
  ctx.fill();
};

const drawBackground = (ctx, width, height) => {
  const points = Array(POINT_COUNT)
    .fill(0)
    .map(() => randomPoint(width, height));

  points.push([0, 0]);
  points.push([0, height]);
  points.push([width, 0]);
  points.push([width, height]);

  const { triangles } = Delaunator.from(points);

  for (let i = 0; i < triangles.length; i += 3) {
    const p0 = triangles[i];
    const p1 = triangles[i + 1];
    const p2 = triangles[i + 2];
    drawTriangle(ctx, [points[p0], points[p1], points[p2]]);
  }
};

export default class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
  }

  componentDidMount() {
    const canvas = this.canvas.current;
    const ctx = canvas.getContext('2d');

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    drawBackground(ctx, canvas.width, canvas.height);
  }

  render() {
    return <canvas ref={this.canvas} id="background-canvas" />;
  }
}
