let users = [];
let nextId = 1;

document.getElementById('insertForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('nameInput').value;
  if (name) {
    users.push({ id: nextId++, name });
    document.getElementById('nameInput').value = '';
    selectAll();
  }
});

document.getElementById('updateForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const id = parseInt(document.getElementById('updateId').value);
  const name = document.getElementById('updateName').value;
  const user = users.find(u => u.id === id);
  if (user && name) {
    user.name = name;
    selectAll();
  }
});

document.getElementById('deleteForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const id = parseInt(document.getElementById('deleteId').value);
  users = users.filter(u => u.id !== id);
  selectAll();
});

function selectAll() {
  const list = document.getElementById('userList');
  list.innerHTML = '';
  users.forEach(user => {
    const li = document.createElement('li');
    li.textContent = `ID: ${user.id}, Nome: ${user.name}`;
    list.appendChild(li);
  });
}
