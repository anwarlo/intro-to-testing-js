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