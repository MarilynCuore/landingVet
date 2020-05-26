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
}