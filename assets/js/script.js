$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if(window.scrollY > 60){
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        $('section').each(function(){
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if(top > offset && top < offset + height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // Only intercept anchor clicks for links starting with '#' (internal navigation)
    $('a[href^="#"]').on('click', function(e){
        e.preventDefault();
        let target = $($(this).attr('href'));
        if(target.length){
            $('html, body').animate({
                scrollTop: target.offset().top,
            }, 500, 'linear');
        }
    });
});


// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["Games Programmer", "Tools Programmer", "Photographer", "Student"],
    loop: true,
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 800,
});
// <!-- typed js effect ends -->


// pre loader start
function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}
function fadeOut(){
    setTimeout(loader, 500);
}
window.onload = fadeOut;
// pre loader end


/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });
srtop.reveal('.home .image', { delay: 400 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 300 });
srtop.reveal('.about .content .tag', { delay: 400 });
srtop.reveal('.about .content p', { delay: 300 });
srtop.reveal('.about .content .box-container', { delay: 300 });
srtop.reveal('.about .content .resumebtn', { delay: 300 });

/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });
