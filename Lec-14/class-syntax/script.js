class Rectange{
  constructor(length, breadth){
    this.length = length;
    this.breadth = breadth;
  }

  area(){
    return this.length * this.breadth;
  }

  static sayHello(){
    console.log("HI there!!");
  }

  get getLength(){
    return this.length;
  }

  get getBreadth(){
    return this.breadth;
  }

  set setLength(len){
    this.length = len;
  }
}

const r1 = new Rectange(10,20);
// console.log(r1);
// console.log(r1.area());
// console.log(r1.getLength);
// r1.setLength = 300;
console.log(r1)
console.log(r1.getBreadth);
// Rectange.sayHello();