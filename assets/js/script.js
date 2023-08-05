$(document).ready(function() {
  $("#calculate").click(function() {
    // Clear previous error messages and styles
    resetErrors();

    const day = $("#date").val().trim();
    const month = $("#month").val().trim();
    const year = $("#year").val().trim();

    // Check if any input fields are empty or invalid
    if (day === "") {
      $("#errorDate").html("This field is required");
      $("#labelDate").addClass("error-label");
      $("#date").addClass("error-input");
      return;
    } else if (isNaN(day) || day <= 0 || day > 31) {
      $("#errorDate").html("Must be a valid day");
      $("#labelDate").addClass("error-label");
      $("#date").addClass("error-input");
      return;
    }

    if (month === "") {
      $("#errorMonth").html("This field is required");
      $("#labelMonth").addClass("error-label");
      $("#month").addClass("error-input");
      return;
    } else if (isNaN(month) || month <= 0 || month > 12) {
      $("#errorMonth").html("Must be a valid month");
      $("#labelMonth").addClass("error-label");
      $("#month").addClass("error-input");
      return;
    }

    if (year === "") {
      $("#errorYear").html("This field is required");
      $("#labelYear").addClass("error-label");
      $("#year").addClass("error-input");
      return;
    } else if (isNaN(year) || year <= 0) {
      $("#errorYear").html("Must be in the past");
      $("#labelYear").addClass("error-label");
      $("#year").addClass("error-input");
      return;
    }

    // Check if the entered date is a valid date
    const dob = new Date(year, month - 1, day);
    if (isNaN(dob.getTime()) || dob > new Date()) {

      $("#errorYear").html("Must be a valid past");
      $("#labelYear").addClass("error-label");
      $("#year").addClass("error-input");
      return;
    }

    // Clear errors and styles
    resetErrors();

    const now = new Date();
    let ageInMilliseconds = now - dob;

    // Calculate the age in years, months, and days
    let age = {};
    age.years = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
    ageInMilliseconds -= age.years * (1000 * 60 * 60 * 24 * 365.25);
    age.months = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 30.4375));
    ageInMilliseconds -= age.months * (1000 * 60 * 60 * 24 * 30.4375);
    age.days = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));

    // Update the result in the <p> elements
    $("#resultYears").html(age.years);
    $("#resultMonths").html(age.months);
    $("#resultDays").html(age.days);
  });

  // Function to clear errors and styles
  function resetErrors() {
    $(".error").html("");
    $(".error-label").removeClass("error-label");
    $(".error-input").removeClass("error-input");
  }
});
