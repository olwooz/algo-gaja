let input = require('fs').readFileSync('/dev/stdin').toString().trim();
input  = Number(input)
let answer = 0

while(input > 0){
  if(input % 5 === 0){
    input -= 5
  }else{
    input -= 3
  }
  answer += 1
}

answer = input === 0 ? answer : -1
console.log(answer)