function fizzBuzz (input){
    if (typeof(input) !== "number")
        return `"${input}" is not a number`
    else if ((input % 3 === 0) && (input % 5 === 0))
        return "FizzBuzz"
    else if (input % 3 === 0)
        return "Fizz"
    else if (input % 5 === 0)
        return "Buzz"
    else
    return input;
}

console.log(fizzBuzz("msm-faraj"));
console.log(fizzBuzz(15));
console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(7));
