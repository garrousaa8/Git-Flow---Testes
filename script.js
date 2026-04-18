document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('cadastro');
  const nome = document.getElementById('nome');
  const email = document.getElementById('email');
  const senha = document.getElementById('senha');
  const confirmar = document.getElementById('confirmar');

  function mostrarErro(idEntrada, mensagem) {
    const divErro = document.getElementById(`error-${idEntrada}`);
    if (divErro) {
      divErro.textContent = mensagem;
      divErro.classList.add("show");
    }
  }

  function limparErro(idEntrada) {
    const divErro = document.getElementById(`error-${idEntrada}`);
    if (divErro) {
      divErro.textContent = "";
      divErro.classList.remove("show");
    }
  }

  function alternarSenha() {
    const icone = document.getElementById("iconeSenha");
    if (senha.type === "password") {
      senha.type = "text";
      icone.textContent = "visibility_off";
    } else {
      senha.type = "password";
      icone.textContent = "visibility";
    }
  }
  window.alternarSenha = alternarSenha;

  function alternarConfirmar() {
    const icone = document.getElementById("iconeConfirmar");
    if (confirmar.type === "password") {
      confirmar.type = "text";
      icone.textContent = "visibility_off";
    } else {
      confirmar.type = "password";
      icone.textContent = "visibility";
    }
  }
  window.alternarConfirmar = alternarConfirmar;

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    let valido = true;

    limparErro("nome");
    limparErro("email");
    limparErro("senha");
    limparErro("confirmar");

    if (nome.value.trim() === '') {
      mostrarErro("nome", "Nome é obrigatório.");
      valido = false;
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email.value)) {
      mostrarErro("email", "Email inválido.");
      valido = false;
    }

    if (senha.value.length < 6) {
      mostrarErro("senha", "Senha deve ter pelo menos 6 caracteres.");
      valido = false;
    }

    if (confirmar.value === '') {
      mostrarErro("confirmar", "Senha deve ter pelo menos 6 caracteres.");
      valido = false;
    } else if (confirmar.value !== senha.value) {
      mostrarErro("confirmar", "As senhas não coincidem.");
      valido = false;
    }

    if (valido) {
      alert("Cadastro realizado com sucesso!");
    }
  });
});
