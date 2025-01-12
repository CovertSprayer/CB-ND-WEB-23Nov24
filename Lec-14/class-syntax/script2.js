class Rectange{
  constructor(length, breadth){
    this.length = length;
    this.breadth = breadth;
  }

  area(){
    return this.length * this.breadth;
  }
}

class Cuboid extends Rectange{
  constructor(length, breadth, height){
    super(length, breadth);
    this.height = height;
  }

  volume(){
    return this.length * this.breadth * this.height;
  }
}

const c1 = new Cuboid(10,20,30);
console.log(c1);
console.log(c1.area());
console.log(c1.volume());
