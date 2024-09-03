var nomeGlobal;
var mensagemGlobal;
var emailGlobal;
var cpfGlobal;

function enviar(){
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var cpf = document.getElementById("contato").value;
    var mensagem = document.getElementById("area").value;
    
    nomeGlobal = nome
    areaGlobal = mensagem
    emailGlobal = email
    cpfGlobal = cpf
    

    document.getElementById("confNome").textContent = nome
    document.getElementById("confEmail").textContent = email
    document.getElementById("confCpf").textContent = cpf
    document.getElementById("confMsg").textContent = mensagem

}

function envia(){
    var numeroTelefone = ""
    var linkzap = "https://wa.me/"
        + numeroTelefone 
        + "?text=Nome:" 
        + nomeGlobal 
        + "-"
        + emailGlobal
        + "-"
        + cpfGlobal
        + "-"
        + areaGlobal
    window.open(linkzap,"_blank");
}