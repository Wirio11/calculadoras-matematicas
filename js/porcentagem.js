let escolha_do_calculo
let porcentagem
let valorTotal
let resultado
let vTotal
let vParcial
let valorAumentar
let porcentagemAumentar
let valorDiminuir
let porcentagemDiminuir
let botaoCalcular
function escolherCalculo() {
    escolha_do_calculo = document.getElementById("calculo")
    porcentagem = document.getElementById("porcentagem")
    valorTotal = document.getElementById("valorTotal")
    vTotal = document.getElementById('vTotal')
    vParcial = document.getElementById('vParcial')
    valorAumentar = document.getElementById('valorAumentar')
    porcentagemAumentar = document.getElementById("porcentagemAumentar")
    valorDiminuir = document.getElementById('valorDiminuir')
    porcentagemDiminuir = document.getElementById("porcentagemDiminuir")
    botaoCalcular = document.getElementById("calcular")
    if (escolha_do_calculo.value === "X%valor") {
        valorTotal.hidden = false
        porcentagem.hidden = false
        vTotal.hidden = true
        vParcial.hidden = true
        porcentagemAumentar.hidden = true
        valorAumentar.hidden = true
        valorDiminuir.hidden = true
        porcentagemDiminuir.hidden = true

    } else if (escolha_do_calculo.value === "porcentagem") {
        vTotal.hidden = false
        vParcial.hidden = false
        porcentagem.hidden = true
        valorTotal.hidden = true
        porcentagemAumentar.hidden = true
        valorAumentar.hidden = true
        valorDiminuir.hidden = true
        porcentagemDiminuir.hidden = true

    } else if (escolha_do_calculo.value === "aumentar") {
        porcentagemAumentar.hidden = false
        valorAumentar.hidden = false
        vTotal.hidden = true
        vParcial.hidden = true
        porcentagem.hidden = true
        valorTotal.hidden = true
        valorDiminuir.hidden = true
        porcentagemDiminuir.hidden = true
    } else if (escolha_do_calculo.value === "diminuir") {
        porcentagemAumentar.hidden = true
        valorAumentar.hidden = true
        vTotal.hidden = true
        vParcial.hidden = true
        porcentagem.hidden = true
        valorTotal.hidden = true
        valorDiminuir.hidden = false
        porcentagemDiminuir.hidden = false
    }
    botaoCalcular.hidden = false
    let botaoLimpar = document.getElementById('limpar')
    botaoLimpar.hidden = false
}
function calcular() {
    let resultado
    if (escolha_do_calculo.value === "X%valor") {
        let porcentagem_number = Number(document.getElementById('porcentagem_input').value)
        let valorTotal_number = Number(document.getElementById('valor_total').value)
        if (document.getElementById('porcentagem_input').value == "" ||
            document.getElementById('valor_total').value == "") {
            alert('Os campos devem estar preenchidos.')
        }
        else if (porcentagem_number <= 0 || valorTotal_number <= 0) {
            alert('ERROR: permitimos apenas entrada de valores positivos')
        }
        else {
            resultado = (porcentagem_number * valorTotal_number) / 100
            document.getElementById('resultado')
                .innerHTML = 'Resultado: ' + resultado
            document.getElementById('explicacao')
                .innerHTML = porcentagem_number + '% de ' + valorTotal_number + ' corresponde a ' + resultado + '.'
        }
    } else if (escolha_do_calculo.value === "porcentagem") {
        let v_total = Number(document.getElementById('v_total').value)
        let v_parcial = Number(document.getElementById('v_parcial').value)
        if (document.getElementById('v_total').value == ''
            || document.getElementById('v_parcial').value == '') {
            alert('Os campos devem estar preenchidos.')
        }
        else if (v_parcial <= 0 || v_total <= 0) {
            alert('ERROR: permitimos apenas entrada de valores positivos')
        }
        else {
            console.log((v_parcial * 100) / v_total)
            resultado = (v_parcial * 100) / v_total
            document.getElementById('resultado')
                .innerHTML = 'Resultado: ' + resultado
            document.getElementById('explicacao')
                .innerHTML = v_parcial + ' representa ' + resultado + '% de ' + v_total + '.'
        }
    }
    else if (escolha_do_calculo.value === "aumentar") {
        let valor_aumentar = Number(document.getElementById('valor_aumentar').value)
        let porcentagem_aumentar = Number(document.getElementById('porcentagem_aumentar').value)
        if (document.getElementById('valor_aumentar').value == ''
            || document.getElementById('porcentagem_aumentar').value == '') {
            alert('Os campos devem estar preenchidos.')
        }
        else if (valor_aumentar <= 0 || porcentagem_aumentar <= 0) {
            alert('ERROR: permitimos apenas entrada de valores positivos')
        }
        else {
            let aumentarValor = (valor_aumentar * porcentagem_aumentar) / 100
            let valorAumentado = valor_aumentar + aumentarValor
            document.getElementById('resultado')
                .innerHTML = 'Resultado: ' + valorAumentado
            document.getElementById('explicacao')
                .innerHTML = porcentagem_aumentar + '% acrescido ao valor ' + valor_aumentar + ' resulta em: ' + valorAumentado + '.'
        }
    }
    else if (escolha_do_calculo.value === "diminuir") {
        let valor_diminuir = Number(document.getElementById('valor_diminuir').value)
        let porcentagem_diminuir = Number(document.getElementById('porcentagem_diminuir').value)
        if (document.getElementById('valor_diminuir').value == ''
            || document.getElementById('porcentagem_diminuir').value == '') {
            alert('Os campos devem estar preenchidos.')
        }
        else if (valor_diminuir <= 0 || porcentagem_diminuir <= 0) {
            alert('ERROR: permitimos apenas entrada de valores positivos')
        }
        else if (porcentagem_diminuir > 100) {
            alert('ERROR: diminuir um número em mais que 100% resulta em um valor negativo')
        }
        else {
            let diminuirValor = (valor_diminuir * porcentagem_diminuir) / 100
            let valorDimuido = valor_diminuir - diminuirValor
            document.getElementById('resultado')
                .innerHTML = 'Resultado: ' + valorDimuido
            document.getElementById('explicacao')
                .innerHTML = porcentagem_diminuir + '% diminuído do valor ' + valor_diminuir + ', resulta em: ' + valorDimuido + '.'
        }
    }
}
function limpar() {
    document.getElementById('porcentagem_input').value = ''
    document.getElementById('valor_total').value = ''
    document.getElementById('v_parcial').value = ''
    document.getElementById('v_total').value = ''
    document.getElementById('porcentagem_aumentar').value = ''
    document.getElementById('valor_aumentar').value = ''
    document.getElementById('valor_diminuir').value = ''
    document.getElementById('porcentagem_diminuir').value = ''
    document.getElementById('resultado').innerHTML = ''
    document.getElementById('explicacao').innerHTML = ''
}