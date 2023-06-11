
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
  

restaurantsMenu = [
  {
    name: "Chicken Burger",
    restaurant: "Chillox",
    category: "Burger",
    photoPath: "./assets/images/menu/chillox-chikena-burger.png",
    desc: "Chicken Patty and special sauce",
    price: 4.99
  },
  {
    name: "Beef Burger",
    restaurant: "Chillox",
    category: "Burger",
    photoPath: "./assets/images/menu/chillox-beef-burger.png",
    desc: "Beef Patty and special sauce",
    price: 7.99
  },
  {
    name: "French Fries",
    restaurant: "Chillox",
    category: "Burger",
    photoPath: "./assets/images/menu/chillox-french-fries.png",
    desc: "Sliced deep fries potatoes",
    price: 3.99
  },
  {
    name: "Naga Drums",
    restaurant: "Chillox",
    category: "Chicken",
    photoPath: "./assets/images/menu/chillox-naga-drums.png",
    desc: "Crispy fried chicken drum",
    price: 9.99
  },
  {
    name: "XL Burger",
    restaurant: "Chillox",
    category: "Burger",
    photoPath: "./assets/images/menu/chillox-xl-burger.png",
    desc: "Cheese & beef pastra",
    price: 11.00
  },
  {
    name: "Chicken Fried",
    restaurant: "Chillox",
    category: "Chicken",
    photoPath: "./assets/images/menu/chillox-chicken-fried.png",
    desc: "Delicious crispy fried breaded chicken",
    price: 7.99
  }
]



const restaurants = [
  {
    name: "Chillox",
    category: "Burger",
    rating: 4.8,
    profilePhotoPath: "./assets/images/restaurants/chillox.png",
    coverPhotoPath: "./assets/images/cover/chillox.png",
    delivery: "free",
  },
  {
    name: "Madchef",
    category: "Burger",
    rating: 4.0,
    profile: "./assets/images/restaurants/madchef-profile.png",
    cover: "./assets/images/cover/madchef-cover.png",
    delivery: "free"
  },
  {
    name: "McDonalds",
    category: "Burgers",
    rating: 4.9,
    profile: "./assets/images/restaurants/mcdonalds-profile.png",
    cover: "./assets/images/cover/mcdonalds-cover.png",
    delivery: "free"  
  },
  {
    name: "Burger King",
    category: "Burgers",
    rating: 4.9,
    profile: "./assets/images/restaurants/burger-king-profile.png",
    cover: "./assets/images/cover/burger-king-cover.png",
    delivery: "free"
  }
];


// Display Popurlar restaurant Items
const popularDom = document.querySelector(".popular");
console.log(popularDom);