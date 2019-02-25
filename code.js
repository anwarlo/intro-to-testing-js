// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(str) {
   return str === undefined ? "Hello, Jane!"
       :str === true ? "Hello, World!"
           :str === false ? "Hello, World!"
               : "Hello, " + str + "!";
}
function isFive(input) {
    return input === 5 ? true :false;
}
function isEven(input) {
    return parseInt(input % 2) === 0 ? true
        :parseInt(input % 2) > 0 ? false
            :input === "" ? false
                :input === Infinity ? false
                    :false;
}
function isVowel(input) {
    if (typeof (input) === "number" || input === undefined || typeof (input) === "boolean"){
        return false;
    }
    return input.toLowerCase() === "a" ||
        input.toLowerCase() === "e" ||
        input.toLowerCase() === "i" ||
        input.toLowerCase() === "o" ||
        input.toLowerCase() === "u";
}
function add(x,y) {
    if (isNaN(parseFloat(x)) || isNaN(parseFloat(x)) === true){
        return NaN
    }
    return parseFloat(x) + parseFloat(y);
}