var words = ["ground", "control", "to", "major", "tom"];

function map(array, customFunction){
var output = [];

for (let i of array){
output.push(customFunction(i));
}

return output;
}

console.log(
map(words, function(word) {
  return word.length;
}),

map(words, function(word) {
  return word.toUpperCase();
}),

map(words, function(word) {
  return word.split('').reverse().join('');
})
);