

  $('#myBtn1').click(function(){
    $('#myTitle').addClass("fadeit");
    setTimeout(function(){
         $('#myTitle').removeClass("fadeit");
       }, 1000); //1000 is the time it takes in milli seconds for the animation to run once.
});
$('#myBtn2').click(function(){
    $('#myTitle').addClass("fadeit");
    setTimeout(function(){
         $('#myTitle').removeClass("fadeit");
       }, 1000); //1000 is the time it takes in milli seconds for the animation to run once.
});

$('#myBtn3').click(function(){
    $('#myTitle').addClass("fadeit");
    setTimeout(function(){
         $('#myTitle').removeClass("fadeit");
       }, 1000); //1000 is the time it takes in milli seconds for the animation to run once.
});

$('#myBtn4').click(function(){
    $('#myTitle').addClass("fadeit");
    setTimeout(function(){
         $('#myTitle').removeClass("fadeit");
       }, 1000); //1000 is the time it takes in milli seconds for the animation to run once.
});

$('#myBtn8').click(function(){
  $('#myTitle').addClass("fadeit");
  setTimeout(function(){
       $('#myTitle').removeClass("fadeit");
     }, 1000); //1000 is the time it takes in milli seconds for the animation to run once.
});


 function myStreet() {
   document.getElementById("dtitle").innerHTML=""; 
   document.getElementById("description").innerHTML="" ;
 };

 function myTravel() {
   document.getElementById("dtitle").innerHTML=""; 
   document.getElementById("description").innerHTML="" ;
   
 };

 function myAnalog() {
   document.getElementById("dtitle").innerHTML=""; 
   document.getElementById("description").innerHTML=""; 
   
 };

 function myDocument() {
   document.getElementById("dtitle").innerHTML="CHOICE"; 
   document.getElementById("description").innerHTML="On October 22nd 2020 Poland's top court has ruled that abortions in cases of foetal defects are unconstitutional. Poland's abortion laws were already among the strictest in Europe but the Constitutional Tribunal's ruling will mean an almost total ban. Across the country, thousands have taken to the streets in protest of ruling by the country’s Constitutional Court. The big Polish community, around the world, spoke up to support women's right to choose. These photos were taken during the protest in Reykjavik, Iceland."; 
   
   
 };

 function myAll() {
   document.getElementById("dtitle").innerHTML=" "; 
   document.getElementById("description").innerHTML=" " ;
   };
