"use strict";
{
    const logString = (data) => {
        if (typeof data === "string") {
            return data;
        }
        else {
            return "Input is not a string.";
        }
    };
    console.log(logString(42));
}
