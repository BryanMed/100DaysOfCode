const button = document.querySelector("button");
const mealContainer = document.querySelector("#meal");
const img = document.querySelector(".card-img-top");

const randomRecipe = async () => {
  const recipe = await getRandomRecipe();
  mealContainer.innerHTML = `
  <h1>${recipe.strMeal}</h1>
<div id="etiquetas" class="text-justify"></div>
<div id="meal">
  <div class="card">
    <img class="card-img-top" src="${
      recipe.strMealThumb
    }" alt="Card image cap"/>
      <div class="card-body">
        <h6 class="card-title">
            
          <div class="row text-left">
          <div class="col-4">
            <strong>Categoría: </strong> ${recipe.strCategory}
            <br>
            <strong>País: </strong> ${recipe.strArea}
            <br>
            <strong>Ingredientes:</strong>              
            <ul id="ingredients" class="pl-3">
            <br>
            </ul>
          </div>

          <div class="col-8 text-justify">
            <h3>Receta</h3>
            <p>
            ${recipe.strInstructions}
            </p>
          </div>
                
          <h3>Video</h3>
          <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/${recipe.strYoutube.slice(
              -11
            )}" allowfullscreen></iframe>
          </div>
        </h6>
      </div>
    </div>
  </div>
    `;

  const card = document.querySelector("#etiquetas");
  if (recipe.strTags) {
    const tagNames = recipe.strTags.split(",");
    for (let tag of tagNames) {
      const badge = document.createElement("span");
      badge.classList.add("badge");
      badge.classList.add("badge-pill");
      badge.classList.add("badge-danger");
      badge.innerHTML = tag;
      card.append(badge);
    }
  }

  const ingredientes = document.querySelector("#ingredients");
  for (let i = 1; i < 20; i++) {
    if (recipe[`strIngredient${i}`]) {
      const li = document.createElement("li");
      li.append(`${recipe[`strIngredient${i}`]} - ${recipe[`strMeasure${i}`]}`);
      ingredientes.append(li);
    } else {
      break;
    }
  }
};

const getRandomRecipe = async () => {
  const res = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );
  return res.data.meals[0];
};

button.addEventListener("click", randomRecipe);
