/*COMEÇO DO SCRIPT DO CABEÇALHO*/ 
// Selecionando os elementos
const menuToggle = document.getElementById('menu-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');

// Função para alternar a visibilidade do menu
menuToggle.addEventListener('click', function(event) {
  event.preventDefault(); // Impede o comportamento padrão de navegação
  dropdownMenu.classList.toggle('show');
});

// Fechar o menu ao clicar fora
document.addEventListener('click', function(event) {
  if (!dropdownMenu.contains(event.target) && !menuToggle.contains(event.target)) {
    dropdownMenu.classList.remove('show');
  }
});

/*FIM DO SCRIPT DO CABEÇALHO*/