// CARRUSEL

const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})

// MODAL

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

document.addEventListener('DOMContentLoaded', function() {
  const myModal = document.getElementById('myModal')
  const myInput = document.getElementById('myInput')

  if (myModal && myInput) {
    myModal.addEventListener('shown.bs.modal', () => {
      myInput.focus()
    })
  }
});

document.addEventListener('DOMContentLoaded', function() {
  // Inicializar Scrollspy
  var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar-example2'
  });

  // Inicializar Popovers
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
  });
});