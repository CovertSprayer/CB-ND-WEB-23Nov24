var data = [
  {l:4, b:5},
  {l:10, b:6},
  {l:4, b:4},
]

var area = (a, b) => a*b;
var perimeter = (a, b) =>  2*(a+b);

var areas = [];
for(var rect of data){
  var output = area(rect.l, rect.b);
  areas.push(output);
}

var perimeters = [];
for(var rect of data){
  perimeters.push(perimeter(rect.l, rect.b));
}

console.log("areas ", areas)
console.log("perimeters ", perimeters)
