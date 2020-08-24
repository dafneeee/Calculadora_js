var operador1 
var operador2 
var operacion

function init() {

//Variables
var cero = document.getElementById("cero");
var uno = document.getElementById("uno");
var dos = document.getElementById("dos");
var tres = document.getElementById("tres");
var cuatro = document.getElementById("cuatro");
var cinco = document.getElementById("cinco");
var seis = document.getElementById("seis");
var siete = document.getElementById("siete");
var ocho = document.getElementById("ocho");
var nueve = document.getElementById("nueve");
var division = document.getElementById("division");
var resta = document.getElementById("resta");
var suma = document.getElementById("suma");
var multiplicacion = document.getElementById("multiplicacion").value
var igual = document.getElementById("igual");
var reset = document.getElementById("reset");
var resultado = document.getElementById("resultado");


//numeros
cero.onclick = function (e) {
    resultado.textContent += "0";
}
uno.onclick = function (e) {
    resultado.textContent += "1";
}
dos.onclick = function (e) {
    resultado.textContent += "2";
}
tres.onclick = function (e) {
    resultado.textContent += "3";
}
cuatro.onclick = function (e) {
    resultado.textContent += "4";
}
cinco.onclick = function (e) {
    resultado.textContent += "5";
}
seis.onclick = function (e) {
    resultado.textContent += "6";
}
siete.onclick = function (e) {
    resultado.textContent += "7";
}
ocho.onclick = function (e) {
    resultado.textContent += "8";
}
nueve.onclick = function (e) {
    resultado.textContent += "9";
}
reset.onclick = function (e) {
    resetear(); 
}

suma.onclick = function (e) {
    operador1 = resultado.textContent;
    operacion = "+";
    limpiar();
}
resta.onclick = function (e) {
    operador1 = resultado.textContent;
    operacion = "-";
    limpiar();
}
multiplicacion.onclick = function (e) {
    operador1 = resultado.textContent;
    operacion = "*";
    limpiar();
}
division.onclick = function (e) {
    operador1 = resultado.textContent;
    operacion = "/";
    limpiar();
}
igual.onclick = function (e) {
    operador2 = resultado.textContent;
    resolver()
}
}

function limpiar() {
resultado.textContent = "";
}

function resetear() {
resultado.textContent = "";
operador1 = 0;
operador2 = 0;
operacion = "";
}
function resolver() {
var res = 0;
switch (operacion) {
    case "+":
        res = parseFloat(operador1) + parseFloat(operador2);
        break;
    case "-":
        res = parseFloat(operador1) - parseFloat(operador2);
        break;
    case "*":
        res = parseFloat(operador1) * parseFloat(operador2);
        break;
    case "/":
        res = parseFloat(operador1) / parseFloat(operador2);
        break;
}
resetear();
if (isNaN(res) || !isFinite(res)) {
    resultado.textContent = "ERROR";
} else {
    resultado.textContent = res;
}

}