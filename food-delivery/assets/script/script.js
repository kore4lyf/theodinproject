
// Display Category Items
let foodCategoryList = ["burger", "pizza", "salad", "chicken", "sushi"];
const foodCategoryContainer = document.querySelector(".category .items");

// Displaying a list of items with javaScript is more
// effective than have having to type them manually in HTML
for(item of foodCategoryList) {
  item = `
  <button class="btn btn-secondary item ${item === 'burger' ? 'active' : ''}" onclick="switchCategory('${item}')">
    <span class="item-bg">
    <img src="./assets/images/categories/${item}.png" alt="">
    </span>
    <p class="item-name text-bold">${item}</p>
    </button>
    `;
    
    foodCategoryContainer.innerHTML += item;
  }; 

  // Identify the default active category tab
  let activeFoodCategoryTabName = foodCategoryList[0];


// Colletion of DOM elements for each item
const foodCategorytTabs = {};
for (item of document.querySelectorAll(".category .items .item")) {
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
  
