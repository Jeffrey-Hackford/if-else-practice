$(document).ready(function() {
  $("form#surveyAnswers").submit(function(event) {
  var age = parseInt($("#ageInput").val());
  var gender = $("#genderInput").val();
  console.log(age);

  if (age === 1) {
    $("#output").show();
    $("#age").append(age);
  }

  if (age === 2) {
    $("#output").show();
    $("#age").append(age);
  }

  if (age === 3) {
    $("#output").show();
    $("#age").append(age);
  }

  if (age === 4) {
    $("#output").show();
    $("#age").append(age);
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









//   $("#output").show();
//   $("#age").text(age);
//   $("#gender").text(gender);
//
//   if (age === 1)  {
//     $("#young").show();
//   }
//
//   event.preventDefault();
//   });
// });
