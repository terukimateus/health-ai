import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.6.0/firebase-auth.js';

const firebaseConfig = {
    apiKey: "AIzaSyACFSOm54lU3wVxUxfijUMVyVjJo9BxjmQ",
    authDomain: "healthai-35642.firebaseapp.com",
    projectId: "healthai-35642",
    storageBucket: "healthai-35642.appspot.com",
    messagingSenderId: "785883558973",
    appId: "1:785883558973:web:56100e6435ed029bc46654",
    measurementId: "G-9KCY4FQ3YJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const header = document.getElementById('header');
const headerContainer = document.getElementById('header-container');
const headerLogadoScript = document.getElementById('header-logado-script');


const logoutButton = document.querySelector('.logout-btn');

function logout() {
    auth.signOut().then(() => {
        // Logout bem-sucedido
        console.log('Usuário deslogado');
        location.reload(); // Recarrega a página
    }).catch(error => {
        // Tratamento de erros
        console.error('Erro ao deslogar:', error);
    });
}

auth.onAuthStateChanged(user => {
    if (user) {
        // Usuário autenticado
        header.remove(); // Remove o header padrão do DOM
    } else {
        document.getElementById('header-logado').remove(); // Remove o header padrão do DOM
    }
});

logoutButton.addEventListener('click', logout); // Adiciona o evento de clique
