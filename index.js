let menuIcon = document.getElementById("menu-icon");
let menu = document.getElementById("menu");
let closeNav = document.getElementById("close-nav");


menuIcon.addEventListener("click", () => {
  menu.classList.add("nav-show");
  menuIcon.style.display="none"
});

document.addEventListener("scroll", () => {
  menu.classList.remove("nav-show");
  menuIcon.style.display="block"
});

closeNav.addEventListener("click", () => {
    menu.classList.remove("nav-show");
    menuIcon.style.display="block"
  });

document.getElementById("openPopupBtn").addEventListener("click", function () {
  document.getElementById("popupForm").style.display = "flex";
});

document.querySelector(".closeBtn").addEventListener("click", function () {
  document.getElementById("popupForm").style.display = "none";
});

document.getElementById("sendBtn").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const fullname = document.getElementById("fullname").value;
  const mobile = document.getElementById("mobile").value;
  const country = document.getElementById("country").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // Add your sending email logic here
  console.log(
    `Email: ${email}, Fullname: ${fullname}, Mobile No: ${mobile}, Country: ${country}, Subject: ${subject}, Message: ${message}`
  );

  alert("Message sent!");
  document.getElementById("popupForm").style.display = "none";
});
