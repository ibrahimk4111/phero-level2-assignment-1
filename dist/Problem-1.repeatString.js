"use strict";
{
    // start
    function repeatString(text, multiplyBy) {
        let multiplied_string = '';
        while (multiplyBy > 0) {
            multiplied_string += text;
            multiplyBy--;
        }
        return (multiplied_string);
    }
    console.log(repeatString('hello', 3));
    //   end
}
