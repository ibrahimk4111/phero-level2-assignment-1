{
  // start
  function findLargestNumber([...rest]: number[]): number {
    // solve no 1
    //   const max_number:number = Math.max(...rest)

    // solve no 2
    let max_number: number = 0;
    for (let i = 0; i < [...rest].length; i++) {
      if ([...rest][i] > max_number) {
        max_number = [...rest][i];
      } else {
        max_number;
      }
    }

    return max_number;
  }
  console.log(findLargestNumber([10, 5, 8, 20, 3]));
  //   end
}
