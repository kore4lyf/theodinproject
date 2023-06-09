"use strict";

import * as data from './data.js'; // Import all menu and menu categories


// Cart Data 
let cart = [
  {
    name: "Beef Burger",
    restaurant: "Chillox",
    category: "Burger",
    smallPhotoName: "chillox-beef-burger.png",
    price: 5790,
    totalOrder: 1
  }
]

// Collect all food menu names
let foodNames = data.restaurantsMenu.map(food => food.name);

// Home DOM
const homePageLoaded = document.querySelector("#home");

// Restaurant Page
const restaurantPageLoaded = document.querySelector("#restaurant");

// Product Page
const productPageLoaded = document.querySelector("#product");

  if (homePageLoaded) {
    displayCategoryItems();
    loadPopularCategory("burger");
    searchFocus();
    setSearchBehaviour("home")


  } else if(restaurantPageLoaded) {
    loadRestaurantContent("Chillox", "Burger");
    loadMenuCategory("chillox", "burger");
    loadRestaurantMenu("chillox", "burger");
    searchFocus();
    setSearchBehaviour("restaurant")

  } else if(productPageLoaded) {
    loadProductDetail({
      bigPhotoName: "chillox-beef-burger.png",
      category: "Burger",
      deliveryFee: "Free",
      desc: "Beef Patty and special sauce",
      ingredients: ["Beef", "Lettuce", "Olive Oil", "Egg", "Tomatoes"],
      name: "Beef Burger",
      price: 5790,
      rating: 4.3,
      restaurant: "Chillox",
      smallPhotoName: "chillox-beef-burger.png",
      about:"This special beef burger uses special quality beef with sliced lettuce."
    });
  }
  

/** Condition for Pages With Back Botton **/

if (restaurantPageLoaded || productPageLoaded) {
  const backBtn = document.querySelector("#back");

  backBtn.addEventListener("click", function () {
    window.history.back();
  })
  }



  
/* ################## 
        HOMEPAGE 
    ################## */


// * Display Category Items
function displayCategoryItems() {

  // Create DOM Fragment
  const DOMFragment = document.createDocumentFragment();

  // Target  Home catgory options
  const homeCategoryOptions = document.querySelector("#home-category .options");
  
  // Displaying a list of items with javaScript is more
  // effective than have having to type them manually in HTML
  for(let item of data.foodCategoryList) {
    let option = document.createElement("li");
    option.className = `btn btn-secondary option`;
    option.setAttribute("onclick",`switchCategory('${item}')`);
    if (item === "burger") option.classList.add("active");
    option.innerHTML = `
      <span class="option-bg">
      <img loading="lazy" src="./assets/images/categories/${item}.png" alt="${item} lcon">
      </span>
      <p class="text-bold">${item}</p>
    `
    // Append option to DOMFragment  
    DOMFragment.appendChild(option);
  }; 

  // Let changes reflect at #home-category .options
  homeCategoryOptions.appendChild(DOMFragment);
  
  
  
    // Identify the default active category tab
    let activeFoodCategoryTabName = data.foodCategoryList[0];
  
  
  // Colletion of DOM elements for each item
  const foodCategorytTabs = {};
  for (let item of document.querySelectorAll(".category .items .item")) {
    let itemName = item.textContent.trim();
    foodCategorytTabs[itemName] = item;
  }
  
  
  
  /*
   * swithCategory: Switches active tab propertise on click
   * @itemName : The name of the current active tab
   *  
   */
  function switchCategory(itemName) { 
    if (!(activeFoodCategoryTabName === itemName)) {
      // Remove the active class name from previous active tab
      foodCategorytTabs[activeFoodCategoryTabName].classList.remove("active");
  
      // Add the active class name to newly clicked tab 
      foodCategorytTabs[itemName].classList.add("active");
  
      // Change active tab name
      activeFoodCategoryTabName = itemName;
    } 
  }
}


