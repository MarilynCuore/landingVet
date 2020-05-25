window.onload = () => {
    window.addEventListener('scroll', e => {
       
        const scroll = window.scrollY;
        console.log(scroll)
        if(scroll > 100) {
            document.querySelector('nav').classList.add("active")
        }else document.querySelector('nav').classList.remove('active')
    })
}