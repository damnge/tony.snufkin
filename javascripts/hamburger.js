
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

