document.getElementById('details').addEventListener('submit', function (e) {
 e.preventDefault();
const name = document.getElementById('name').value;
const subject = document.getElementById('subject').value;
const hoursperweek = document.getElementById('hoursperweek').value;
const gender = document.getElementById('gender').value;
const radio = document.getElementById('HighestQualification').value;

document.getElementById('results').innerHTML = `
<h3> subject details </h3>
<p>name: ${name}</p>
<p>subject: ${subject}</p>
<p>hoursperweek: ${hoursperweek}</p>
<p>gender: ${gender}</p>
<p>radio: ${HighestQualification}`;
})