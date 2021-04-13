
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

  document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
        plusSlides(-1);
            break;
        case 39:
        plusSlides(1);
        break;    
      };
      }
  
      $(document).ready(function(){
        $("#myBtn3").click(function(){
          $(".analog-drop").slideToggle(500);
        });
      });
      
      $(document).ready(function(){
        $("#myBtn6").click(function(){
          $(".analog-drop").slideToggle(500);
        });
      });
      


      function validate() {
      
        if( document.myForm.name.value == "" ) {
           alert( "Please, provide your name!" );
           document.myForm.name.focus() ;
           return false;
        }
        if( document.myForm.Email.value == "" ) {
           alert( "Please, provide your e-mail!" );
           document.myForm.Email.focus() ;
           return false;
        }
          
     }
    
     function validateEmail() {
           var emailID = document.myForm.mail.value;
           atpos = emailID.indexOf("@");
           dotpos = emailID.lastIndexOf(".");
           
           if (atpos < 1 || ( dotpos - atpos < 2 )) {
              alert("Please, enter correct e-mail!")
              document.myForm.mail.focus() ;
              return false;
           }
           return( true );
        }
    
    
    
    window.addEventListener("DOMContentLoaded", function() {
    
      // get the form elements defined in your form HTML above
      
      var form = document.getElementById("my-form");
      // var button = document.getElementById("my-form-button");
      var status = document.getElementById("status");
    
      // Success and Error functions for after the form is submitted
      
      function success() {
        form.reset();
      //   button.style = "display: none ";
      status.classList.add('correct');
        status.innerHTML = "Thanks! I will write back! ";
      }
    
      function error() {
      status.classList.add('wrong');
        status.innerHTML = "Oops! There was a problem!";
      }
    
      // handle the form submission event
    
      form.addEventListener("submit", function(ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
      });
    });
    
    // helper function for sending an AJAX request
    
    function ajax(method, url, data, success, error) {
      var xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          success(xhr.response, xhr.responseType);
        } else {
          error(xhr.status, xhr.response, xhr.responseType);
        }
      };
      xhr.send(data);
    }
    
    
    
            
    $(document).ready(function() {
        
        // Add class to mailto link
        // Needed to separate the disabling of the default action AND copy email to clipboard
        $('a[href^=mailto]').addClass('mailto-link');
    
        var mailto = $('.mailto-link');
        var messageCopy = 'Click to copy e-mail';
        var messageSuccess = 'E-mail copied to clipboard';
        
        mailto.append('<span class="mailto-message"></span>');
        $('.mailto-message').append(messageCopy);
        
        // Disable opening your email client. yuk.
        $('a[href^=mailto]').click(function() {
            return false; 
        })
        
        // On click, get href and remove 'mailto:' from value
        // Store email address in a variable.
        mailto.click(function() {
            var href = $(this).attr('href');
            var email = href.replace('mailto:', '');
            copyToClipboard(email);
            $('.mailto-message').empty().append(messageSuccess);
            setTimeout(function() {
                $('.mailto-message').empty().append(messageCopy);}, 2000); 
        });
        
    });
    
    // Grabbed this from Stack Overflow.
    // Copies the email variable to clipboard
    function copyToClipboard(text) {
        var dummy = document.createElement("input");
        document.body.appendChild(dummy);
        dummy.setAttribute('value', text);
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);
    }
    
    