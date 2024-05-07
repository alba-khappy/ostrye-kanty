// document.querySelector(".burger-menu").addEventListener("click", function() {
//     document.querySelector(".nav__list").classList.toggle("nav__list--show"); 
//   });

  document.querySelector(".burger-menu").addEventListener("click", function() {
    document.querySelector(".nav__list").classList.add("nav__list--show"); 
    // document.querySelector(".header__section").classList.add("header__section--burger-opened"); 
    // document.querySelector(".nav__list").style.opacity = '100%'; 
  });

document.querySelector(".button-close").addEventListener("click", function() {
    // document.querySelector(".nav__list").style.opacity = '0%';
    document.querySelector(".nav__list").classList.remove("nav__list--show"); 
  });


  /*acc*/

  $(function() {
	
    //BEGIN
    $(".accordion__title").on("click", function(e) {
  
      e.preventDefault();
      var $this = $(this);
  
      if (!$this.hasClass("accordion-active")) {
        $(".accordion__content").slideUp(400);
        $(".accordion__title").removeClass("accordion-active");
        $('.accordion__arrow').removeClass('accordion__rotate');
      }
  
      $this.toggleClass("accordion-active");
      $this.next().slideToggle();
      $('.accordion__arrow',this).toggleClass('accordion__rotate');
    });
    //END
    
  });