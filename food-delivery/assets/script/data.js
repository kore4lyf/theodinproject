export const foodCategoryList = ["burger", "pizza", "salad", "chicken", "sushi"];


export const restaurantsMenu = [
    {
      name: "Chicken Burger",
      restaurant: "Chillox",
      category: "Burger",
      photoName: "./assets/images/menu/chillox-chikena-burger.png",
      desc: "Chicken Patty and special sauce",
      price: 4.99
    },
    {
      name: "Beef Burger",
      restaurant: "Chillox",
      category: "Burger",
      photoName: "./assets/images/menu/chillox-beef-burger.png",
      desc: "Beef Patty and special sauce",
      price: 7.99
    },
    {
      name: "French Fries",
      restaurant: "Chillox",
      category: "Burger",
      photoName: "./assets/images/menu/chillox-french-fries.png",
      desc: "Sliced deep fries potatoes",
      price: 3.99
    },
    {
      name: "Naga Drums",
      restaurant: "Chillox",
      category: "Chicken",
      photoName: "./assets/images/menu/chillox-naga-drums.png",
      desc: "Crispy fried chicken drum",
      price: 9.99
    },
    {
      name: "XL Burger",
      restaurant: "Chillox",
      category: "Burger",
      photoName: "./assets/images/menu/chillox-xl-burger.png",
      desc: "Cheese & beef pastra",
      price: 11.00
    },
    {
      name: "Chicken Fried",
      restaurant: "Chillox",
      category: "Chicken",
      photoName: "./assets/images/menu/chillox-chicken-fried.png",
      desc: "Delicious crispy fried breaded chicken",
      price: 7.99
    }
];


export const restaurants = [
  {
    name: "Chillox",
    menuCategory: ["burger", "frenchfries", "chicken"],
    rating: 4.8,
    profilePhotoName: "chillox-profile.png",
    coverPhotoName: {
      burger: "chillox-burger-cover.png"
    },
    delivery: "Free",
    deliveryTime: 10
  },
  {
    name: "Madchef",
    menuCategory: ["burger"],
    rating: 4.0,
    profilePhotoName: "madchef-profile.jpg",
    coverPhotoName: {
      burger: "madchef-cover.png"
    },
    delivery: "Free",
    deliveryTime: 10
  },
  {
    name: "McDonalds",
    menuCategory: ["burger"],
    rating: 4.9,
    profilePhotoName: "mcdonalds-profile.jpg",
    coverPhotoName: {
      burger: "mcdonalds-cover.png"
    },
    delivery: "Free",
    deliveryTime: 10  
  },
  {
    name: "Burger King",
    menuCategory: ["burger"],
    rating: 4.9,
    profilePhotoName: "burger-king-profile.png",
    coverPhotoName: {
      burger: "burger-king-cover.jpg"
    },
    delivery: "Free",
    deliveryTime: 10
  }
];



// export {foodCategoryList, restaurants, restaurantsMenu};