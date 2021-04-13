
// ---------LOADER-----------

$(document).ready(function(){
    $(this).scrollTop(0);
  });
  
  $(window).on("load", function(){
      $(".loader").fadeOut("slow");
      $('html, body').css({
        'position':'relative'});
    });
    
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }
  
    const images = document.querySelectorAll("[data-src]");

    function preloadImage (img) {
        const src = img.getAttribute ("data-src");
        if (!src) {
            return;
        }
    
        img.src = src;
    } 
    
    const imgOptions = {
        threshold: 0,
        rootMargin: "0px 0px 300px 0px"
    };
    
    const imgObserver = new IntersectionObserver((entries, imgObserver) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                preloadImage(entry.target);
                imgObserver.unobserve(entry.target);
            }
        })
            
    }, imgOptions);
    
    images.forEach(image => {
        imgObserver.observe(image);
    });

    
// ------- HAMBURGER --------


$(document).ready(function(){
	$('#nav-icon3').click(function(){
		$(this).toggleClass('toggle');
	});
});

var links = document.querySelectorAll('.menu a');
    var linksLength = links.length

    for(var i = 0; i < linksLength; i++) {
      links[i].addEventListener('click', function() {
        document.getElementById('toggle').checked = false;
      });
    }

    $(document).ready(function(){
	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
      $('.menu').click(function() {
       $('#nav-icon3').removeClass('open');
    });
	});
});



// --------OPEN MODAL GALLERY --------


function openModal() {
    document.getElementById("myModal").style.display = "block";
    document.getElementById("myModal").style.visibility="visible";
  }
  
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
    document.getElementById("myModal").style.visibility="hidden";
  }
  
  
  // SLIDE FOR PHOTOS IN MODAL
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }