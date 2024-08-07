// CARROUSEL

document.addEventListener('DOMContentLoaded', function () {
    const myCarouselElement = document.querySelector('#myCarousel')
    if (myCarouselElement) {
      const carousel = new bootstrap.Carousel(myCarouselElement, {
        interval: 2000,
        touch: false
      })
    }
  })

// Scrollspy setup

document.addEventListener('DOMContentLoaded', function () {
    var scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '#navbar-example'
    })
});

// MODAL
document.addEventListener('DOMContentLoaded', function() {
    const myModal = document.getElementById('myModal')
    const myInput = document.getElementById('myInput')

    if (myModal && myInput) {
        myModal.addEventListener('shown.bs.modal', () => {
            myInput.focus()
        })
    }
})


// VALIDACION DE LOS DATOS PARA EL FORMULARIO
document.addEventListener('DOMContentLoaded', function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })


//  POPOVERS

  document.addEventListener('DOMContentLoaded', function () {
    // Inicializar todos los popovers
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl)
    })
  
    // Cerrar popovers al hacer clic fuera
    document.body.addEventListener('click', function (e) {
      var target = e.target;
      if (!target.hasAttribute('data-bs-toggle') && !target.classList.contains('popover')) {
        popoverList.forEach(function (popover) {
          popover.hide()
        })
      }
    })
  })