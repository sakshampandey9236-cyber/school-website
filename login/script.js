const container = document.getElementById('container');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');

registerLink.onclick = () => {
    container.classList.add('active');
};

loginLink.onclick = () => {
    container.classList.remove('active');
};