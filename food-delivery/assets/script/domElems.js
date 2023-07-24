/**
 * getDomElement : Returns an element in DOM
 * @cssSelector : Represents a css selector that can be used to 
 * access an element in the DOM.
 */
 export const getDomElement = cssSelector => document.querySelector(cssSelector);


/**
 * getDomElements : Returns a list of elements in DOM that can be identified by @cssSelector
 * @cssSelector : Represents a css selector that can be used to 
 * access an element or some elements in the DOM.
 */
 export const getDomElements = cssSelector => [...document.querySelectorAll(cssSelector)];


// get restaurant display items  in the DOM
export const restaurantContainer = getDomElement(".restaurant .items");

// Get Suggestion DOM in the DOM
export const suggestion = getDomElement(".suggestion");

// Get Suggestion List in the DOM
export const suggestionList = getDomElement(".suggestion .list");

// Get search icon in the DOM
export const searchIcon = getDomElement(".search .search-icon");

// Get search input in the DOM
export const searchInput = getDomElement(".search .search-box");

// Get sort icon in the DOM
export const sortIcon = getDomElement(".sort");

// Get sort options in the DOM
export const sortOptions = getDomElement(".sort-options");

// Get sort by name guide in the DOM 
export const sortByNameGuide = getDomElement(".sort-by-name-guide");

// Get sort By price guide in the DOM
export const sortByPriceGuide = getDomElement(".sort-by-price-guide");

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

