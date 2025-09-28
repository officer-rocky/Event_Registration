🎉 Event Registration System

A simple and modern web application to register participants for events and manage registrations with a stylish glassmorphism UI.

Built using Node.js, Express, and Vanilla JavaScript.

✨ Features

📝 Event Registration Form

Name and Email fields with validation

Prevents empty or invalid email entries

⚙️ Backend Integration

Saves registrations in registrations.json

Logs registration data to the console

Validates incoming data

✅ Success Feedback

Shows a confirmation message on successful registration

📋 View Registrations (Bonus)

Displays all registered participants

Live search filter by name or email

Delete participants directly from the list

🎨 Modern UI

Glassmorphism card-based design

Smooth gradients, hover effects, and responsive layout

📂 Project Structure
project/
├─ public/
│  ├─ index.html     # Registration page
│  ├─ view.html      # View registrations page
│  ├─ styles.css     # Styling (glassmorphism + gradient)
│  ├─ script.js      # Frontend logic for registration
│  └─ view.js        # Frontend logic for view/search/delete
├─ registrations.json # Auto-generated data store
└─ server.js          # Node.js Express backend

🚀 Installation & Usage

Clone the repository

git clone https://github.com/officer-rocky/Event_Registration.git
cd event-registration


Install dependencies

npm install express


Run the server

node server.js


Open in browser

http://localhost:3000


Register participants on the main page → index.html

View, search, and delete participants → view.html

💻 Tech Stack

Frontend: HTML, CSS, JavaScript

Backend: Node.js, Express

Storage: JSON file (registrations.json)

🛠️ Future Improvements

🔄 Replace JSON storage with a database (MongoDB / PostgreSQL)

📧 Send email confirmation notifications

📊 Add pagination & export options for large lists

📱 Enhance mobile responsiveness