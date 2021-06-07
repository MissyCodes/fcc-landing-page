const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const line1 = document.querySelector('.line1');
    const line3 = document.querySelector('.line3');

    burger.addEventListener('click' , () => {
        if(line1.style.backgroundColor){
            line1.style.backgroundColor = ''
        } else {
            line1.style.backgroundColor = '#80a1d4'
        }

        if(line3.style.backgroundColor){
            line3.style.backgroundColor = ''
        } else {
            line3.style.backgroundColor = '#80a1d4'
        }

        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ''
            } else {
                link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s';
            }
        });

        burger.classList.toggle('toggle');
    });

}


navSlide();