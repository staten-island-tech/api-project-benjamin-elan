import { DOMSelectors } from "./DOM";
import { genres } from "./genre";

const key = "x-a44dd5f8-f213-461b-8bab-2dba83d70530";

const query = async function () {
    try {
        const response = await fetch ('https://api.TheDogAPI.com/v1/breeds')
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
        alert("CANDICE");
    }

};