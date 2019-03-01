// add solution here


function theBeatlesPlay(mus, instru){
  let l=mus.length;
  let k= [];
  for (let counter=0; counter<l; counter++){
    k.push( 'name plays instru'.replace('name', mus).replace('instru', instru))
  }
  return k 
}

function johnLennonFacts(arr){
  let l = arr.length; 
  let counter = 0;
  while (counter< l){
    arr[counter]=arr[counter]+'!!!'
    counter++
  }
  return arr
}

function iLoveTheBeatles(num){
  var k=[];
  
}
