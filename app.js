// FOR LOOP

for(let i = 0; i < 10; i++){
  //console.log('Number: ' + i);
  if(i === 2){
    console.log( `${i} `+ 'is my favorite number');
    continue;
  }
  if(i === 5){
    console.log('Stop the loop');
    break;
  }
  console.log('Number: ' + i);
}


