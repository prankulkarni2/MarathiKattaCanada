const form = document.querySelector('form');
const jobTitleInput = document.querySelector('#job_title');
const locationInput = document.querySelector('#location');
const descriptionInput = document.querySelector('#description');
const jobListingsTable = document.querySelector('table tbody');

function addJob(event) {
	event.preventDefault();

	const jobTitle = jobTitleInput.value;
	const location = locationInput.value;
	const description = descriptionInput.value;

	const newRow = document.createElement('tr');
	newRow.innerHTML = `
		<td>${jobTitle}</td>
		<td>${location}</td>
		<td>${description}</td>
	`;
	jobListingsTable.appendChild(newRow);

	form.reset();
}

form.addEventListener('submit', addJob);
