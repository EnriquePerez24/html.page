function aumentarNumero() {
    
    var numeroSpan = document.getElementById("numero");    
    var numeroActual = parseInt(numeroSpan.innerText);    
    var nuevoNumero = numeroActual + 1;    
    numeroSpan.innerText = nuevoNumero;
}