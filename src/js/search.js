import { DOMSelectors } from "./DOM";
import { genres } from "./genre";

const listen = function () {
  DOMSelectors.searchForm.addEventListener("submit", function (e) {
    console.log("submit");
    e.preventDefault();
    const searchParams = DOMSelectors.searchArea.value;
    console.log(searchParams);
    const searchQuery = async function () {
      console.log("async");
      try {
        let response = await fetch(
          `https://api.thedogapi.com/v1/breeds/search?api_key=${key}`
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
                    <li class="dog-group">Sci-Fi</li>
                    <li class="dog-group">Fantasy</li>
                    <li class="dog-group">Horror</li>
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