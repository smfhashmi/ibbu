document.getElementById('details').addEventListener('submit', function (e) {
 e.preventDefault();
const name = document.getElementById('name').value;
const subject = document.getElementById('subject').value;
const hoursperweek = document.getElementById('hours per week').value;

document.getElementById('results').innerHTML = `
<h3> subject details </h3>
<p>name: ${name}</p>
<p>subject: ${subject}</p>
<p>hoursperweek: ${hoursperweek}</p>`;
})



document.getElementById('details').add