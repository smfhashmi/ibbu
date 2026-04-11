document.getElementById('userForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const mobile = document.getElementById('mobile').value;

  document.getElementById('details').innerHTML = `
    <h2>User Details</h2>
    <p>Name: ${name}</p>
    <p>Age: ${age}</p>
    <p>Mobile: ${mobile}</p>`;
})