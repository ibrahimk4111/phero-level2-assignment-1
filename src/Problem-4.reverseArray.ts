{
  // start
  function reverseArray([...rest]: (number | string)[]): (number | string)[] {
    // solve no 1
    // return [...rest].reverse();

    // solve no 2
    let reverse_array: (number | string)[] = [];
    for (let i = [...rest].length - 1; i >= 0; i--) {
      reverse_array.push([...rest][i]);
    }
    return [...reverse_array];
  }
  console.log(reverseArray(["cherry", "banana", "apple"]));
  //   end
}
