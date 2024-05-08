"use strict";
{
    // start
    function filterEvenNumbers([...rest]) {
        // solve no 1
        // let even_numbers: number[] = [];
        // for (let i = 0; i < [...rest].length; i++) {
        //   if ([...rest][i] % 2 == 0) {
        // pushing the even numbers to another Array
        //     even_numbers.push([...rest][i]);
        //   } else {
        //     even_numbers;
        //   }
        // }
        // solve no 2
        const even_numbers = [...rest].filter((data) => data % 2 == 0);
        return [...even_numbers].sort();
    }
    console.log(filterEvenNumbers([6, 4, 3, 2, 5, 11, 12]));
    //   end
}
