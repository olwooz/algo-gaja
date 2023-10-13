let suger = require('fs').readFileSync('/dev/stdin').toString().trim();
suger  = Number(suger)
let answer = 0

while(suger > 0){
  if(suger % 5 === 0){
    suger -= 5
  }else{
    suger -= 3
  }
  answer += 1
}

answer = suger === 0 ? answer : -1
console.log(answer)