let p_Cateto_adjacente
let p_Cateto_oposto
let p_Hipotenusa
let incognita
let cateto_oposto
let cateto_adjacente
let hipotenusa
let resultado
let limparButton
function escolherIncognita() {
    incognita = document.getElementById("incognita")
    calcularButton = document.getElementById("calcular")
    limparButton = document.getElementById("limpar")
    p_Hipotenusa = document.getElementById('H')
    p_Cateto_adjacente = document.getElementById('CA')
    p_Cateto_oposto = document.getElementById('CO')
    console.log(incognita.value)
    if (incognita.value === '') {
        alert('Escolha uma incógnita para calcular!')
    } else if (incognita.value === 'hipotenusa') {
        p_Hipotenusa.hidden = true
        p_Cateto_adjacente.hidden = false
        p_Cateto_oposto.hidden = false
        calcularButton.hidden = false
    } else if (incognita.value === 'cateto_oposto') {
        p_Cateto_oposto.hidden = true
        p_Hipotenusa.hidden = false
        p_Cateto_adjacente.hidden = false
        calcularButton.hidden = false
    } else if (incognita.value === 'cateto_adjacente') {
        p_Hipotenusa.hidden = false
        p_Cateto_oposto.hidden = false
        p_Cateto_adjacente.hidden = true
        calcularButton.hidden = false
    }
    limparButton.hidden = false
}
function calcular() {
    cateto_oposto = Number(document.getElementById('cateto_oposto').value)
    cateto_adjacente = Number(document.getElementById('cateto_adjacente').value)
    hipotenusa = Number(document.getElementById('hipotenusa').value)
    if (incognita.value === 'hipotenusa') {
        if (document.getElementById('cateto_oposto').value === '' ||
            document.getElementById('cateto_adjacente').value === '') {
            alert('Preencha os dois catetos!')
            return
        }
        if (cateto_oposto <= 0 || cateto_adjacente <= 0) {
            alert('Os catetos devem ser maiores que 0!')
            return
        }
        resultado = Math.sqrt(Math.pow(cateto_oposto, 2) + Math.pow(cateto_adjacente, 2))
        document.getElementById('resultado').innerHTML = 'O valor da hipotenusa é: ≈ ' + resultado.toFixed(3)
    } else if (incognita.value === 'cateto_oposto') {
        if (document.getElementById('hipotenusa').value === '' ||
            document.getElementById('cateto_adjacente').value === '') {
            alert('Preencha a hipotenusa e o cateto adjacente!')
            return
        }
        if (hipotenusa <= 0 || cateto_adjacente <= 0) {
            alert('A hipotenusa e o cateto adjacente devem ser maiores que 0!')
            return
        }
        if (hipotenusa <= cateto_adjacente) {
            alert('A hipotenusa deve ser maior que o cateto adjacente!')
            return
        }
        resultado = Math.sqrt(Math.pow(hipotenusa, 2) - Math.pow(cateto_adjacente, 2))
        document.getElementById('resultado').innerHTML = 'O valor do cateto oposto é: ≈ ' + resultado.toFixed(3)

    } else if (incognita.value === 'cateto_adjacente') {
        if (document.getElementById('hipotenusa').value === '' ||
            document.getElementById('cateto_oposto').value === '') {
            alert('Preencha a hipotenusa e o cateto oposto!')
            return
        }
        if (hipotenusa <= 0 || cateto_oposto <= 0) {
            alert('A hipotenusa e o cateto oposto devem ser maiores que 0!')
            return
        }
        if (hipotenusa <= cateto_oposto) {
            alert('A hipotenusa deve ser maior que o cateto oposto!')
            return
        }
        resultado = Math.sqrt(Math.pow(hipotenusa, 2) - Math.pow(cateto_oposto, 2))
        document.getElementById('resultado').innerHTML = 'O valor do cateto adjacente é: ≈ ' + resultado.toFixed(3)
    }
}
function limpar() {
    document.getElementById('cateto_oposto').value = ''
    document.getElementById('cateto_adjacente').value = ''
    document.getElementById('hipotenusa').value = ''
    document.getElementById('resultado').innerHTML = ''
}