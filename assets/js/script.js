const button = document.querySelector("button");

const multiplicarDosNumeros = () => {
  let resultado = null;
  const num1 = document.querySelector("#num1").value;
  const num2 = 400000;
  if (isNaN(num1) || isNaN(num2)) {
    resultado = "Es necesario introducir dos numeros válidos";
  } else {
    const factor = +num1 * +num2;
    resultado = factor;
  }
  document.querySelector("#resultado").textContent = resultado;
};

button.addEventListener("click", multiplicarDosNumeros);

const mostrarCantidad = () => {
  let cantidad = null;
  const num1 = document.querySelector("#num1").value;
  const num2 = 1;
  if (isNaN(num1) || isNaN(num2)) {
    cantidad = "Es necesario introducir dos numeros válidos";
  } else {
    const factor = +num1 * +num2;
    cantidad = factor;
  }
  document.querySelector("#cantidad").textContent = cantidad;
};

button.addEventListener("click", mostrarCantidad);

function mostrarColor() {
  input = document.querySelector("#color1");
  div = document.querySelector("#color");
  div.style.backgroundColor = input.value;
}

button.addEventListener("click", mostrarColor);
