export const foodCategoryList = ["burger", "pizza", "salad", "chicken", "sushi"];


export const restaurantsMenu = [
    {
      bigPhotoName: "chillox-chicken-burger.png",
      deliveryFee: "Free",
      desc: "Chicken Patty and special sauce",
      category: "Burger",
      ingredients: [],
      name: "Chicken Burger",
      price: 3500,
      rating: 4.4,
      restaurant: "Chillox",
      smallPhotoName: "chillox-chicken-burger.png",
      about:"This special beef burger uses special quality beef with sliced lettuce."

    },
    {
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

    },
    {
      bigPhotoName: "chillox-french-fries.png",
      category: "Fries",
      deliveryFee: "Free",
      desc: "Sliced deep fries potatoes",
      ingredients: [],
      name: "French Fries",
      price: 2800,
      rating: 4.2,
      restaurant: "Chillox",
      smallPhotoName: "chillox-french-fries.png",
      about:"This special beef burger uses special quality beef with sliced lettuce."

    },
    {
      bigPhotoName: "chillox-naga-drums.png",
      category: "Chicken",
      deliveryFee: "Free",
      desc: "Crispy fried chicken drum",
      ingredients: [],
      name: "Naga Drums",
      price: 7200,
      rating: 4.8,
      restaurant: "Chillox",
      smallPhotoName: "chillox-naga-drums.png",
      about:"This special beef burger uses special quality beef with sliced lettuce."

    },
    {
      bigPhotoName: "chillox-xl-burger.png",
      category: "Burger",
      deliveryFee: "Free",
      desc: "Cheese & beef pastra",
      ingredients: [],
      name: "XL Burger",
      price: 7920,
      rating: 4.5,
      restaurant: "Chillox",
      smallPhotoName: "chillox-xl-burger.png",
      about:"This special beef burger uses special quality beef with sliced lettuce."

    },
    {
      bigPhotoName: "chillox-chicken-fried.png",
      category: "Chicken",
      deliveryFee: "Free",
      desc: "Delicious crispy fried breaded chicken",
      ingredients: [],
      name: "Chicken Fried",
      price: 5750,
      rating: 4.9,
      restaurant: "Chillox",
      smallPhotoName: "chillox-chicken-fried.png",
      about:"This special beef burger uses special quality beef with sliced lettuce."

    }
];


export const restaurants = {
  chillox: {
    name: "Chillox",
    menuCategory: ["popular", "burger", "frenchfries", "chicken"],
    rating: 4.7,
    profilePhoto: "chillox-profile.png",
    coverPhoto: {
      burger: "chillox-burger-cover.png"
    },
    deliveryFee: "Free",
    rating: 4.2
  },
  madchef: {
    name: "Madchef",
    menuCategory: ["popular", "burger"],
    rating: 4.0,
    profilePhoto: "madchef-profile.jpg",
    coverPhoto: {
      burger: "madchef-cover.png"
    },
    deliveryFee: "Free",
    rating: 4.1
  },
  mcdonalds: {
    name: "McDonalds",
    menuCategory: ["popular", "burger"],
    rating: 4.9,
    profilePhoto: "mcdonalds-profile.jpg",
    coverPhoto: {
      burger: "mcdonalds-cover.png"
    },
    deliveryFee: "Free",
    rating: 4.9
  },
  burgerking: {
    name: "Burger King",
    menuCategory: ["popular", "burger"],
    rating: 4.8,
    profilePhoto: "burger-king-profile.png",
    coverPhoto: {
      burger: "burger-king-cover.jpg"
    },
    deliveryFee: "Free",
    rating: 4.8
  }
};



// export {foodCategoryList, restaurants, restaurantsMenu};