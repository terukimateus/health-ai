const nextBtn = document.getElementById("next-btn");
const dietaInfo = document.getElementById("dieta-info");
const nameInput = document.getElementById("name");
const genderInputs = document.querySelectorAll('input[name="genero"]');
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const ageInput = document.getElementById('idade')

function proxInfo() {
    if (nameInput.value === "" || !genderInputs[0].checked && !genderInputs[1].checked || weightInput.value === "" || heightInput.value === "" || ageInput.value === "" ) {
        document.getElementById('dieta-error').textContent = "Por favor, preencha todas as informações."
    } else {
        const tmb = (genderInputs[0].checked) ? (10 * weightInput.value) + (6.25 * heightInput.value) - (5 * ageInput.value) - 161 : (10 * weightInput.value) + (6.25 * heightInput.value) - (5 * ageInput.value) + 5;
        localStorage.setItem('tmb', tmb); // Armazenando o valor da tmb no LocalStorage
        localStorage.setItem('nameInput', nameInput.value); // Armazenando o valor do nome
        localStorage.setItem('idadeInput', ageInput.value); // Armazenando o valor da idade
        const generoSelecionado = genderInputs[0].checked ? 'Feminino' : 'Masculino';
        localStorage.setItem('generoInput', generoSelecionado); // Armazenando o valor do gênero
        window.location.href = 'dieta2.html';
    }
};

const objInputs = document.querySelectorAll('input[name="objetivo"]')
const atividadeSelect = document.getElementById("atividade");


function calcDieta() {

    const selectedOption = atividadeSelect.value
    const tmb = parseFloat(localStorage.getItem('tmb')); // Recuperando o valor da tmb do LocalStorage

    let cals = 0

    if (selectedOption === 'sedentario') {
        cals = tmb * 1.2
    } else if (selectedOption === 'pouco') {
        cals = tmb * 1.375
    } else if (selectedOption === 'moderadamente') {
        cals = tmb * 1.55
    } else if (selectedOption === 'muito') {
        cals = tmb * 1.725
    } else if (selectedOption === 'extremamente') {
        cals = tmb * 1.9
    }
    return cals
}


const API_KEY = '4fb6M_Lcduwoq0tFds5fTNR9prkfuTibYC5HL56jaAQ';
const API_BASE = 'https://chimeragpt.adventblocks.cc/api/v1';
function sendDieta() {
    const loadingIndicator = document.getElementById('loading-indicator');
    loadingIndicator.style.display = 'block';
    let cals = calcDieta();
    const objInputs = document.querySelectorAll('input[name="objetivo"]');

    let objetivo = null; // Inicializar a variável objetivo

    // Percorrer os botões de rádio para encontrar o selecionado
    objInputs.forEach(input => {
        if (input.checked) {
            objetivo = input.value; // Definir o valor do botão selecionado como objetivo
        }
    });

    if (objetivo === 'hipertrofia') {
        cals += 500;
    } else if (objetivo === 'gordura') {
        cals -= 500;
        objetivo = `perca de ${objetivo}`
    } else if (objetivo === 'massagordura') {
        cals -= 200;
        objetivo = `manter massa e perder gordura`
    } else if (objetivo === 'manutencao') {
        // Não é necessário fazer nada, já que a caloria se mantém
    }
    cals = cals.toFixed(2)
    var question = `Monte uma dieta para ${objetivo} com um total de ${cals} calorias. Me passe as proteinas, carboidratos, gorduras em macronutrientes junto a calorias da dieta ao total. Lembre-se de passar a quantidade de alimento em Gramas apenas. Quero a resposta no seguinte formato sem mais nada digitado e sem observações,
    Café da manhã:
    - Alimentos

    Almoço:
    - Alimentos

    Café da tarde:
    - Alimentos

    Jantar:
    - Alimentos

    Ceia:
    - Alimentos

    Macronutrientes e calorias totais
    - Proteinas:
    - Carboidratos:
    - Gorduras:
    - Calorias:
    `

    fetch(`${API_BASE}/chat/completions`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'user', content: question}
        ],
        allow_fallback: true
      })
    }) 
    .then(response => response.json())
    .then(data => {
    loadingIndicator.style.display = 'none';
      // Aqui você pode extrair o valor do campo "content" da resposta
    const assistantMessage = data.choices[0].message.content;
    localStorage.setItem('assistantMessage', assistantMessage)
    window.location.href = 'dieta-sucess.html'
    })
    .catch(error => {
        console.error('Ocorreu um erro:', error);
        loadingIndicator.style.display = 'none';
    });
};

function proxInfo2() {
    if (!objInputs[0].checked && !objInputs[1].checked && !objInputs[2].checked && !objInputs[3].checked) {
        document.getElementById('dieta-error').textContent = "Por favor, preencha todas as informações."
    } else {
        document.querySelector('.content-dieta').style.display = 'none'
        const cals = calcDieta()
        sendDieta()
    }
}