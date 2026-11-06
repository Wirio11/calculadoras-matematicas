function calcularPotencia() {
    var base = parseFloat(document.getElementById("base").value);
    var expoente = parseFloat(document.getElementById("expoente").value);
    if (base === 0 && expoente < 0) {
        alert('Não é possível elevar 0 a um expoente negativo.')
        return
    } if (document.getElementById("base").value == '' ||
        document.getElementById("expoente").value == '') {
        alert('Os dois campos precisam estar preenchidos')
        return
    } if (base != "" && expoente != "") {
        var resultado = Math.pow(base, expoente);
        document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
        return
    }
}
function limparInput() {
    document.getElementById('base').value = ''
    document.getElementById('expoente').value = ''
    document.getElementById('resultado').innerHTML = ''
}