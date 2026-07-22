
const select = (el, all = false) => {
  el = el.trim()
  if (all) {
    return [...document.querySelectorAll(el)]
  } else {
    return document.querySelector(el)
  }
}

const on = (type, el, listener, all = false) => {
  let selectEl = select(el, all)
  if (selectEl) {
    if (all) {
      selectEl.forEach(e => e.addEventListener(type, listener))
    } else {
      selectEl.addEventListener(type, listener)
    }
  }
}

export const initializePortfolioAssets = () => {
    
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer && typeof window.Isotope !== 'undefined') {
      let portfolioIsotope = new window.Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        
        portfolioIsotope.on('arrangeComplete', function() {
          if (typeof window.AOS !== 'undefined') window.AOS.refresh();
        });
      }, true);
    }

    if (typeof window.GLightbox !== 'undefined') {
      const portfolioLightbox = window.GLightbox({
        selector: '.portfolio-lightbox'
      });
    }

    if (typeof window.Swiper !== 'undefined') {
      new window.Swiper('.portfolio-details-slider', {
        speed: 400,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        }
      });
    }
};