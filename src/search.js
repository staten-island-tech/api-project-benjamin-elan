
import { DOMSelectors } from "./js/DOM.js";
// import { genres } from "./js/genre.js";
const key = "x-a44dd5f8-f213-461b-8bab-2dba83d70530";
const listen = function () {
  DOMSelectors.searchForm.addEventListener("submit", function (e) {
    console.log("pressed submit");
    e.preventDefault();
    DOMSelectors.grid.innerHTML=""
    const searchParams = DOMSelectors.searchArea.value;
    console.log("my input is "+ searchParams);
    const searchQuery = async function () {
    console.log("running search async");
      try {

        const response = await fetch(
          `https://api.thedogapi.com/v1/breeds/search?api_key=${key}&q=${searchParams}`
          // `https://api.thedogapi.com/v1/breeds?api_key=${key}`

        );
        const data = await response.json();
        console.log(data);
        data.forEach((dog) => {
          console.log(dog);
          DOMSelectors.grid.insertAdjacentHTML(
            "beforeend",
            // `<div><h3>test</h3></div>`
            `<div class="dog-card">
              <div class="dog-card-front">
                <img
                  src="https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg"
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
    searchQuery();
  });
};

listen();
