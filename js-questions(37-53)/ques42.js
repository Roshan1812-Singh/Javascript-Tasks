// 42. Create a function that will return a Boolean value indicating if two circles
// defined by center coordinates and radius are intersecting

function circlesIntersect(circle1, circle2) {

  const x1 = circle1.x;
  const y1 = circle1.y;
  const r1 = circle1.radius;

  const x2 = circle2.x;
  const y2 = circle2.y;
  const r2 = circle2.radius;

  const dx = x2 - x1;
  const dy = y2 - y1;
  const distance = Math.sqrt(dx * dx + dy * dy);

  return distance <= r1 + r2;
}

const circleA = { x: 0, y: 0, radius: 5 };
const circleB = { x: 7, y: 0, radius: 3 };
const circleC = { x: 10, y: 0, radius: 2 };
const circleD = { x: 4, y: 0, radius: 2 };

console.log("Circle A and B intersect:", circlesIntersect(circleA, circleB)); 
console.log("Circle A and C intersect:", circlesIntersect(circleA, circleC)); 
console.log("Circle A and D intersect:", circlesIntersect(circleA, circleD)); 
console.log("Circle A and A intersect:", circlesIntersect(circleA, circleA)); 
