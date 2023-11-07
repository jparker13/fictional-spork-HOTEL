//date and time JS
var dt = new Date();
document.getElementById('date-time').innerHTML=dt;

$("#email").blur(function () {
  let inputVal = $(this).val();
  let strSpace = " ";
  let spaceCount = inputVal.split(" ").length - 1;

  console.log(spaceCount);
  if (spaceCount === 0) {
    $(this).next().text("all good");
  } else if (spaceCount > 0) {
    $(this).next().text("no spaces allowed in email");
  }
});

$("#fname").blur(function () {
  let inputVal = $(this).val();
  let strSpace = " ";
  let spaceCount = inputVal.split(" ").length - 1;

  console.log(spaceCount);
  if (spaceCount === 0) {
    $(this).next().text("all good");
  } else if (spaceCount > 0) {
    $(this).next().text("no spaces allowed in fname");
  }
});

$("#lname").blur(function () {
  let inputVal = $(this).val();
  let strSpace = " ";
  let spaceCount = inputVal.split(" ").length - 1;

  console.log(spaceCount);
  if (spaceCount === 0) {
    $(this).next().text("all good");
  } else if (spaceCount > 0) {
    $(this).next().text("no spaces allowed in lname");
  }
});

$("#pwd").blur(function () {
  let inputVal = $(this).val();
  let strSpace = " ";
  let spaceCount = inputVal.split(" ").length - 1;

  console.log(spaceCount);
  if (spaceCount === 0) {
    $(this).next().text("all good");
  } else if (spaceCount > 0) {
    $(this).next().text("no spaces allowed in pwd");
  }
});

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
