
// get restaurant display items  in the DOM
export const restaurantContainer = getDomElement(".restaurant .items");

// get restaurant display item in the DOM
export const restaurantItems = getDomElement('.restaurant .items .item');

// Get Suggestion DOM in the DOM
export const suggestion = getDomElement(".suggestion");

// Get Suggestion List in the DOM
export const suggestionList = getDomElement(".suggestion .list");

// Get search icon in the DOM
export const searchIcon = getDomElement(".search .search-icon");

// Get search input in the DOM
export const searchInput = getDomElement(".search .search-box");

// Fetch sort icon in the DOM
export const sortIcon = getDomElement(".sort");

// Get sort options in the DOM
export const sortOptions = getDomElement(".sort-options");

// Get search name sort-option in the DOM
export const nameSort = getDomElement(".sort-option.name");

// Get search name sort-option ascending in the DOM
export const nameSortAsc = getDomElement(".sort-option.name .asc");

// Get search name sort-option descending in the DOM
export const nameSortDesc = getDomElement(".sort-option.name .desc");

// Get search price sort-option in the DOM
export const priceSort = getDomElement(".sort-option.price");

// Get search name sort-option ascending in the DOM
export const priceSortAsc = getDomElement(".sort-option.price .asc");

// Get search name sort-option descending in the DOM
export const priceSortDesc = getDomElement(".sort-option.price .desc");





/**
 * getDomElement : Returns an element in DOM
 * @cssSelector : Represents a css selector that can be used to 
 * access the element in the DOM.
 */
 function getDomElement(cssSelector) {
  return document.querySelector(cssSelector);
}