// function that display value
function dis(val) {
    document.getElementById("display").value += val
}

function myFunction(event) {
    if (event.key == '0' || event.key == '1'
        || event.key == '2' || event.key == '3'
        || event.key == '4' || event.key == '5'
        || event.key == '6' || event.key == '7'
        || event.key == '8' || event.key == '9'
        || event.key == '+' || event.key == '-'
        || event.key == '*' || event.key == '/')
        document.getElementById("display").value += event.key;
}

var cal = document.getElementById("calcu");
cal.onkeyup = function (event) {
    if (event.keyCode === 13) {
        console.log("Enter");
        let x = document.getElementById("display").value
        console.log(x);
        solve();
    }
}
 // funcrtions that evaluates the digit and return result
 function solve() {
    let x = document.getElementById("display").value;
    let y = math.evaluate(x);
    document.getElementById("display").value = y;
 }
 // function that clear the display
 function clr() {
    document.getElementById("display").value = ""
 }
 function myFunction() {
    var element = document.body;
    element.classList.toggle("darkmode");
 }
 