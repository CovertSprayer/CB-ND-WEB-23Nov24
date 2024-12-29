var data = [
  {l:4, b:5},
  {l:10, b:6},
  {l:4, b:4},
];

var area = (a, b) => a * b;
var perimeter = (a, b) => 2 * (a + b);

function calculate(dataOfRect, logic){
  var result = [];
  for(var rect of dataOfRect){
    const output = logic(rect.l, rect.b);
    result.push(output);
  }
  return result;
}

var areas = calculate(data, area);
console.log(areas)
var perimeters = calculate(data, perimeter);
console.log(perimeters);