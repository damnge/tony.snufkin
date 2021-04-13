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