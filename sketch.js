let qtree;
function setup() {
  createCanvas(600, 600);
  background(0);
  let boundary = new Rectangle(300, 300, 300, 300);
  qtree = new QuadTree(boundary, 4);
  console.log(qtree);

  // for (let i = 0; i < 500; i++) {
  //   let p = new Point(random(width), random(height));
  //   qtree.insert(p);
  // }
}
function draw() {
  if (mouseIsPressed) {
    let m = new Point(mouseX, mouseY);
    qtree.insert(m);
  }
  qtree.show();
}
