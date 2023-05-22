const botao = document.querySelector("#btnEnter");
    
botao.addEventListener("click", function(event) {
  event.preventDefault(); // Impede o envio do formulário

  const inputUser = document.querySelector("input[type='text']");
  const inputPassword = document.querySelector("input[type='password']");

  if (inputUser.value.length > 4 && inputPassword.value.length > 4) {
    // Redirecionar para outra página
    window.location.href = "home_page.html";
  } else {
    alert("Erro: usuário e senha devem ter mais de 4 caracteres!");
  }
});