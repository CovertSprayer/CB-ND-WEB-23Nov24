function Rectange(length, breadth){
  this.length = length;
  this.breadth = breadth;
}
Rectange.prototype.area = function(){
  return this.length * this.breadth;
}

function Cuboid(length, breadth, height){
  Rectange.call(this, length, breadth);
  this.height = height;
}

Cuboid.prototype = Object.create(Rectange.prototype);
Cuboid.prototype.constructor = Cuboid;

Cuboid.prototype.volume = function(){
  return this.length * this.breadth * this.height;
}

const r1 = new Rectange(20, 30);
console.log(r1);

const c1 = new Cuboid(30, 30, 20);
console.log(c1);

console.log(c1.area(), c1.volume());