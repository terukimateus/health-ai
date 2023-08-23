// Criação da div principal com a classe "header"
const headerDiv = document.createElement("div");
headerDiv.id = "header-logado";
headerDiv.className = "header";

// Criação da div do logo com a classe "logo"
const logoDiv = document.createElement("div");
logoDiv.className = "logo";

const aH1 = document.createElement('a')
aH1.href = 'index.html'
logoDiv.appendChild(aH1)


// Criação do elemento h1 e definição do seu texto
const h1Element = document.createElement("h1");
h1Element.textContent = "Health.ai";

// Anexar o elemento h1 à div do logo
aH1.appendChild(h1Element);

// Criação da div dos botões do header com a classe "header-btn"
const headerBtnDiv = document.createElement("div");
headerBtnDiv.className = "header-btn";

// Criação do link para a página do usuário com o botão correspondente
const userPageLink = document.createElement("a");
userPageLink.href = "user.html";
const userPageButton = document.createElement("button");
userPageButton.className = "user-page";
const userIcon = document.createElement("i");
userIcon.className = "fa-solid fa-user";
userPageButton.appendChild(userIcon);
userPageLink.appendChild(userPageButton);

// Criação do botão de sair
const logoutButton = document.createElement("button");
logoutButton.className = "logout-btn";
logoutButton.textContent = "Sair";

// Anexar os elementos à div dos botões do header
headerBtnDiv.appendChild(userPageLink);
headerBtnDiv.appendChild(logoutButton);

// Anexar a div do logo e a div dos botões do header à div principal do header
headerDiv.appendChild(logoDiv);
headerDiv.appendChild(headerBtnDiv);

// Anexar a div principal do header ao body do documento
document.body.appendChild(headerDiv);
