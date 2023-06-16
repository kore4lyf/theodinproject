import * as data from './data.js';



// Home DOM
const home = document.querySelector("#home");

// home.addEventListener("DOMContentLoaded", () => {
  //   displayCategoryItems();
  //   console.log("hey");
  // });
  
  if (home) {
    displayCategoryItems();
    loadPopularCategory("burger");
  }
  
/* ################## 
        HOMEPAGE 
    ################## */
// * Display Category Items
function displayCategoryItems() {
  const foodCategoryContainer = document.querySelector("#category .options");
  
  // Displaying a list of items with javaScript is more
  // effective than have having to type them manually in HTML
  for(let item of data.foodCategoryList) {
    item = `
    <li class="btn btn-secondary option ${item === 'burger' ? 'active' : ''}" onclick="switchCategory('${item}')">
      <span class="option-bg">
      <img src="./assets/images/categories/${item}.png" alt="${item} lcon">
      </span>
      <p class="text-bold">${item}</p>
      </li>
      `;
      
      foodCategoryContainer.innerHTML += item;
    }; 
  
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
  
  const popularContainerDom = document.querySelector(".popular-container");
  const popularDom = document.createElement("ul");
  popularDom.setAttribute("type", "none");
  popularDom.classList.add("popular");
  let innerHtml = "";

  const capCategoryName = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

  
  

  let items = data.restaurants.filter(item => item.menuCategory.includes(categoryName.toLowerCase()));

  for (let item of items) {
    let itemTitle = item.name;
     innerHtml += `
        <li onclick="showMenu(item.name, categoryName)" class="item shadow text-bold">
          <img src="./assets/images/cover/${item.coverPhotoName[categoryName]}" alt="">
          <div class="item-details">
            <div class="item-profile">
              <img src="./assets/images/restaurants/${item.profilePhotoName}" alt="Chillox logo">
              <div>
                <p class="item-title" title="${itemTitle}">${itemTitle.length <= 16 ? itemTitle : itemTitle.slice(0,13) + "..."}</p>
                <p class="item-desc text-faint-dark"><span>${capCategoryName}</span> 
                  <span class="period-divider">
                    <svg fill="currentColor" viewBox="0 0 128 512">
                      <path d="M64 352c-35.35 0-64 28.65-64 64c0 35.35 28.65 64 64 64s64-28.65 64-64C128 380.7 99.35 352 64 352z"/>
                    </svg>
                  </span>
                  <span>Fast Food</span></p>
              </div>
            </div>
            <div class="rating-and-delivery-time">
              <div class="item-rating">
                <span>
                  <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="var(--clr-accent)" d="M9.65394 4.58646C10.5321 2.47118 13.4679 2.47118 14.3461 4.58646L14.9577 6.05983C15.3174 6.9261 16.107 7.52663 17.0227 7.63041L18.7297 7.82385C20.8853 8.06813 21.7756 10.7755 20.2013 12.2988L18.752 13.7012C18.1148 14.3177 17.8333 15.2258 18.0069 16.1045L18.3568 17.8758C18.7997 20.118 16.3977 21.8109 14.5018 20.5927L13.3571 19.8572C12.5276 19.3242 11.4724 19.3242 10.6429 19.8572L9.49819 20.5927C7.60234 21.8109 5.20031 20.118 5.64324 17.8758L5.99315 16.1045C6.16673 15.2258 5.88518 14.3177 5.24798 13.7012L3.79871 12.2988C2.22438 10.7755 3.11472 8.06813 5.27034 7.82385L6.97726 7.63041C7.89305 7.52663 8.68263 6.9261 9.04227 6.05983L9.65394 4.58646Z" stroke="#302F3C" stroke-width="0" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>                    
                </span>
                <p class="text-faint-dark">${item.rating}</p>
              </div>
              <p class="item-delivery-time text-faint-dark"></p>
            </div>
          </div>
        </li>
    `
    
      popularDom.innerHTML = innerHtml;
    popularContainerDom.appendChild(popularDom);
  }
}



