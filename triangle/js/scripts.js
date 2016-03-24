$(document).ready(function() {
  $("form#triangle").submit(function(event) {
  var side1 = parseInt($("#side1").val());
  var side2 = parseInt($("#side2").val());
  var side3 = parseInt($("#side3").val());

  $(".not").hide();
  $(".equal").hide();
  $(".iso").hide();
  $(".scalene").hide();

  if ((side1 + side2) <= side3 || (side2 + side3) <= side1 || (side1 + side3) <= side2) {
    $(".not").show();
  } else if (side1 === side2 && side2 === side3) {
    $(".equal").show();
  } else if (side1 === side2 || side2 === side3 || side1 === side3) {
    $(".iso").show();
  } else if (side1 !== side2 && side2 !== side3 && side1 !== side3) {
    $(".scalene").show();
  } else {
    alert("What did you do???")
  }
  event.preventDefault();
  });
});
