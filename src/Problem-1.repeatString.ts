{
  // start
  function repeatString (text:string, multiplyBy:number):string {
    let multiplied_string: string = ''
    while(multiplyBy>0){
      multiplied_string += text;
      multiplyBy --;
    }

    return(multiplied_string)
  }
  console.log(repeatString('hello', 3))
  //   end
}
