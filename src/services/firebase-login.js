import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js';
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.0/firebase-auth.js';

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


const loginButton = document.getElementById('login-submit');

loginButton.addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            // Login bem-sucedido
            const user = userCredential.user;
            console.log('Usuário logado:', user);
            window.location.href = 'index.html'
        }) 
        .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const span = document.querySelector('.login-error')
            
            if (errorCode === 'auth/wrong-password') {
                span.textContent = 'A senha está incorreta.'
            } else if (errorCode === 'auth/user-not-found') {
                span.textContent = 'Usuário não encontrado.'
            } else if (errorCode === 'auth/invalid-email') {
                span.textContent = 'Endereço de e-mail não encontrado.'
            } else {
                span.textContent = 'Ocorreu um erro ao fazer login:', errorMessage;
            }
        });
});