//validate the inputs
const inputs = document.querySelectorAll("form .field input");

//listener for the inputs
inputs.forEach(input => {
  input.addEventListener("blur", validateInput);
  input.addEventListener("input", validateInput);
});

function validateInput(e) {
  //array of states
  const states = ["valid", "not-valid"];

  let classes;

  if (e.target.value.length === 0) {
    classes = states[1];
  } else {
    classes = states[0];
  }
  e.target.nextElementSibling.classList.remove(...states);
  e.target.nextElementSibling.classList.add(classes);

  //generate or remove the ALert
  if (classes === states[1]) {
    //in the case that ths alert dosen't exist , add an alert
    if (e.target.parentElement.nextElementSibling.classList[0] !== "alert") {
      const errorDiv = document.createElement("div");
      errorDiv.appendChild(document.createTextNode("This field is mandatory"));
      errorDiv.classList.add("alert");

      // inject the error inside the dom, before the next field
      e.target.parentElement.parentElement.insertBefore(
        errorDiv,
        e.target.parentElement.nextElementSibling
      );
    }
  } else {
    if (e.target.parentElement.nextElementSibling.classList[0] === "alert") {
      //only run when the alert exists
      e.target.parentElement.nextElementSibling.remove();
    }
  }
}

// Show or Hide the password

const togglePassword = document.querySelector(".toggle-password");
togglePassword.addEventListener("click", e => {
  const passwordInput = document.querySelector("#password");
  // check if the show class exists on the span element
  //remove a show class
  if (e.target.classList.contains("show")) {
    e.target.classList.remove("show");
    // change the text for the span to Hide
    e.target.textContent = "SHOW";
    //change the type of the input to password
    passwordInput.type = "password";
  } else {
    //add a show class
    e.target.classList.add("show");
    // change the text for the span to show
    e.target.textContent = "HIDE";
    //change the type of the input to text
    passwordInput.type = "text";
  }
});
