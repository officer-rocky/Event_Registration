document.getElementById('regForm').addEventListener('submit', async (e) => {
  e.preventDefault(); // Stop form from refreshing the page

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const msg = document.getElementById('msg');

  msg.textContent = ''; // clear previous messages

  try {
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email })
    });

    const data = await res.json();

    if (res.ok) {
      msg.style.color = 'green';
      msg.textContent = '✅ Registration successful!';
      document.getElementById('regForm').reset();
    } else {
      msg.style.color = 'red';
      msg.textContent = data.error || '❌ Something went wrong.';
    }
  } catch (err) {
    console.error(err);
    msg.style.color = 'red';
    msg.textContent = '❌ Network or server error.';
  }
});
