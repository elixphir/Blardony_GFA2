function addFunc(){
    var x = parseInt(document.getElementById("num1").value);
    var y = parseInt(document.getElementById("num2").value);
    var z = x + y;
    document.getElementById("results").innerHTML = "The sum of " + x + " and " + y + " is " + z + ".";
}
function subtractFunc(){
    var x = parseInt(document.getElementById("num1").value);
    var y = parseInt(document.getElementById("num2").value);
    var z = x - y;
    document.getElementById("results").innerHTML = "The difference between " + x + " and " + y + " is " + z + ".";
}
function multiplyFunc(){
    var x = parseInt(document.getElementById("num1").value);
    var y = parseInt(document.getElementById("num2").value);
    var z = x * y;
    document.getElementById("results").innerHTML = "The product of " + x + " and " + y + " is " + z + ".";
}
function divideFunc(){
    var x = parseInt(document.getElementById("num1").value);
    var y = parseInt(document.getElementById("num2").value);
    var z = x / y;
    document.getElementById("results").innerHTML = "The quotient of " + x + " divided by " + y + " is " + z + ".";
}
function remainderFunc(){
    var x = parseInt(document.getElementById("num1").value);
    var y = parseInt(document.getElementById("num2").value);
    var z = x % y;
    document.getElementById("results").innerHTML = "The remainder of " + x + " divided by " + y + " is " + z + ".";
}