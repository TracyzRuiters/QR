// Smooth Scrolling Effect
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      });
  });
});

// Contact Form Validation
document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();

  let name = document.querySelector("input[type='text']").value.trim();
  let email = document.querySelector("input[type='email']").value.trim();
  let message = document.querySelector("textarea").value.trim();

  if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
  } else if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
  } else {
      alert("Message sent successfully!");
      this.reset(); // Reset the form after submission
  }
});

// Email Validation Function
function validateEmail(email) {
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function updatemenu() {
  if (document.getElementById('responsive-menu').checked == true) {
    document.getElementById('menu').style.borderBottomRightRadius = '0';
    document.getElementById('menu').style.borderBottomLeftRadius = '0';
  }else{
    document.getElementById('menu').style.borderRadius = '50px';
  }
}


