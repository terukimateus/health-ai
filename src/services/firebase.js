import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.0/firebase-auth.js';

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

const signupButton = document.getElementById('signin-submit');

signupButton.addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            // Usuário criado com sucesso
            const user = userCredential.user;
            console.log('Usuário criado:', user);
            window.location.href = 'login.html'
        })
        .catch(error => {

          const span = document.querySelector('.signin-error')
          const errorCode = error.code;
          const errorMessage = error.message;

            if (errorCode === 'auth/email-already-in-use') {
              span.textContent = 'O endereço de e-mail já está em uso.'
          } else if (errorCode === 'auth/invalid-email') {
            span.textContent = 'O endereço de e-mail é inválido.'
          } else if (errorCode === 'auth/weak-password') {
            span.textContent = 'Sua senha é muito fraca.'
          } else {
              span.textContent = 'Ocorreu um erro ao criar o usuário:', errorMessage;
          }
        });
});