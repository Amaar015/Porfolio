$(document).ready(function(){

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Html ,Css & js", "Java Developer","Web Designer","Web Developer", "PHP , MYSQL"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["DSA", "Programmer", "Web Designer", "Web Developer", "PHP & MYSQL"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

});

         // owl carousel script
         $('.carousel').owlCarousel({
            margin: 20,
            loop: true,
            autoplay: true,
            autoplayTimeOut: 2000,
            autoplayHoverPause: true,
            responsive: {
                0:{
                    items: 1,
                    nav: false
                },
                600:{
                    items: 2,
                    nav: false
                },
                1000:{
                    items: 3,
                    nav: false
                }
            }
        });
    
                // scroll-up button show/hide script
                $(document).ready(function(){
                    $(window).scroll(function(){
                        // sticky navbar on scroll script
                        
                        // scroll-up button show/hide script
                        if(this.scrollY > 500){
                            $('.scroll-up-btn').addClass("show");
                        }else{
                            $('.scroll-up-btn').removeClass("show");
                        }
                    });
                
                });

                $('.scroll-up-btn').click(function(){
                    $('html').animate({scrollTop: 0});
                    // removing smooth scroll on slide-up button click
                    $('html').css("scrollBehavior", "auto");
                });
            
    // function Load(){
    //     var box1=document.getElementById("box-1");
    //     var box2=document.getElementById("box-2");

    //    box1.style.display("inline-block");
    // }