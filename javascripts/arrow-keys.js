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