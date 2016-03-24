$(document).ready(function() {
  $("form#surveyAnswers").submit(function(event) {
  var age = parseInt($("#ageInput").val());
  var gender = $("#genderInput").val();
  console.log(age);

  if (age === 1 && gender === "male") {
    $(".output").removeClass();
    $("body").addClass(".young");
    $(".young").show();
  }

  if (age === 2 && gender === "male") {
    $(".output").removeClass();
    $("body").addClass(".young-adult-male");
    $(".young-adult-male").show();
  }

  if (age === 2 && gender === "female") {
    $(".output").removeClass();
    $("body").addClass(".young-adult-female");
    $(".young-adult-female").show();
  }

  if (age === 3) {
    $("#output").show();
  }

  if (gender === "male") {
    $("output").show();
    $("#gender").append(gender);
  }

  if (gender === "female") {
    $("output").show();
    $("#gender").append(gender);
  }
  event.preventDefault();

  });
});
