const mensagem = localStorage.getItem('assistantMessage')

function refreshItens() {
    const refeicoes = mensagem.split('\n\n');

    console.log(mensagem)

    function buscarRefeicaoPorNome(nome) {
        for (let i = 0; i < refeicoes.length; i++) {
            if (refeicoes[i].startsWith(nome)) {
                return refeicoes[i].substring(nome.length + 1); // +1 para remover o ':' também
            }
        }
        return null;
    }

    const refeicaoCafe = buscarRefeicaoPorNome('Café da manhã');
    
    if (refeicaoCafe !== null) {
        // Atualizar o conteúdo do elemento no HTML
        document.getElementById('cafe').textContent = refeicaoCafe;
    } else {
        console.log(`refeição não encontrada.`);
    }

    const refeicaoAlmoco = buscarRefeicaoPorNome('Almoço');
    
    if (refeicaoAlmoco !== null) {
        // Atualizar o conteúdo do elemento no HTML
        document.getElementById('almoco').textContent = refeicaoAlmoco;
    } else {
        console.log(`refeição não encontrada.`);
    }

    const refeicaoCafeTarde = buscarRefeicaoPorNome('Café da tarde');
    
    if (refeicaoCafeTarde !== null) {
        // Atualizar o conteúdo do elemento no HTML
        document.getElementById('cafe-tarde').textContent = refeicaoCafeTarde;
    } else {
        console.log(`refeição não encontrada.`);
    }
    const refeicaoJantar = buscarRefeicaoPorNome('Jantar');
    
    if (refeicaoJantar !== null) {
        // Atualizar o conteúdo do elemento no HTML
        document.getElementById('jantar').textContent = refeicaoJantar;
    } else {
        console.log(`refeição não encontrada.`);
    }
    const refeicaoCeia = buscarRefeicaoPorNome('Ceia');
    
    if (refeicaoCeia !== null) {
        // Atualizar o conteúdo do elemento no HTML
        document.getElementById('ceia').textContent = refeicaoCeia;
    } else {
        console.log(`refeição não encontrada.`);
    }

    const linhas = mensagem.split('\n');
    let caloriasTotais = null;
    for (let i = 0; i < linhas.length; i++) {
        if (linhas[i].startsWith("- Calorias:")) {
            caloriasTotais = parseFloat(linhas[i].match(/- Calorias: (\d+\d+)/)[1]);
            break;
        }
    }

    if (caloriasTotais !== null) {
        document.getElementById('calorias-info').textContent = `${caloriasTotais} calorias`
    } else {
        console.log("Calorias totais não encontradas.");
    }

    const userName = localStorage.getItem('nameInput')
    document.querySelector('.user-name').textContent = userName

    const userAge = localStorage.getItem('idadeInput')
    document.querySelector('.user-age').textContent = userAge

    const userGen = localStorage.getItem('generoInput')
    document.querySelector('.user-gen').textContent = userGen
}

refreshItens()