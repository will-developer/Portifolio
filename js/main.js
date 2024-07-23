/* ========== Redimencionar a Navegação ao Scrolar ========= */
const navbar = document.querySelector('.navbar');
// quando o scroll passar de 20vw, será adicionado a classe 'sticky' na navbar no html
window.onscroll = () => {
  this.scrollY > 20
    ? navbar.classList.add('sticky')
    : navbar.classList.remove('sticky');
};

// filtro do portifolio
const FilterContainer = document.querySelector('.portfolio-filter');
const filterBtns = FilterContainer.children;
const PortfolioItems = document.querySelectorAll('.portfolio-item');
for (let i = 0; i < filterBtns.length; i++) {
  filterBtns[i].addEventListener('click', function () {
    FilterContainer.querySelector('.active').classList.remove('active');
    this.classList.add('active');
    const filterValue = this.getAttribute('data-filter');
    for (let k = 0; k < PortfolioItems.length; k++) {
      if (filterValue === PortfolioItems[k].getAttribute('data-category')) {
        PortfolioItems[k].classList.remove('hide');
        PortfolioItems[k].classList.add('show');
      } else {
        PortfolioItems[k].classList.remove('show');
        PortfolioItems[k].classList.add('hide');
      }
      if (filterValue === 'all') {
        PortfolioItems[k].classList.remove('hide');
        PortfolioItems[k].classList.add('show');
      }
    }
  });
}
