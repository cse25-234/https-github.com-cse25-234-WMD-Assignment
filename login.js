const form = document.getElementById('registrationForm');

form.addEventListener('submit', (e) => {
  let isValid = true;


  document.querySelectorAll('span').forEach(span => span.innerText = "");


  const username = document.getElementById('username').value.trim();
  if (username.length < 3) {
    document.getElementById('usernameError').innerText = "Username must be at least 3 characters.";
    isValid = false;
  }

  const password = document.getElementById('password').value;
  if (password.length < 6) {
    document.getElementById('passwordError').innerText = "Password must be at least 6 characters.";
    isValid = false;
  }


  if (!isValid) {
    e.preventDefault(); 
  } else {
	window.open("applications.html", "_self");
    alert("Logged in successfully!");

  }
});