/* ========== Redimencionar a Navegação ao Scrolar ========= */
const navbar = document.querySelector('.navbar');
// quando o scroll passar de 20vw, será adicionado a classe 'sticky' na navbar no html
window.onscroll = () => {
  this.scrollY > 20
    ? navbar.classList.add('sticky')
    : navbar.classList.remove('sticky');
};

// nav-toggle
const navMenu = document.querySelector('.menu');
const navToggle = document.querySelector('.menu-btn');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}
//fechar menu quando o link é clicado
const navLink = document.querySelectorAll('.nav-link');
function linkAction() {
  const navMenu = document.querySelector('.menu');
  navMenu.classList.remove('active');
}

navLink.forEach((n) => n.addEventListener('click', linkAction));

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

// Definir as cores principal do css
const colors = ['#00a78e', '#3357ff', '#CFD11A', '#000'];
let currentIndex = 0;

function changeBackgroundColor() {
  const isBlack = colors[currentIndex] === '#000';
  document.documentElement.style.setProperty(
    '--principal',
    colors[currentIndex],
  );
  document.documentElement.style.setProperty(
    '--text-color',
    isBlack ? '#fff' : colors[currentIndex],
  );

  currentIndex = (currentIndex + 1) % colors.length;
}

changeBackgroundColor();
setInterval(changeBackgroundColor, 10000);
