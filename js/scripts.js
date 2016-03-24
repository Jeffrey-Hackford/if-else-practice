$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age > 18) {
    $("#candidates").show();
  } else if (age === 18) {
    alert("Congrats! You can vote!");
    $("#candidates").show();
  } else {
    $("#under-18").show();
  }
});