// Display Popurlar restaurant Items
function loadPopularCategory(categoryName) {

  // Create DOM Fragment
  const DOMFragment = document.createDocumentFragment();
  
  const popularContainerDom = document.querySelector(".popular-container");
  const popularDom = document.createElement("ul");
  popularDom.setAttribute("type", "none");
  popularDom.classList.add("popular");
  let innerHtml = "";

  const capCategoryName = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

  // Use restaurant names to collect all restaurants data into an array
  let restaurantsName = Object.keys(data.restaurants);
  let restaurantsData = [];
  for (let restaurant of restaurantsName) {
    restaurantsData.push(data.restaurants[restaurant]);
  }
  
  // Filter restaurant data to only ones that contains 
  let restaurants = restaurantsData.filter(item => item.menuCategory.includes(categoryName.toLowerCase()));

  for (let restaurant of restaurants) {
     innerHtml += `
        <li onclick="showMenu(item.name, categoryName)" class="item shadow text-bold">
          <img src="./assets/images/cover/${restaurant.coverPhoto[categoryName]}" alt="${restaurant.name + ' cover photo'}">
          <span class="item-details">
            <span class="item-profile">
              <img loading="lazy" src="./assets/images/restaurants/${restaurant.profilePhoto}" alt="Chillox logo">
              <span>
                <p class="item-title" title="${restaurant.name}">${restaurant.name.length <= 16 ? restaurant.name : restaurant.name.slice(0,13) + "..."}</p>
                <p class="item-desc text-faint"><span>${capCategoryName}</span> 
                  <span class="period-divider">
                    <svg fill="currentColor" viewBox="0 0 128 512">
                      <path d="M64 352c-35.35 0-64 28.65-64 64c0 35.35 28.65 64 64 64s64-28.65 64-64C128 380.7 99.35 352 64 352z"/>
                    </svg>
                  </span>
                  <span>Fast Food</span></p>
              </span>
            </span>
            <span class="rating-and-delivery-time">
              <span class="item-rating">
                <span>
                  <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="var(--clr-accent)" d="M9.65394 4.58646C10.5321 2.47118 13.4679 2.47118 14.3461 4.58646L14.9577 6.05983C15.3174 6.9261 16.107 7.52663 17.0227 7.63041L18.7297 7.82385C20.8853 8.06813 21.7756 10.7755 20.2013 12.2988L18.752 13.7012C18.1148 14.3177 17.8333 15.2258 18.0069 16.1045L18.3568 17.8758C18.7997 20.118 16.3977 21.8109 14.5018 20.5927L13.3571 19.8572C12.5276 19.3242 11.4724 19.3242 10.6429 19.8572L9.49819 20.5927C7.60234 21.8109 5.20031 20.118 5.64324 17.8758L5.99315 16.1045C6.16673 15.2258 5.88518 14.3177 5.24798 13.7012L3.79871 12.2988C2.22438 10.7755 3.11472 8.06813 5.27034 7.82385L6.97726 7.63041C7.89305 7.52663 8.68263 6.9261 9.04227 6.05983L9.65394 4.58646Z" stroke="#302F3C" stroke-width="0" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>                    
                </span>
                <p class="text-faint-dark">${restaurant.rating}</p>
              </span>
              <p class="item-delivery-time text-faint-dark"></p>
            </span>
          </span>
        </li>
    `
    
    popularDom.innerHTML = innerHtml;
    DOMFragment.appendChild(popularDom);
    popularContainerDom.appendChild(DOMFragment);
  }
}






/* #############################  
         RESTAURANT PAGE 
   ############################# */

function loadRestaurantMenuCategory(restaurantName) {
 
}

function switchMenuCategory(category) {

}



/** 
 * loadRestaurantContent : loads the restaurtants logo, name,
 * delivery fee, rating, menu and food.
 * @name : is the retaurants name.
 * @category : represents food category
 * 
 */

