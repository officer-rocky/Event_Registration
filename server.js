// server.js
const express = require('express');
const path = require('path');
const fs = require('fs').promises;


const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'registrations.json');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


function isValidEmail(email) {
// Simple email validation - good for demo purposes
return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


async function readData() {
try {
const content = await fs.readFile(DATA_FILE, 'utf8');
return JSON.parse(content);
} catch (err) {
if (err.code === 'ENOENT') return []; // file not found -> empty array
throw err;
}
}


async function writeData(data) {
await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
}


// POST /api/register - receive registration
app.post('/api/register', async (req, res) => {
try {
const { name, email } = req.body;
if (!name || !email || !name.trim() || !email.trim()) {
return res.status(400).json({ error: 'Name and email are required.' });
}
if (!isValidEmail(email)) {
return res.status(400).json({ error: 'Invalid email format.' });
}


const registrations = await readData();
const entry = {
id: Date.now(),
name: name.trim(),
email: email.trim(),
createdAt: new Date().toISOString(),
};


registrations.push(entry);
await writeData(registrations);


// Log to console (requirement)
console.log('New registration:', entry);


res.json({ success: true, entry });
} catch (err) {
console.error('Error handling /api/register:', err);
res.status(500).json({ error: 'Server error' });
}
});


// GET /api/registrations - return all registrations (optional for the View page)
app.get('/api/registrations', async (req, res) => {
  try {
    const registrations = await readData();
    res.json(registrations);
  } catch (err) {
    console.error('Error reading registrations:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// DELETE /api/registrations/:email - delete registration by email
app.delete('/api/registrations/:email', async (req, res) => {
  try {
    const email = decodeURIComponent(req.params.email);

    const registrations = await readData();
    const index = registrations.findIndex(r => r.email === email);

    if (index === -1) {
      return res.status(404).json({ error: 'Registration not found.' });
    }

    registrations.splice(index, 1); // remove the entry
    await writeData(registrations);

    console.log(`Deleted registration: ${email}`);
    res.json({ success: true });
  } catch (err) {
    console.error('Error deleting registration:', err);
    res.status(500).json({ error: 'Server error' });
  }
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});