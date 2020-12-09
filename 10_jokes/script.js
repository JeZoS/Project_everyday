const btn = document.getElementById("jokeBtn");
const joke = document.getElementById("joke");

generateJoke();

function generateJoke() {
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      joke.innerHTML = data.joke;
    });
}

btn.addEventListener("click", () => {
  generateJoke();
});
