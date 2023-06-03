let foodCategoriesItems = ["burger", "pizza", "salad", "chicken"];
const foodCategoryitemsDom = document.querySelector(".category .items");
console.log(foodCategoryitemsDom);
// Render each food category item 
for (item of foodCategoriesItems) {
  item = `
    <button class="btn btn-secondary item ${item === 'burger' ? 'active': "" }" onclick="${item}()">
    <span class="item-bg">
      <img src="./assets/images/categories/${item}.png" alt="">
    </span>
    <p class="item-name">${item}</p>
  </button>
    `;
  
  foodCategoryitemsDom.innerHTML += item;
}
