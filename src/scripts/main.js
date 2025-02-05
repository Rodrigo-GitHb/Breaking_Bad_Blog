document.addEventListener('DOMContentLoaded', function(){

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function(){
        const posicaoAtual = window.scrollY;

        if(posicaoAtual < alturaHero) {
            addHidden();
        } else {
            removeHidden();
        }
    })

    function addHidden(){
        const header = document.querySelector('header')
        header.classList.add('header--is-hidden');
    }

    function removeHidden(){
        const header = document.querySelector('header');
        header.classList.remove('header--is-hidden');
    }

})

