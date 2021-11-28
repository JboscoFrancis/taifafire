const sections = document.querySelectorAll('section');
const navLink = document.querySelectorAll('#navbarNav a');

$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.site-header').addClass('header-scrolled');
} else {
    $('.site-header').removeClass('header-scrolled');
}
});


window.addEventListener('scroll', ()=>{
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if(pageYOffset >= (sectionTop - sectionHeight/2.5)){
            
            current = section.getAttribute('id');
        }
    })

    navLink.forEach( a => {
        a.classList.remove('active');
        if(a.classList.contains(current)){
            a.classList.add('active')
        }
    })
})

// smooth scroll to navigation link
$('#navbarNav li a').on('click', function(e){
    if(this.hash !== ''){
        e.preventDefault();
        const hash = this.hash;
        console.log(hash)
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 600);
    }
})
