nodes = [];
edges = [];
function setup() {
  createCanvas(700, 700);
  for(i = 0;  i < 10; i++){
    v = createVector(random(width), random(height));
    nodes.push(v);
  }
  do{
    randomVector1 = nodes[Math.round(random(0,9))];
    randomVector2 = nodes[Math.round(random(0,9))];
  }while(randomVector1 == randomVector2)
    
    edges[0] = new Edge(randomVector1.x, randomVector1.y, randomVector2.x, randomVector2.y);
    
  for(i = 1;  i < 10; i++){
    do {
      rv = nodes[Math.round(random(0,9))];
      edges[i] = new Edge(edges[i-1].x2, edges[i-1].y2, rv.x, rv.y);
    }while (rv == edges[i-1])
  }
}

function draw() {
  background(0);
  stroke(255);
  for(i = 0; i < nodes.length; i++){
    ellipse(nodes[i].x,nodes[i].y, 10);
  }
  for(i = 0; i < edges.length; i++){
    edges[i].show();
  }
  console.log("Distance: " + calcGraphDistance().toFixed(2) + " pixels");
  noLoop();
}
  
function calcGraphDistance(){
  sum = 0;
  for(i = 0; i < edges.length; i++){
    sum += calcDistance(edges[i].x1, edges[i].x2, edges[i].y1, edges[i].y2);
  }
  return sum;
}

function calcDistance(a, b, c, d){
 res = sqrt(((b - a)**2) + ((d - c)**2));
  return res;
}