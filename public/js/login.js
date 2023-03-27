// /* jQuery */
// $(document).ready(function() {
//   $("form").submit(function(event) {
//     event.preventDefault();
//     // Declaration linking to HTML input
//     const email = $('input[id="email"]').val();
//     const password = $('input[id="password"]').val();
//     // Check if email and password are entered
//     if (!email || !password) {
//       alert("You haven't entered your login details. \nTo gain access to the application, please enter your login information!");
//       // Check if email and password are corrected
//     } else if (email === "ptpofficialxd@gmail.com" && password === "aekkung753951") {
//       alert("You have successfully logged in. Welcome to 1G Food Application!");
//       location.href = "home";
//     } else {
//       alert("The Email or password you entered is incorrect. Please try again!");
//     }
//   });
// });


/* JavaScript */
// Add event listerner
// document.addEventListener("DOMContentLoaded", function () {
//   document.querySelector("form").addEventListener("submit", function (event) {
//     event.preventDefault();
//     // Declaration linking to HTML input
//     const email = document.querySelector('input[id="email"]').value;
//     const password = document.querySelector('input[id="password"]').value;
//     // Check if email and password are entered
//     if (!email || !password) {
//       alert("You haven't entered your login details. \nTo gain access to the application, please enter your login information!");
//       // Check if email and password are corrected
//     } else if (email === "ptpofficialxd@gmail.com" && password === "aekkung753951") {
//       alert("You have successfully logged in. Welcome to 1G Food Application!");
//       location.href = 'home.html';
//     } else {
//       alert("The Email or password you entered is incorrect. Please try again!");
//     }
//   });
// });