function loadRestaurantContent(name, category) {
  name = name.toLowerCase();
  category = category.toLowerCase();
  let capName = name[0].toUpperCase() + name.slice(1);
  let capCategory = category[0].toUpperCase() + category.slice(1)
  
  /** Set content from top to bottom **/
  let restaurantData = data.restaurants[name];
  let restaurantsMenu = data.restaurantsMenu;

  // Set restaurant cover image
  const restaurantCoverDOM = document.querySelector(".restaurant-cover img");
  let restaurantCover = restaurantData.coverPhoto[category];
  restaurantCoverDOM.src = `./assets/images/cover/${restaurantCover}`;
  

  // Set restaurant profile photo
  const restaurantProfilePhotoDOM = document.querySelector(".restaurant-profile");
  let restaurantProfilePhoto = restaurantData.profilePhoto;
  restaurantProfilePhotoDOM.src =  `./assets/images/restaurants/${restaurantProfilePhoto}`;
  

  // Set restaurant name
  const restaurantNameDOM = document.querySelector(".restaurant-details h1");
  restaurantNameDOM.innerText = `${capName} ${capCategory}`;


  // Set restaurant delivery fee
  const restaurantDeliveryFeeDOM = document.querySelector(".restaurant-rating-delivery .delivery-fee");
  restaurantDeliveryFeeDOM.innerText = restaurantData.deliveryFee;



  // Set restaurant rating
  const restaurantRatingDOM = document.querySelector(".restaurant-rating-delivery .rating");
  restaurantRatingDOM.innerText = restaurantData.rating;
  
}


/** 
 * loadRestaurantContent() loads the restaurtants logo, name,
 * delivery fee, rating, menu and food.
 * @restaurantName : is the retaurants name.
 * @activeCategory : represents the current/active food category
 * 
 * */
function loadMenuCategory(restaurantName, activeCategory) {
  // convert characters to lowercase
  restaurantName = restaurantName.toLowerCase();

  // Restaurant menu category
  let restaurantMenuCategories = data.restaurants[restaurantName].menuCategory;

  // Create document fragment
  let DOMFragment = document.createDocumentFragment();
  
  // Set list menu category options
  const menuCategoryDOM = document.querySelector(".menu-category .options");
  
  // Load options 
  for (let category of restaurantMenuCategories) {
    let option = document.createElement("li");
    // Add some classes to option
    option.className = "option btn btn-secondary";
    // Make option active if option = activeCategory
    if (category === activeCategory) option.classList.add("active");
    // add onclick event
      option.setAttribute("onclick", `switchCategory(${category})`)
    // Add innerHTML to content
    option.innerHTML = `<p>${category}</p>`;
    
    // Append option to DOMFragment
    DOMFragment.appendChild(option);
  }
    // Reflect changes
  menuCategoryDOM.appendChild(DOMFragment);
}


// * Set restaurant meun items
function loadRestaurantMenu(restaurantName, activeCategory) {
  // Create document fragment
  const DOMFragment = document.createDocumentFragment();

  // Target restaurant menu items
  const restaurantMenuItemsDOM = document.querySelector(".restaurant .items");


  // Create a new array, by collecting data that menu data using restaurantName and activeCategory
  const restaurantMenuData = data.restaurantsMenu.filter(item => (
    item.restaurant.toLowerCase() === restaurantName.toLowerCase() && item.category.toLowerCase() === activeCategory.toLowerCase() ));
    
  // create a menu items
  for (let item of restaurantMenuData) {
    // Create a new element to hold menu items
    let menuItem = document.createElement("li");
    // Add class name .item to the new element
    menuItem.classList.add("item");

    //set foodId on menu item
    menuItem.setAttribute("data-food-id", item.foodId);

    // Add the new elements inner content
    menuItem.innerHTML = `
      <img loading="lazy" src="./assets/images/menu/${item.smallPhotoName}" alt="Chillox Chicken Burger">
       <p class="item-name">${item.name}</p>
       <p class="item-desc text-faint">${item.desc}</p>
       <button class="btn btn-active small-btn text-bold shadow">
       <p>  Add to cart </p> </button>
       </div>
    `;
    
    DOMFragment.appendChild(menuItem);
  }
  

  // Reflect changes
  restaurantMenuItemsDOM.appendChild(DOMFragment);


}





/* ################## 
      PRODUCT PAGE 
    ################## */
    


/** 
   * loadProductDetail : Writes product details to UI
   * @productData : Contains all the information about the product
   */
