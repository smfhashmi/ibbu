document.getElementById('class details').addEventListener('submit', function (e) {
 e.preventDefault();
const name = document.getElementById('name').value;
const subject = document.getElementById('subject').value;
const hours per week = document.getElementById('hours per week').value;

document.getElementById('subject details').innerHTML = '
<h3> subject details</h3>
<p>name: ${name}</p>
<p>subject: ${subject}</p>
<p>hours per week: ${hours per week}</p>';
})