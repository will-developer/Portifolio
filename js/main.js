/* ========== Redimencionar a Navegação ao Scrolar ========= */
var navbar = document.querySelector('.navbar');
// quando o scroll passar de 20vw, será adicionado a classe 'sticky' na navbar no html
window.onscroll = () => {
  this.scrollY > 20
    ? navbar.classList.add('sticky')
    : navbar.classList.remove('sticky');
};
