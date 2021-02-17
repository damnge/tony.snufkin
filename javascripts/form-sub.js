
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

