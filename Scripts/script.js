//date and time JS
var dt = new Date();
document.getElementById('date-time').innerHTML=dt;

function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  $(function() {
    console.log( "ready!" );
  
  //reveal icon 
  $(".reveal").on('click',function() {
    let $pwd = $(".pwd");
    
    if ($pwd.attr('type') === 'password') {
        $pwd.attr('type', 'text');
       $(this).children('i').addClass('bi-eye-slash-fill').removeClass('bi-eye-fill');
    } else {
        $pwd.attr('type', 'password');
     $(this).children('i').removeClass('bi-eye-slash-fill').addClass('bi-eye-fill');
    }
});
  
});