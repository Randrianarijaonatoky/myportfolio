document.querySelector('DOMContentLoaded', () => {
    console.log('ok');
    let elementToAnimate = document.querySelectorAll('.animate-on-scroll');
    console.log(elementToAnimate);

    const observe = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('visible')
            }else {
                entry.target.classList.remove('visible');
            }
        });
    }, {threshold: 0.2}) //20% de visibilité  pour déclencher l'animation

    elementToAnimate.forEach(element => {
        observe.observe(element);
    })
});
