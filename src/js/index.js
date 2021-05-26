// import { DOMSelectors } from "./DOM";
// import { genres } from "./genre";

const dogs = "https://api.thedogapi.com/v1/breeds";
const key = "x-a44dd5f8-f213-461b-8bab-2dba83d70530";

const query = async function () {
  try {
    const response = await fetch(dogs);
    const data = await response.json();
    data.results.forEach((dog) => {
        DOMSelectors.grid.insertAdjacentHTML("beforeend", `<div class="movie-card">
        <div class="movie-card-front">
          <img
            src="https://image.tmdb.org/t/p/w300/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg"
            alt=""
            class="poster"
          />
        </div>
        <div class="dog-card-back">
          <h3 class="dog-card-header">${dog.breed_group}</h3>
          <div class="score-box">
            <p class="user-score">Community Score</p>
            <p class="user-score">8.4</p>
          </div>

          <div class="release-box">
            <p class="release-date">Released</p>
            <p class="release-date">2020-06-12</p>
          </div>

          <div class="dog-group">
            <li class="dog-group">Sci-Fi</li>
            <li class="dog-group">Fantasy</li>
            <li class="dog-group">Horror</li>
          </div>
        </div>
      </div>`);
    });
    catch (error) {
    console.log(error);
    alert("HOT DOG HOT DOG HOT DIGGITY DOG!!!");
        };   
    };
};
    
query();
