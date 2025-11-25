// Переключение между формами
const loginBox = document.getElementById('login-box');
const registerBox = document.getElementById('register-box');
const showRegister = document.getElementById('show-register');
const showLogin = document.getElementById('show-login');

showRegister.addEventListener('click', () => {
    loginBox.style.display = 'none';
    registerBox.style.display = 'block';
});

showLogin.addEventListener('click', () => {
    registerBox.style.display = 'none';
    loginBox.style.display = 'block';
});

// Простейшая логика для демонстрации
const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');

let users = [];

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    if (users.find(user => user.email === email)) {
        alert("Пользователь с таким Email уже существует!");
        return;
    }

    users.push({ name, email, password });
    alert("Регистрация успешна!");
    registerForm.reset();
    registerBox.style.display = 'none';
    loginBox.style.display = 'block';
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        alert(`Добро пожаловать, ${user.name}!`);
        loginForm.reset();
    } else {
        alert("Неверный Email или пароль!");
    }
});