function loadProductDetail(productData) {

  // 1. Set image path
  setProductImage(productData.bigPhotoName);

  // 2. Set the total number number of orders in cart
  setNumberOfOrdersInCart(cart, productData.name)

  // 3. Set Product Name
  setProductName(productData.name);

  // 4. Set product description
  setProductDescription(productData.desc);
  

  // 5. Set product price
  setProductPrice(productData.price);
  

  // 6. Set product delivery fee
  setProductDeliveryFee(productData.deliveryFee);

  
  // 7. Set product rating
  setProductRating(productData.rating);


  // 8. Set product ingredients
  setProductIngredients(productData.ingredients);


  // 9. Set information about the product
  setAboutProduct(productData.about);

  


  /** 
   * SetProductImage : Sets Product image on the product page
   * @imageName : Represent the name for the image file to be displayed
   */
  function setProductImage(imageName) {
      // Fetch image DOM
    const imageDOM = document.querySelector("#product .menu-item-display img");
      // Fetch image path
    let imageSrc = `./assets/images/menu/large/${imageName}`
      // Set path
    imageDOM.src = imageSrc;
  }


  /**
   * setNumberOfOrdersInCart : Gets the number time a product was order from the
   * cart and sets it to UI
   * @cart : It contains all the data of the item in the cart
   * @productName : Represent the the name of the Product
   */
  function setNumberOfOrdersInCart(cart, productName) {
      // Add to cart DOM
    const addToCartDOM = document.querySelector("#product #add-item-to-cart");

      // Increase and decrease total item DOM
    const totalOfItemDOM = document.querySelector("#product .inc-dec-in-cart");

      // Fetch Total number x item in cart
    const totalOfItem = document.querySelector("#product .total-of-item");

      // Find the product in the cart
    const productIndex = cart.findIndex(item => item.name.toLowerCase() === productName.toLowerCase());
    const product = cart[productIndex];
      
      // Check whether produc exists in the cart
    const productInCart = productIndex !== -1;
    if (productInCart) { // Show/hide elements depending on the status of the condition 
      totalOfItem.innerText = product.totalOrder;
      addToCartDOM.classList.add("hide");
      totalOfItem.classList.remove("hide");
    } else {
      totalOfItemDOM.classList.add("hide");
      addToCartDOM.classList.remove("hide");
    }
  }


  /**
   * setProductName : Writes product name to the product page
   * @productName : Represent the name of the product
   */
  function setProductName(productName) {
    // Fetch Product name element in the DOM
    const productNameDOM = document.querySelector("#product .product-name-desc-price .subheader");
    // Set name
    productNameDOM.innerText = productName;
  }


  /**
   * setProductDesc : Writes product description to the product page
   * @productDesc : Is a description of the product
   */
  function setProductDescription(productDesc) {
    // Fetch product descriptionn element in the DOM 
  const productDescDOM = document.querySelector("#product .product-name-desc-price .desc small");
    // Set description 
  productDescDOM.innerText = productDesc;
  }
  
  
  /**
   * setProductPrice : Writes product price to the product page
   * @productPrice : Is the product product
   */
  function setProductPrice(productPrice) {
      // Fetch product price element in the DOM
    const productPriceDOM = document.querySelector("#product .product-name-desc-price .cost");
      // Set price
    productPriceDOM.innerText = parseInt(productPrice).toLocaleString();
  }


  /**
    * setProductDeliveryFee : Writes product delivery fee to the product page
    * @productDeliveryFee : Is the products delivery fee
    */
  function setProductDeliveryFee(productDeliveryFee) {
      // Fetch product price element in the DOM
    const productDeliverFeeDOM = document.querySelector("#product .delivery-and-rating .delivery-fee p");
      // Set Delivery Fee
    productDeliverFeeDOM.innerText = isNaN(productDeliveryFee) ? "Free" : productDeliveryFee;
  }


  /**
   * setProductRating : Writes product rating to the product page
   * @productRating : Is the product's rating
   */
  function setProductRating(productRating) {
      // Fetch product rating element in the DOM
    const productRatingDOM = document.querySelector("#product .delivery-and-rating .rating p");
      // Set rating
    productRatingDOM.innerText = productRating;
  }



  /**
   * setProductIngredients : Writes a list of a ingredients to the product page
   * @productIngredients : Is a list of ingredients used in making the product
   */
  function setProductIngredients(productIngredients) {
      // Create Document Fragment
    const DOMFragment = document.createDocumentFragment();
      // Fetch product ingredients element in the DOM
    const productIngredientsDOM = document.querySelector("#product .ingredients .options");
      // Add ingredients to DOM
    for (let productIngredient of productIngredients) {
      // Create new ingredient
      const listItem = document.createElement("li");
      listItem.classList.add("option");
      listItem.innerText = productIngredient;

      // Append list to DOMFragment
      DOMFragment.appendChild(listItem);
    }

    // Append changes to Ingredient element in the DOM
    productIngredientsDOM.appendChild(DOMFragment);
  }


  /**
   * setAboutProduct : Writes information about the product to the product page
   * @aboutProduct : Information about the product
   */
  function setAboutProduct(aboutProduct) {
      // Fetch product about element in the DOM
    const aboutDOM = document.querySelector("#product .about p");
      // Set about information
    aboutDOM.innerText = aboutProduct;
  }

}



