function theBeatlesPlay(musicians, instruments){
   var array = [];
  
  for(var i = 0; i < musicians.length; i++){
    array.push(`musicians[i] plays instruments[i]`);
  }
  return array;
}

function johnLennonFacts(){
  var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

var newFact =[];
var i = 0;

  while(i < facts.length){
    newFact.push(facts[i] + "!!!");
    i++
  }
  return newFact;
}

function iLoveTheBeatles(num){
  var arr = [];
  
  do{
    arr.push("I love the Beatles!");
    num++;
  }
  while(num < 15){
    return arr;
  }
  
}