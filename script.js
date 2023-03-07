$(document).ready(function () {
  $(".container form").on("submit", (e) => {
    e.preventDefault();
    let firstNameValue = $("input[name^='fname']").val();
    let lastNameValue = $("input[name^='lname']").val();
    let emailValue = $("input[type= email]").val();
    let passwordValue = $("input[type= password]").val();

    if (firstNameValue.length === 0) {
      $(".bloc_input.firstName").addClass("error_active");
    } else {
      $(".bloc_input.firstName").removeClass("error_active");
    }

    if (lastNameValue.length === 0) {
      $(".bloc_input.lastName").addClass("error_active");
    } else {
      $(".bloc_input.lastName").removeClass("error_active");
    }

    if (validateEmail(emailValue) === 0) {
      $(".bloc_input.email").addClass("error_active");
      $(".bloc_input.email .text_error").html("Email cannot be empty");
    } else if (validateEmail(emailValue)) {
      $(".bloc_input.email").removeClass("error_active");
      $(".bloc_input.email .text_error").html("");
    } else {
      $(".bloc_input.email").addClass("error_active");
      $(".bloc_input.email .text_error").html("Look like this not an email");
    }

    if (passwordValue.length === 0) {
      $(".bloc_input.password").addClass("error_active");
    } else {
      $(".bloc_input.password").removeClass("error_active");
    }
  });

  function validateEmail(email) {
    var validRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email === "") {
      return 0;
    } else {
      return validRegex.test(String(email).toLowerCase());
    }
  }
});
