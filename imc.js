function calcular() {

    var peso = document.getElementById('numPeso').value;
    var altura = document.getElementById('numAltura').value;
    var imc = peso / (altura * altura);
    var text = ""

    if (imc < 18.5) {
        text = "Você está com Magreza"
    } else if (imc <= 24.9) {
        text = "Você está com peso Normal"
    } else if (imc <= 29.9) {
        text = "Você está com Sobrepeso"
    } else if (imc <= 39.9) {
        text = "Você está com Obesidade"
    } else if (imc > 40) {
        text = "Você está com Obesidade Grave"
    }
    document.getElementById("text_area").innerText = text
}