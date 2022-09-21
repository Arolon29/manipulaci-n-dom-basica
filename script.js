const h1 = document.querySelector('h1');
const input1 = document.querySelector('#Calculo1');
const input2 = document.querySelector('#Calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const form = document.querySelector('#formulario')

form.addEventListener('submit',sumarInputValues)


function sumarInputValues(event){
    console.log({event});
    event.preventDefault();
    const sumaInputs= parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = "Resultado: " + sumaInputs;
};