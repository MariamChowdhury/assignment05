const searchButton=()=>{
  const searchText=document.getElementById('food-name').value;
  const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
  fetch(url)
  .then(res=>res.json())
  .then(data=>displayFood(data.meals))
}
const displayFood=food=>{
  const showFood=document.getElementById('show-foods');
  showFood.innerHTML='';
  food.forEach(food =>{
  const foodDiv=document.createElement('div');
  foodDiv.className='card';
  foodDiv.innerHTML=`
  <img onclick="showIngredients('${food.idMeal}')" class="card-img-top" src="${food.strMealThumb}">
  <h3 onclick="showIngredients('${food.idMeal}')" class="card-text">${food.strMeal}</h3>
  `
  showFood.appendChild(foodDiv);
});
}

 const showIngredients=(id)=>{

  const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>showDetails(data.meals));
 }
 const showDetails=details=>{
   const detailsContainer=document.getElementById('show-food-recipe');
   detailsContainer.innerHTML='';
   details.forEach(details =>{ 
     const recipeDiv=document.createElement('div');
   recipeDiv.innerHTML=`
   <img class="card-img-top" src="${details.strMealThumb}">
   <h3 class="text m-2">${details.strMeal}</h3>
   <ul class="pb-5">
      <li>${details.strIngredient1}</li>
      <li>${details.strIngredient2}</li>
      <li>${details.strIngredient3}</li>
      <li>${details.strIngredient4}</li>
      <li>${details.strIngredient5}</li>
      <li>${details.strIngredient6}</li>
   </ul>
    `
   detailsContainer.appendChild(recipeDiv);
  });
  
 }