/**
 * searchFocus : Focuses on .seach-menu when menu search button is pressed
 */
function searchFocus() {
  // Get search icon in DOM
  const searchIconDOM = document.querySelector(".search .search-icon");

  // Get search input DOM
  const searchInputDOM = document.querySelector(".search .search-box");
  
  // Add click event to search item
  searchIconDOM.addEventListener("click", () => searchInputDOM.focus());
}



/**
 * setSearchBehaviour : Defines how search is done depending the active page rendering it
 * @activePage : is the active page's name
 */
function setSearchBehaviour(activePage) {
  // Get search input DOM
  const searchInputDOM = document.querySelector(".search .search-box");
  console.error(searchInputDOM.value.length);
  console.error(searchInputDOM.value);

  // Show suggest when search input focused
  if (activePage === "home") {
      // Add input event listener on search box
    searchInputDOM.addEventListener("input",
      () => showSearchSuggestions(searchInputDOM.value.toLowerCase()));
  } else {
      // Add input event listener on search box
    searchInputDOM.addEventListener("input",
      () => filterSearch(searchInputDOM.value.toLowerCase()));
  }
  
}



/**
 * showSearchSuggestions : Suggests food in the food menu depending on the food name or characters searched
 * @input : this is/are the characters entered by the user
 */
function showSearchSuggestions(input) {
  // Remove padded whitespaces
  input = input.trim();
  console.error(input);
  
  // Get Suggestion DOM
  const suggestionDOM = document.querySelector(".suggestion");

  // Get Suggestion List DOM
  const suggestionListDOM = document.querySelector(".suggestion .list");

  let inputContainsText = input.length;
  
  if (inputContainsText) {
    // Filter input
    input = filterInput(input);
    // Fetch foodNames that match input
    let suggestions = getSearchSuggestions(input, foodNames);
    
    let inputMatchFoodName = suggestions.length > 0;

    if (inputMatchFoodName) {
      //show suggestions
      suggestionDOM.classList.remove("hide");
      suggestionDOM.classList.add("animate");
      
      //Create DOM Fragment
      const DOMFragment = document.createDocumentFragment();
      
      // Regular expression to make input search case insensitive
      let inputCaseInsensitive = new RegExp(input, 'i');

      // Regular expression to make search global to all characters in a string
      let inputGlobal = new RegExp(input.toLowerCase(), 'g');

      
      for (let suggestion of suggestions) {
        // Empty suggestion list
        suggestionListDOM.innerHTML = "";
        
        // Create a list item for each suggestion
        const listItem = document.createElement("li");
        listItem.className = "list-item";
        const startIndex = suggestion.toLowerCase().search(inputCaseInsensitive)
          || suggestion.toLowerCase().search(inputGlobal);
        const endIndex = input.length;

        const textBoldHTML = "<span class='text-bold'>"
        const textBoldHTMLLen = textBoldHTML.length;
        suggestion = suggestion.slice(0, startIndex) + textBoldHTML + suggestion.slice(startIndex);
        suggestion = suggestion.slice(0, startIndex + textBoldHTMLLen + endIndex) + "</span>" + suggestion.slice(startIndex + textBoldHTMLLen + endIndex,);
        // suggestion = suggestion.join("");s
        console.log(suggestion);
        listItem.innerHTML = suggestion;

        
        // Append changes to DOMFragment
        DOMFragment.appendChild(listItem);
      }

      // Append changes to Suggestion DOM
      suggestionListDOM.appendChild(DOMFragment);

    } else {
      hideSuggestions();
    }
  } else {
      hideSuggestions();
  }


/**
 * hideSuggestion : uses class name "hide" to ensure an item name is not listed in
 */
  function hideSuggestions() {
    suggestionDOM.classList.add("hide");
    suggestionDOM.classList.remove("animate");
  }
}



