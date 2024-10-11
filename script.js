const button = document.getElementById('enviarButton');
const inputAltura = document.getElementById('inputAltura');
const inputPeso = document.getElementById('inputPeso');
const imcTexto = document.getElementById('imc');
const classificacaoTexto = document.getElementById('classificacao')

button.addEventListener('click', function() {
    let imcMensagem = '';
    let classificacao = '';

    if (!inputPeso.value || !inputAltura.value) {
        imcTexto.textContent = '~';
        classificacaoTexto.textContent = 'Informações inválidas';
    } else {
        const peso = parseFloat(inputPeso.value);
        const altura = parseFloat(inputAltura.value);
    
        const imc = (peso / (altura**2)).toFixed(2);
        imcMensagem = imc;

        if (imc < 18.5) {
            classificacao = 'Peso abaixo do normal';
        } else if (imc >= 18.5 && imc < 25) {
            classificacao = 'Peso ideal';
        } else if (imc >= 25 && imc < 30) {
            classificacao = 'Sobrepeso';
        } else if (imc >= 30 && imc < 35) {
            classificacao = 'Obesidade grau I';
        } else if (imc >= 35 && imc < 40) {
            classificacao = 'Obesidade grau II';
        } else {
            classificacao = 'Obesidade extrema';
        };
        
        imcTexto.textContent = imcMensagem;
        classificacaoTexto.textContent = classificacao;
    };
})