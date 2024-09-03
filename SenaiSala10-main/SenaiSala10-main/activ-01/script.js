function somar() {
    var num1 = document.getElementById("num1").valueAsNumber;
    var num2 = document.getElementById("num2").valueAsNumber;
    var res = num1 + num2
    document.getElementById("resultadoSoma").textContent = res;
}
function sub() {
    var n1 = document.getElementById("n1").valueAsNumber;
    var n2 = document.getElementById("n2").valueAsNumber;
    var res = n1 - n2
    document.getElementById("resultadoSub").textContent = res;
}

function mult() {
    var numb1 = document.getElementById("numb1").valueAsNumber;
    var numb2 = document.getElementById("numb2").valueAsNumber;
    var res = numb1 * numb2
    document.getElementById("resultadoMult").textContent = res;
}

function div() {
    var nu1 = document.getElementById("nu1").valueAsNumber;
    var nu2 = document.getElementById("nu2").valueAsNumber;
    var res = nu1 / nu2
    document.getElementById("resultadoDiv").textContent = res;
}

function med(){
    var m1 = document.getElementById("m1").valueAsNumber;
    var m2 = document.getElementById("m2").valueAsNumber;
    var m3 = document.getElementById("m3").valueAsNumber;
    var res = (m1 + m2 + m3) / 3
    document.getElementById("resultadoMed").textContent = res;
}