/**
 * filterSearch : Suggests food in the food menu depending on the food name or characters searched
 * @input : this is/are the characters entered by the user
 */
function filterSearch(input) {
  console.error("Called");

  // Remove padded whitespaces
  input = input.trim();

  let inputContainsText = input.length;
  console.error(inputContainsText)

  console.error("contains text")

 
    // Remove symbols or special characters 
    input = filterInput(input);
    console.error(input);


    
    // get restaurant display items 
    const restaurantItems = document.querySelectorAll('.restaurant .items .item');


    // get restaurant display items names
    const restaurantItemNames = [];
      // get names from item-name from DOM
    for (let item of restaurantItems) {
      let itemName = item.querySelector(".item-name").innerHTML.trim();
      restaurantItemNames.push(itemName);
    }

    // Fetch food names that match input
    let suggestions = getSearchSuggestions(input, foodNames);
    
    filterRestaurantItems(suggestions, restaurantItems);
    console.error("Called-T2");

  
  function filterRestaurantItems(suggestions, items) {
    // Get search input value
    const searchInputValue = document.querySelector(".search .search-box").value;

    let suggestionIsEmpty = suggestions.length === 0;
    
    console.log("No of suggestions: ", suggestions.length);
    console.log("suggestion: ", suggestions);
    for (let item of items) {
      console.log("item: ", item);
      let itemName = item.querySelector(".item-name").innerHTML.trim();
      console.log("@DOM itemName: ", itemName)
      let itemNotInSuggestions = !suggestions.includes(itemName);
      let itemIsHidden = item.classList.contains("hide");
      let itemIsNotHidden = !item.classList.contains("hide");
      
      if (suggestionIsEmpty) {
        console.log("empty suggestion");
        // Make hidden items visible
        if (itemIsNotHidden) item.classList.add("hide");
        showSearchGuide(searchInputValue, suggestionIsEmpty, true);

      } else {
        
        
        if (itemNotInSuggestions) {
          console.log("item not in suggestion: ", itemName);
          
          if (itemIsNotHidden) {
            // Hide items that are not in the suggestion
            console.log(item + " is hidden")
            item.classList.add("hide");
          }
          showSearchGuide(searchInputValue, suggestionIsEmpty, true);

        } else {
          if (itemIsHidden) item.classList.remove("hide");
          showSearchGuide(searchInputValue, suggestionIsEmpty, true);
        }
      }
    } 
  }
}


function showSearchGuide(input = "", suggestionsIsEmpty, show) {
  // Fetch search status DOM
  let searchGuideDOM = document.querySelector(".search-guide");
  
  // Fetch search result state
  let searchResultStateDOM = document.querySelector(".search-guide .search-result-state");
  
  // Fetch search input
  let copySearchInputDOM = document.querySelector(".search-guide .copy-search-input");
  console.log(copySearchInputDOM)

  if (show && input !== "") {
    searchGuideDOM.classList.remove("hide");
    if (suggestionsIsEmpty) {
      searchResultStateDOM.innerText = "No"
      copySearchInputDOM.innerText = input;
    } else {
      searchResultStateDOM.innerText = "Showing";
      copySearchInputDOM.innerText = input;
    }
  } else {
    searchGuideDOM.classList.add("hide");
  }
}


/**
 * filter : Removes special characters
 * @input : this is/are the characters entered by the user
 */

function filterInput(input) {
  console.info(input)
  // Remove symbols or sepecial characters
  return input.replace(/[^A-Za-z0-9\s]/g, '');
}

/**
 * getSearchSuggestions : Fetch food names that match input
 */
function getSearchSuggestions(input, foodNames) {
  
  // Regular expression to make search global to all characters in a string
  let inputCaseInsensitive = new RegExp(input, 'i')
  // Regular expression to make input search case insensitive
  let inputGlobal = new RegExp(input.toLowerCase(), 'g');
  let suggestions = foodNames.filter(
    name => inputCaseInsensitive.test(name.toLowerCase()) 
      || inputGlobal.test(name.toLowerCase()));
  
  return suggestions;
}


/**
 * searchSort : Suggests food in the food menu depending on the food name or characters searched
 * @input : this is/are the characters entered by the user
 */
//  function searchSort(domContainer, domItems) {

// }