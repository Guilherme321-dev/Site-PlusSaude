function calcular1() {
    var quadril = document.getElementById("numQuadril").value;
    var altura = document.getElementById("numAltura").value;
    var iac = (quadril/(altura * (Math.sqrt(altura))))-18;
    var text = ""

    if (iac < 8) {
        text = "Você está Subnutrido"
    } else if (iac >= 8 && iac <= 20.99) {
        text = "Você está com peso normal"
    } else if (iac >= 21 && iac <= 24.99) {
        text = "Você está com Sobrepeso"
    } else if (iac >= 25) {
        text = "Você está com Obesidade"
    }
    document.getElementById("text_area").innerText = text
}