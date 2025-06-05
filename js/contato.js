document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form-contato");
  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const mensagem = document.getElementById("mensagem");
  const feedback = document.getElementById("mensagem-feedback");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nomeVal = nome.value.trim();
    const emailVal = email.value.trim();
    const mensagemVal = mensagem.value.trim();

    feedback.textContent = "";
    feedback.classList.remove("erro", "sucesso");

    if (!nomeVal || !emailVal || !mensagemVal) {
      feedback.textContent = "Por favor, preencha todos os campos.";
      feedback.classList.add("erro");
      return;
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(emailVal)) {
      feedback.textContent = "Por favor, insira um e-mail válido.";
      feedback.classList.add("erro");
      return;
    }

    feedback.textContent = "Mensagem enviada com sucesso!";
    feedback.classList.add("sucesso");

    setTimeout(() => {
      form.reset();
      feedback.textContent = "";
      feedback.classList.remove("sucesso");
    }, 1500);
  });
});
