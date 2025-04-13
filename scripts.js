/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

// Import all restaurant objects from restaurant-data.js
import { PAPA_JOHNS, BOILING_POINT, MCDONALDS, OOTORO, BURGER_KING, CAVA, CHIPOTLE, POPEYES, STARBUCKS, CHEESECAKE_FACTORY, NOBU, GUELAGUETZA } from './restaurant-data.js';

// Array to store all restaurant objects
const restaurants = [
  PAPA_JOHNS,
  BOILING_POINT,
  MCDONALDS,
  OOTORO,
  BURGER_KING,
  CAVA,
  CHIPOTLE,
  POPEYES,
  STARBUCKS,
  NOBU,
  CHEESECAKE_FACTORY,
  GUELAGUETZA,
];

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < restaurants.length; i++) {
    let restaurant = restaurants[i];
    console.log("added restaurant number ", i);

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, restaurant); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(card, restaurant) {
  card.style.display = "grid";

  const cardHeader = card.querySelector("#name");
  const cardCategories = card.querySelector("#categories");
  const cardAddress = card.querySelector("#address");
  const cardRating = card.querySelector("#rating");
  const cardReviewCount = card.querySelector("#review-count");
  const cardImage = card.querySelector("#image");

  cardHeader.textContent = restaurant.name;
  cardCategories.textContent = restaurant.categories;
  cardAddress.textContent = restaurant.address;
  cardRating.textContent = restaurant.rating + " ★";
  cardReviewCount.textContent = restaurant.reviewCount + " reviews";
  cardImage.src = restaurant.image;

  console.log("Added a new card for ", restaurant.name, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);
