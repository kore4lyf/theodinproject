import * as data from './data.js'; // Import all meun and menu categories


// Home DOM
const homePageLoaded = document.querySelector("#home");

// Restaurant Page
const restaurantPageLoaded = document.querySelector("#restaurant");

// home.addEventListener("DOMContentLoaded", () => {
  //   displayCategoryItems();
  //   console.log("hey");
  // });
  
  if (homePageLoaded) {
    displayCategoryItems();
    loadPopularCategory("burger");
  } else if (restaurantPageLoaded) {
    


  }
  

/** Condition for Pages With Back Botton **/

if (restaurantPageLoaded) {
  const backBtn = document.querySelector("#back");

  backBtn.addEventListener("click", function () {
    console.log(window.history.back());
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
   * @itemName: The name of the current active tab
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
                <p class="item-desc text-faint-dark"><span>${capCategoryName}</span> 
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
 * loadRestaurantContent() load the restaurtants logo, name,
 * delivery fee, rating, menu and food.
 * @name: is the retaurants name.
 * @category: represents food category
 * */

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


  
  
  // * Set restaurant meun items
  
  
}

loadRestaurantContent("Chillox", "Burger");


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
    console.log(category)
    
    let option = document.createElement("li");
    // Add some classes to option
    option.className = "option btn btn-secondary";
    // Make option active if option = activeCategory
    if (category === activeCategory) option.classList.add("active");
    // add onclick event
    option.setAttribute("onclick", `switchCategory(${category})`)
    // Add innerHTML to content
    option.innerHTML = `<p>${category}</p>`;
    
    
    // <li onclick="" class="option btn btn-secondary active">
    //       <p>Popular</p>
    //     </li>
    
    // Append option to DOMFragment
    DOMFragment.appendChild(option);
  }

  // Reflect changes
  menuCategoryDOM.appendChild(DOMFragment);
  // console.log(menuCategory)
}
loadMenuCategory("chillox", "burger");

// * Focus on .seach-menu when menu search button is pressed 