function sumValues() {
    let peso = document.getElementById("num1").value;
    let altura = document.getElementById("num2").value;
    peso = parseFloat(peso)
    altura = parseFloat(altura)



    let result = getIMC(peso, altura)

    const elementoIMC = document.getElementById("imc")
    elementoIMC.innerHTML = result.toFixed(2)

    let cat = getCategory(result)
    const elementoCat = document.getElementById("categoria")
    elementoCat.innerHTML = getCategory(result)


    if (result > 25) { // Se o IMC for maior que 25 (considerado acima do peso)
        document.getElementById("imc").style.color = "red";
    } else { // Caso contrário, considerado saudável
        document.getElementById("imc").style.color = "green";
    }



    document.getElementById("result").innerHTML = "Resultado: " + result.toFixed(2) + " - " + cat
    getCategory(result)
}

function getIMC(peso, altura) {
    return peso / (altura * altura)
}

function getCategory(imc) {
    if (imc < 18.5) {
        return "você está com o peso abaixo do recomedavel"
    } else if (imc < 24.99)
        return "você está com o peso ideal"
    if (imc < 29.99) {
        return "você está um pouco acima do peso"
    } else if (imc < 34.9)
        return "você está com obesidade grau 1"
    if (imc < 39.99) {
        return "você está com obesidade grau 2"
    } else if (imc > 40) {
        return "você está com obesidade 3 ou mórbida"
    }
}
function calcularIMC() {
    limparResultado();
    // Exibir o resultado em blocos separados
    document.getElementById("resultado-nome").innerText = "Nome: " + nome;

    // Limitar o número de casas decimais para 2
    var resultadoImc = "IMC: " + imc.toFixed(2);
    document.getElementById("resultado-imc").innerText = resultadoImc;

    // Mudar a cor do texto com base no IMC
    if (imc > 25) { // Se o IMC for maior que 25 (considerado acima do peso)
        document.getElementById("resultado-imc").style.color = "red";
    } else { // Caso contrário, considerado saudável
        document.getElementById("resultado-imc").style.color = "green";
    }
}

