document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'user' && password === 'password123') {
        alert('Авторизация успешна');
        window.location.href = 'index.html';
    } else {
        alert('Неверный логин или пароль');
    }
});