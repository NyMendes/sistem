
const body = document.querySelector('body'),
  nav = document.querySelector('nav'),
  modeToggle = document.querySelector('.dark-light')

modeToggle.addEventListener('click', () => {
  modeToggle.classList.toggle('active')
  body.classList.toggle('dark')
})


document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMessage = document.getElementById("error-message");

  // Usuário e senha padrão
  const defaultUsername = "admin";
  const defaultPassword = "admin";

  // Verifica as credenciais
  if (username === defaultUsername && password === defaultPassword) {
      // Redireciona para a página de menu
      window.location.href = "menu.html";
  } else {
      errorMessage.textContent = "Invalid username or password.";
      errorMessage.style.display = "block";
  }
});


