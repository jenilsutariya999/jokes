const jokeText = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

async function generateJoke() {
    const appJson = {
        headers: {
            Accept:'application/json'   
        },
    }

    const res = await fetch("https://icanhazdadjoke.com",appJson)

    const data = await res.json()

    jokeText.innerHTML = data.joke
}