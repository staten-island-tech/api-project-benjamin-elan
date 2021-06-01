import { DOMSelectors } from "./js/DOM.js";
// import { genres } from "./js/genre.js";

const key = "x-a44dd5f8-f213-461b-8bab-2dba83d70530";
// headers["x-a44dd5f8-f213-461b-8bab-2dba83d70530"] = key;
const query = async function () {
  try {
    let response = await fetch(
      `https://api.thedogapi.com/v1/breeds?api_key=${key}`
    );
    let data = await response.json();
    console.log(data);
    data.forEach((dog) => {
      DOMSelectors.grid.insertAdjacentHTML(
        "beforeend",
        `<div class="dog-card">
        <div class="dog-card-front">
          <img
            src="https://cdn2.thedogapi.com/images/${dog.image.id}.jpg"
            alt=""
            class="dog-card"
          />
        </div>
        
          <div class="dog-card-back">
            <h3 class="dog-card-name">${dog.name}</h3>
            <div class="dog-group">
              <p class="dog-card-group">Group: ${dog.breed_group}</p>
            </div>
            <div class="lifespan">
               <p class="dog-card-lifespan">Life Span: ${dog.life_span}</p>
            </div>
            <div class="dog-origin">
            <p class="dog-card-origin">Origin: ${dog.origin}</p>
            </div>
          </div>
        </div>
        </div>`
      );
    });
  } catch (error) {
    console.log(error);
    alert("HOT DOG HOT DOG HOT DIGGITY DOG!!!");
  }
};
query();
