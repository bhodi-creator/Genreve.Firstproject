const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


// document.getElementById("contactForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent the form from submitting the traditional way

//     // Collect form data
//     var formData = new FormData(this);

//     // Convert FormData to a plain object
//     var formObject = {};
//     formData.forEach((value, key) => { formObject[key] = value });

//     // Create a JSON string from the object
//     var jsonString = JSON.stringify(formObject);

//     // Send the data using Fetch API
//     fetch('send_mail.php', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: jsonString
//     })
//     .then(response => response.text())
//     .then(data => {
//         alert(data); // Show response message
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         alert('Failed to send email.');
//     });
// });



//   var CLIENT_ID = 'https://455836655720-a0qvmpjif4vithg8vhhmcl1elms4nre7.apps.googleusercontent.com';
//   var API_KEY = 'AIzaSyA1Kt-DiaHwhJiekM5j2sYXweUJ30R2oN4';
//   var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"];
//   var SCOPES = 'https://www.googleapis.com/auth/gmail.send';

//   function handleClientLoad() {
//     gapi.load('client:auth2', initClient);
//   }

//   function initClient() {
//     gapi.client.init({
//       apiKey: API_KEY,
//       clientId: CLIENT_ID,
//       discoveryDocs: DISCOVERY_DOCS,
//       scope: SCOPES
//     }).then(function () {
//       gapi.auth2.getAuthInstance().signIn();
//     });
//   }

//   function sendEmail(formData) {
//     var message = "From: " + formData.get('email') + "\r\n" +
//                   "To: contact.genreve@gmail.com, nithin.jayaraj@genreve.in\r\n" +
//                   "Subject: New Contact Form Submission\r\n\r\n" +
//                   "Name: " + formData.get('name') + "\r\n" +
//                   "Email: " + formData.get('email') + "\r\n" +
//                   "Phone: " + formData.get('phone') + "\r\n" +
//                   "Message: " + formData.get('message');

//     var encodedMessage = btoa(message)
//       .replace(/\+/g, '-')
//       .replace(/\//g, '_')
//       .replace(/=+$/, '');

//     gapi.client.gmail.users.messages.send({
//       'userId': 'me',
//       'resource': {
//         'raw': encodedMessage
//       }
//     }).then(function(response) {
//       alert('Email sent successfully!');
//       console.log(response);
//     }).catch(function(error) {
//       console.error('Error sending email:', error);
//       alert('Failed to send email.');
//     });
//   }

//   document.getElementById("contactForm").addEventListener("submit", function(event) {
//     event.preventDefault();

//     var formData = new FormData(this);

//     sendEmail(formData);
//   });

//   handleClientLoad();

