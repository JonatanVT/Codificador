var textInput = document.querySelector("#input-text");
var outInput = document.querySelector("#Visualcaixa");
var textoOriginal = ''; 

function criptografar() {
    textoOriginal = textInput.value;

        var resultCripto = textoOriginal.replace(/e/g, "enter")
                                        .replace(/i/g, "imes")
                                        .replace(/a/g, "ai")
                                        .replace(/o/g, "ober")
                                        .replace(/u/g, "ufat");

        
        document.getElementById('Visualcaixa').innerHTML = '<textarea readonly id="input-text">' + resultCripto + '</textarea>' +
            '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';
}

function descriptografar() {
   
        var resultDescripto = textoOriginal.replace(/enter/g, "e")
                                        .replace(/imes/g, "i")
                                        .replace(/ai/g, "a")
                                        .replace(/ober/g, "o")
                                        .replace(/ufat/g, "u");

       
        document.getElementById('Visualcaixa').innerHTML = '<textarea readonly id="input-text">' + resultDescripto + '</textarea>' +
            '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';
}


function copiar() {
    var textoCop = document.getElementById('Visualcaixa').querySelector('textarea');
  
    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado.");
} 

