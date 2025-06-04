document.addEventListener('DOMContentLoaded', () => {
  const itensFaq = document.querySelectorAll('.item-faq');

  itensFaq.forEach(item => {
    const botao = item.querySelector('.pergunta-faq');

    botao.addEventListener('click', () => {
      const aberto = item.classList.contains('aberto');

      itensFaq.forEach(i => i.classList.remove('aberto'));

      if (!aberto) {
        item.classList.add('aberto');
      }
    });
  });
});