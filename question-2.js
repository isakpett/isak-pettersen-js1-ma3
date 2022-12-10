const API_URL =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=3adbfbf08afb45159f495fbcfe7fc57e";

document.querySelector(".result").innerHTML = "<div class=loading></div>";

async function callRawg() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    const results = data.results;
    const gameElements = [];

    for (let i = 0; i < 8 && i < results.length; i++) {
      const game = results[i];
      const name = game.name;
      const rating = game.rating;
      const numTags = game.tags.length;
      gameElements.push(`
        <div class="game">
          <h3>${name}</h3>
          <p>Rating: ${rating}</p>
          <p>Number of tags: ${numTags}</p>
        </div>
            `);
    }

    document.querySelector(".result").innerHTML = gameElements.join("");
  } catch (error) {
    console.error(error);
  }
}
callRawg();
