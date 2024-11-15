let lessThan = '<img src="./icons/less-than-symbol.png" alt="previous icon">';
let greaterThan = '<img src="./icons/greater-than-symbol.png" alt="next icon">';
$('.testimonial .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    dots:false,
    nav: true,
    navText: [
        greaterThan,
        lessThan
    ],
    responsive:{
        0:{
            items:1,
        }
    }
});
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    dots:false,
    nav: true,
    navText: [
        greaterThan,
        lessThan
    ],
    responsive:{
        0:{
            items:1,
        },
        768:{
            items:3,
        },
        1000:{
            items:5,
            loop:false
        }
    }
});

// $(".owl-carousel").owlCarousel({
 
//     //Basic Speeds
//     slideSpeed : 200,
//     paginationSpeed : 800,
 
//     //Autoplay
//     autoPlay : false,
//     goToFirst : true,
//     goToFirstSpeed : 1000,
 
//     // Navigation
//     navigation : true,
//     navigationText : ["prev","next"],
//     pagination : false,
//     paginationNumbers: false,
 
//     // Responsive
//     responsive:{
//         0:{
//             items:1,
//         },
//         600:{
//             items:3,
//         },
//         1000:{
//             items:5,
//             loop:false
//         }
//     }
 
// })
