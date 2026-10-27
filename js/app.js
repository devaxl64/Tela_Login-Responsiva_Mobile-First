const form = document.getElementById('loginForm');
const password = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');
const feedback = document.getElementById('feedback');

// Mostrar e ocultar a senha sem interferir no formulário.
togglePassword.addEventListener('click', () => {
  const mostrar = password.type === 'password';
  password.type = mostrar ? 'text' : 'password';
  togglePassword.setAttribute('aria-pressed', String(mostrar));
  togglePassword.setAttribute('aria-label', mostrar ? 'Ocultar senha' : 'Mostrar senha');
  togglePassword.title = mostrar ? 'Ocultar senha' : 'Mostrar senha';
});

// Projeto de front-end: valida os campos, mas não envia credenciais para servidor.
form.addEventListener('submit', (event) => {
  event.preventDefault();
  feedback.textContent = 'Campos validados. Esta interface ainda não possui autenticação conectada.';
  feedback.hidden = false;
});
