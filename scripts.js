const jokeBox = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

async function getJoke() {
	jokeBox.textContent = 'Loading...';
	try {
		const res = await fetch('https://official-joke-api.appspot.com/random_joke');
		const data = await res.json();
		jokeBox.textContent = `${data.setup}\n${data.punchline}`;
		jokeBox.style.background = '#b2ff59';
		setTimeout(() => {
			jokeBox.style.background = '#f9d423';
		}, 400);
	} catch (e) {
		jokeBox.textContent = 'Oops! Could not fetch a joke.';
	}
}

jokeBtn.addEventListener('click', getJoke);
