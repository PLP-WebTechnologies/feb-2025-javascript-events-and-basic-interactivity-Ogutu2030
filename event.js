<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Functional Webpage</title>
  <style>
    /* Basic Styles */
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
      padding: 0;
      line-height: 1.6;
    }

    .container {
      max-width: 600px;
      margin: auto;
      padding: 20px;
      background: #f4f4f4;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }

    h1 {
      text-align: center;
      color: #333;
    }

    label {
      display: block;
      margin: 10px 0 5px;
    }

    input, button {
      width: 100%;
      padding: 10px;
      margin: 5px 0 15px;
      border: 1px solid #ddd;
      border-radius: 5px;
    }

    .success {
      color: green;
      margin-bottom: 10px;
    }

    .error {
      color: red;
      margin-bottom: 10px;
    }

    .interactive-section {
      margin-top: 20px;
    }

    .interactive-box {
      width: 100px;
      height: 100px;
      background-color: lightblue;
      margin: 10px auto;
      border-radius: 10px;
      text-align: center;
      line-height: 100px;
      cursor: pointer;
    }
  </style>
</head>
<body>

  <div class="container">
    <h1>Interactive Webpage</h1>

    <!-- Form Section -->
    <form id="registrationForm">
      <h2>Register</h2>
      <label for="username">Username</label>
      <input type="text" id="username" placeholder="Enter username">
      <label for="email">Email</label>
      <input type="email" id="email" placeholder="Enter email">
      <label for="password">Password</label>
      <input type="password" id="password" placeholder="Enter password">
      <button type="button" id="submitBtn">Submit</button>
      <p id="message" class="success"></p>
    </form>

    <!-- Interactive Section -->
    <div class="interactive-section">
      <h2>Interactive Box</h2>
      <div class="interactive-box" id="box">Click Me</div>
    </div>
  </div>

  <script>
    // Using Event Listeners for Form Validation
    document.getElementById('submitBtn').addEventListener('click', function() {
      const username = document.getElementById('username').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();
      const message = document.getElementById('message');
      
      if (username === "" || email === "" || password === "") {
        message.textContent = "All fields are required!";
        message.className = "error";
      } else if (!email.includes("@")) {
        message.textContent = "Please enter a valid email address.";
        message.className = "error";
      } else {
        message.textContent = "Registration successful!";
        message.className = "success";
      }
    });

    // Adding Interactive Elements
    const box = document.getElementById('box');
    box.addEventListener('click', function() {
      if (box.style.backgroundColor === "lightblue") {
        box.style.backgroundColor = "lightgreen";
        box.textContent = "Clicked!";
      } else {
        box.style.backgroundColor = "lightblue";
        box.textContent = "Click Me";
      }
    });
  </script>
</body>
</html>
