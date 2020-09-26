// elem.onload = function() {
//     var elements = document.querySelectorAll('.btn_popular2');
//     alert('Спасибо');
//     anime({
//         targets: elements,
//         translateX: 270,
//         easing: 'easeInOutQuad'
//     });
// };

let animation = anime({
    // Цели
    targets: '.btn_popular3, .btn_popular2, .btn_popular1',
    translateX: -180,
    duration: 1000,
    // opacity: 100,
    delay: 1000,
    opacity: 100

});

let animation2 = anime({
    // Цели
    targets: '.icon_menu',
    opacity: 100,
    delay: 1000,
    easing: 'linear'
});

$(document).ready(function(){
    $("#carousel1").owlCarousel({

        margin:200,
        // nav:true,
        autoplay:true,
        autoplayTimeout:5000,
        stagePadding: 400,
        center: true,
        loop:true,
        // autoWidth:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
});

