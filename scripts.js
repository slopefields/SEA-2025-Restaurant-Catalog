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

// Import array of all restaurant objects from restaurant-data.js
import { RESTAURANTS } from './restaurant-data.js';
// Taking a copy of RESTAURANTS because sorting would modify original otherwise
let restaurants = [...RESTAURANTS];  

// Constant variables for elements
const countDisplay = document.getElementById("count-display");
const sortDropdown = document.getElementById("filter-dropdown");
const cardContainer = document.getElementById("card-container");
const searchBar = document.getElementById("search-bar")

// Set up everything: shows cards, updates counter to display accurate number of results 
function showCards() {
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");
  const numRestaurants = restaurants.length;

  // Loop through restaurants array to display each card
  for (let i = 0; i < numRestaurants; i++) {
    let restaurant = restaurants[i];
    console.log("added restaurant number ", i);

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, restaurant); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container 
  }
  // Update counter to show how many cards there are
  setCountDisplay(numRestaurants);
  const cards = document.querySelectorAll(".card");
  console.log(cards);
}

function setCountDisplay(restaurantCount) {
  countDisplay.textContent = "Displaying " + restaurantCount + " results:";
}

function editCardContent(card, restaurant) {
  card.style.display = "grid";

  const cardHeader = card.querySelector("#name");
  const cardCategories = card.querySelector("#categories");
  const cardAddress = card.querySelector("#address");
  const cardRating = card.querySelector("#rating");
  const cardReviewCount = card.querySelector("#review-count");
  const cardImage = card.querySelector("img");

  cardHeader.textContent = restaurant.name;
  cardCategories.textContent = restaurant.categories;
  cardAddress.textContent = restaurant.address;
  cardRating.textContent = restaurant.rating + " ★";
  cardReviewCount.textContent = restaurant.reviewCount + " reviews";
  cardImage.src = restaurant.image;
  
  cardImage.style.height = "550px";

  console.log("Added a new card for ", restaurant.name, "- html: ", card);
}

// Search bar functionality
function search(input) {
    const cards = document.querySelectorAll(".card");
    console.log(cards);
    cards.forEach(card => {
      // Omitting last card because invisible template card
      if (card != cards[cards.length - 1])
      {
        const restaurantName = card.querySelector("#name").textContent.toLowerCase();
        if (restaurantName.includes(input.toLowerCase()))
          card.style.display = "block";
        else
          card.style.display = "none";
    }
  })  
}

// Filter to sort cards in a given order
function filter(sortBy) {
  if (sortBy == "filter-default")
  {
    restaurants = [...RESTAURANTS];
    showCards();
  }
  if (sortBy == "filter-name-ascending")
  {
    restaurants.sort((a, b) => a.name.localeCompare(b.name));
    showCards();
  }
  else if (sortBy == "filter-rating-descending")
  { 
    restaurants.sort((a,b) => b.rating - a.rating);
    showCards();
  }
  else if (sortBy == "filter-review-count-descending")
  {
    restaurants.sort((a,b) => b.reviewCount - a.reviewCount);
    showCards();
  }
}

searchBar.addEventListener("keyup", () => search(searchBar.value));

sortDropdown.addEventListener("change", () => filter(sortDropdown.value));

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);
