# Event Registration System

A simple web application to register participants for events and view/delete registrations.  
Built with **Node.js**, **Express**, and **vanilla JavaScript**, featuring a modern **glassmorphism UI**.

---

##  Features

- **Event Registration Form**  
  - Name and Email fields with validation  
  - Email format is checked to prevent invalid entries  
  - Cannot submit empty fields  

- **Backend Integration**  
  - Stores registrations in `registrations.json`  
  - Logs registration data to the console  
  - Validates incoming data  

- **Success Feedback**  
  - Displays a success message on successful registration  

- **View Registrations Page (Bonus)**  
  - Displays all registered participants  
  - Live search filter by name or email  
  - Delete participants directly from the list  

- **Modern UI**  
  - Glassmorphism cards for forms and participants  
  - Smooth gradients, hover effects, and responsive design  

---

##  Project Structure
project/
├─ public/
│ ├─ index.html # Registration page
│ ├─ view.html # View registrations page
│ ├─ styles.css # Styling (glassmorphism + gradient)
│ ├─ script.js # Frontend JS for registration
│ └─ view.js # Frontend JS for view/search/delete
├─ registrations.json # Stores registrations (auto-generated)
└─ server.js # Node.js Express backend


---

## 🚀 Installation & Usage

1. **Clone the repository**
```bash
git clone https://github.com/officer-rocky/Event_Registration.git
cd event-registration

Install dependencies

npm install express


Run the server

node server.js


Open in browser

http://localhost:3000


Register participants on the main page (index.html)

View, search, and delete participants on the view page (view.html)

💻 Tech Stack

Frontend: HTML, CSS, JavaScript

Backend: Node.js, Express

Data Storage: JSON file (registrations.json)

🛠️ Future Improvements

Replace JSON storage with a database (MongoDB/PostgreSQL)

Add email confirmation notifications

Add pagination or export for large registration lists

Improve mobile responsiveness

