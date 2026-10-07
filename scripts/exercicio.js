//alert("Alerta!!!")
const buttonEx1 = document.getElementById("exercicio1")

buttonEx1.addEventListener("click", () => {
    const num1 = document.getElementById("num1")
    const num2 = document.getElementById("num2")
    const soma = Number(num1.value) + Number(num2.value)
    const subtrair = Number(num1.value) - Number(num2.value)
    const multiplicar = Number(num1.value) * Number(num2.value)
    const dividir = Number(num1.value) / Number(num2.value)
    const resultadoSoma = document.createElement("h2")
    const resultadoSub = document.createElement("h2")
    const resultadoMult = document.createElement("h2")
    const resultadoDiv = document.createElement("h2")

    resultadoSoma.textContent = soma
    resultadoSub.textContent = subtrair
    resultadoMult.textContent = multiplicar
    resultadoDiv.textContent = dividir
    document.body.appendChild(resultadoSoma);
    document.body.appendChild(resultadoSub);
    document.body.appendChild(resultadoMult);
    document.body.appendChild(resultadoDiv);
    

})
