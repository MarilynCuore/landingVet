window.onload = () => {
    window.addEventListener('scroll', e => {
       
        const scroll = window.scrollY;
        const logo = document.querySelector('img.logo')
        if(scroll > 100) {
            document.querySelector('nav').classList.add("active")
            logo.src = "./assets/red.png"
        }else {
            document.querySelector('nav').classList.remove('active')
            logo.src = "./assets/white.png"
        }
    })

    var options = {
        loop: true,
        // If we need pagination
        pagination: {
        el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 5000,
          },
    }
    var swiper = new Swiper('.swiper-container', options);
}