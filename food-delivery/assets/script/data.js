export const foodCategoryList = ["burger", "pizza", "salad", "chicken", "sushi"];


export const restaurantsMenu = [
    {
      name: "Chicken Burger",
      restaurant: "Chillox",
      category: "Burger",
      bigPhotoName: "chillox-chicken-burger.png",
      smallPhotoName: "chillox-chicken-burger.png",      
      desc: "Chicken Patty and special sauce",
      price: 3500
    },
    {
      name: "Beef Burger",
      restaurant: "Chillox",
      category: "Burger",
      bigPhotoName: "chillox-beef-burger.png",
      smallPhotoName: "chillox-beef-burger.png",      
      desc: "Beef Patty and special sauce",
      price: 5790
    },
    {
      name: "French Fries",
      restaurant: "Chillox",
      category: "Fries",
      bigPhotoName: "chillox-french-fries.png",
      smallPhotoName: "chillox-french-fries.png",      
      desc: "Sliced deep fries potatoes",
      price: 2800
    },
    {
      name: "Naga Drums",
      restaurant: "Chillox",
      category: "Chicken",
      bigPhotoName: "chillox-naga-drums.png",
      smallPhotoName: "chillox-naga-drums.png",      
      desc: "Crispy fried chicken drum",
      price: 7200
    },
    {
      name: "XL Burger",
      restaurant: "Chillox",
      category: "Burger",
      bigPhotoName: "chillox-xl-burger.png",
      smallPhotoName: "chillox-xl-burger.png",      
      desc: "Cheese & beef pastra",
      price: 7920
    },
    {
      name: "Chicken Fried",
      restaurant: "Chillox",
      category: "Chicken",
      bigPhotoName: "chillox-chicken-fried.png",
      smallPhotoName: "chillox-chicken-fried.png",      
      desc: "Delicious crispy fried breaded chicken",
      price: 5750
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