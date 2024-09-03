function comecar(){
 var nome = document.getElementById("exampleFormControlInput1").value;
 show(nome);
}

function show(nome){
    document.getElementById("nomePrint").textContent = nome;
    var div = document.getElementById("selects-div");
    if (nome && nome.trim() !== ""){
    div.style.display = "block";   
    document.getElementById("exampleFormControlInput1").style.background = "none";
    }
    else{
        document.getElementById("error").style.display = "flex";
    }

}

function fechar(){
    document.getElementById("error").style.display = "none"; 
    document.getElementById("exampleFormControlInput1").style.background = "pink";
}

function total(){
    var vp = document.getElementById("selectPrato").value;
    var vs = document.getElementById("selectSobremesa").value;
    var vb = document.getElementById("selectBebida").value;
    

    var total = ~~vp + ~~vb + ~~vs

    document.getElementById('resultado').textContent = "R$" + total + ",00";


}

function reset() {
    $("#selectSobremesa option").prop("selected", function () {
        // return defaultSelected property of the option
        return 0;
    });
    $("#selectPrato option").prop("selected", function () {
        // return defaultSelected property of the option
        return 0;
    });
    $("#selectBebida option").prop("selected", function () {
        // return defaultSelected property of the option
        return 0;
    });
    total();
 }

function fazerPedido() {

}