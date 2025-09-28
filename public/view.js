// view.js

const list = document.getElementById('list');
const search = document.getElementById('search');

let registrations = []; // store fetched data

// Function to render participants
function renderList(data) {
  list.innerHTML = '';

  if (data.length === 0) {
    list.innerHTML = '<li>No participants found.</li>';
    return;
  }

  data.forEach(r => {
    const li = document.createElement('li');
    li.style.display = 'flex';
    li.style.justifyContent = 'space-between';
    li.style.alignItems = 'center';

    const span = document.createElement('span');
    span.textContent = `${r.name} (${r.email})`;

    const delBtn = document.createElement('button');
    delBtn.textContent = '🗑️';
    delBtn.style.background = 'transparent';
    delBtn.style.border = 'none';
    delBtn.style.cursor = 'pointer';
    delBtn.style.fontSize = '16px';
    delBtn.style.color = '#ff6b6b';

    // Delete action
    delBtn.addEventListener('click', async () => {
      if (confirm(`Delete ${r.name} (${r.email})?`)) {
        try {
          const res = await fetch(`/api/registrations/${encodeURIComponent(r.email)}`, {
            method: 'DELETE'
          });
          if (res.ok) {
            // Remove from local array and re-render
            registrations = registrations.filter(reg => reg.email !== r.email);
            renderList(registrations);
          } else {
            alert('Failed to delete participant.');
          }
        } catch (err) {
          console.error(err);
          alert('Error deleting participant.');
        }
      }
    });

    li.appendChild(span);
    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

// Fetch data from API
async function loadRegistrations() {
  list.innerHTML = 'Loading...';

  try {
    const res = await fetch('/api/registrations');
    registrations = await res.json();

    if (registrations.length === 0) {
      list.innerHTML = '<li>No registrations yet.</li>';
    } else {
      renderList(registrations);
    }
  } catch (err) {
    console.error(err);
    list.innerHTML = '<li>Error loading registrations.</li>';
  }
}

// Search filter
search.addEventListener('input', () => {
  const term = search.value.toLowerCase();
  const filtered = registrations.filter(r =>
    r.name.toLowerCase().includes(term) ||
    r.email.toLowerCase().includes(term)
  );
  renderList(filtered);
});

// Initial load
loadRegistrations();
