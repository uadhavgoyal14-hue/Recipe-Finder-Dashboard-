const recipes = [
{
    name: "Aloo Paratha",
    category: "Breakfast",
    calories: "280 kcal",
    image: "https://homemademenus.com/wp-content/uploads/2025/10/aloo-paratha-spiced-potato-stuffed-flatbread-1-1.png",
    description: "Traditional Indian flatbread stuffed with spiced potatoes.",
    ingredients: [
        "2 cups wheat flour",
        "3 boiled potatoes",
        "1 tsp red chilli powder",
        "1 tsp cumin seeds",
        "Salt to taste",
        "Ghee for cooking"
    ],
    steps: [
        "Mash boiled potatoes and mix spices.",
        "Prepare soft dough using wheat flour.",
        "Stuff potato mixture into dough balls.",
        "Roll into parathas.",
        "Cook on a hot tawa with ghee until golden brown."
    ]
},
{
    name: "Samosa",
    category: "Breakfast",
    calories: "180 kcal",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500",
    description: "Light and healthy flattened rice dish.",
    ingredients: [
        "2 cups poha",
        "1 onion",
        "1 potato",
        "Mustard seeds",
        "Curry leaves",
        "Salt"
    ],
    steps: [
        "Wash poha and keep aside.",
        "Heat oil and add mustard seeds.",
        "Add onion and potato, cook well.",
        "Mix poha and spices.",
        "Cook for 3-4 minutes and serve."
    ]
},
{    name: "Vegetable Upma",
    category: "Breakfast",
    calories: "220 kcal",
    image: "http://3.bp.blogspot.com/-hoLW911eEss/UJNk8KebCVI/AAAAAAAAO-k/ILwN6LGb_04/s1600/Vegetable+Upma+(3)+-+1.jpg",
    description: "South Indian semolina breakfast with vegetables and spices.",
    ingredients: [
        "1 cup semolina (rava)",
        "1 onion",
        "1 carrot",
        "1/2 cup green peas",
        "Mustard seeds",
        "Curry leaves",
        "Salt",
        "Water",
        "Ghee"
    ],
    steps: [
        "Dry roast semolina until fragrant.",
        "Sauté mustard seeds, onions, vegetables, and curry leaves.",
        "Add water, salt, and bring to a boil.",
        "Add semolina slowly while stirring.",
        "Cook until soft and garnish with coriander."
    ]
},
{
    name: "French Toast",
    category: "Breakfast",
    calories: "260 kcal",
    image: "https://www.seriouseats.com/thmb/_nSWyhg_GmvdjUwMMvX7KG6lYNQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/perfect-quick-easy-french-toast-hero-03-2a9485bbb12b4cf5abcfef53aa9accd9.jpg",
    description: "Sweet egg-soaked bread slices cooked until golden brown.",
    ingredients: [
        "4 slices bread",
        "2 eggs",
        "1/4 cup milk",
        "1 tsp cinnamon",
        "1 tsp vanilla extract",
        "Butter",
        "Maple syrup"
    ],
    steps: [
        "Whisk eggs, milk, cinnamon, and vanilla.",
        "Dip bread slices into the mixture.",
        "Cook on buttered pan until golden brown on both sides.",
        "Serve warm with maple syrup."
    ]
},
{    name: "Dal Makhani",
    category: "Dinner",
    calories: "250 kcal",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500",
    description: "Healthy combination of rice and lentils.",
    ingredients: [
        "1 cup rice",
        "1/2 cup moong dal",
        "Turmeric",
        "Salt",
        "Water"
    ],
    steps: [
        "Wash rice and dal.",
        "Add all ingredients to pressure cooker.",
        "Cook for 3 whistles.",
        "Mash lightly and serve hot."
    ]
},
{
    name: "Paneer Salad",
    category: "Breakfast",
    calories: "200 kcal",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500",
    description: "Protein-rich paneer with fresh vegetables.",
    ingredients: [
        "200g paneer",
        "Cucumber",
        "Tomato",
        "Onion",
        "Black pepper",
        "Salt"
    ],
    steps: [
        "Cut paneer and vegetables.",
        "Mix in a bowl.",
        "Add salt and pepper.",
        "Serve fresh."
    ]
},
{
    name: "Mango Kulfi",
    category: "Dessert",
    calories: "220 kcal",
    image: "https://www.secondrecipe.com/wp-content/uploads/2021/05/mango-kulfi-500x500.jpg",
    description: "Creamy Indian mango ice cream made with condensed milk.",
    ingredients: [
        "2 cups milk",
        "1/2 cup condensed milk",
        "1/2 cup mango pulp",
        "2 tbsp sugar",
        "A pinch of cardamom"
    ],
    steps: [
        "Boil milk until slightly thickened.",
        "Add condensed milk, sugar, and cardamom.",
        "Mix in mango pulp and simmer.",
        "Pour into molds and freeze until set.",
        "Serve chilled."
    ]
},
{
    name: "Chocolate Brownie",
    category: "Dessert",
    calories: "320 kcal",
    image: "https://www.recipetineats.com/tachyon/2020/03/Brownies_0-SQ.jpg?resize=85",
    description: "Rich and fudgy chocolate brownie squares.",
    ingredients: [
        "1/2 cup butter",
        "1 cup sugar",
        "2 eggs",
        "1/3 cup cocoa powder",
        "1/2 cup flour",
        "1 tsp vanilla extract"
    ],
    steps: [
        "Melt butter and mix with sugar.",
        "Add eggs and vanilla, then stir in cocoa and flour.",
        "Pour into a baking pan and bake at 180°C for 20-25 minutes.",
        "Cool, cut into squares, and serve."
    ]
},
{
    name: "Gulab Jamun",
    category: "Dessert",
    calories: "260 kcal",
    image: "https://as2.ftcdn.net/v2/jpg/08/94/76/25/1000_F_894762571_KXz2mTpbcjHRGMg48iiU4CnI9v7La4EN.jpg",
    description: "Soft milk dumplings soaked in sweet cardamom syrup.",
    ingredients: [
        "1 cup milk powder",
        "1/4 cup flour",
        "1/4 tsp baking soda",
        "2 tbsp ghee",
        "Milk",
        "Sugar syrup"
    ],
    steps: [
        "Mix milk powder, flour, baking soda, and ghee.",
        "Add milk to form a smooth dough.",
        "Shape into small balls and deep fry until golden.",
        "Soak fried balls in warm sugar syrup.",
        "Serve warm or chilled."
    ]
},
{
    name: "Jalebi",
    category: "Dessert",
    calories: "280 kcal",
    image: "https://thatdeliciousdish.com/wp-content/uploads/2018/09/Thumbnail-Jalebi-and-Rabri-recipe-scaled.jpg",
    description: "Crispy spirals soaked in saffron sugar syrup.",
    ingredients: [
        "1 cup all-purpose flour",
        "1/2 cup yogurt",
        "1/2 cup water",
        "Sugar",
        "Saffron",
        "Ghee"
    ],
    steps: [
        "Make a batter and ferment for a few hours.",
        "Pipe batter into hot ghee in spiral shapes.",
        "Fry until crisp and golden.",
        "Soak in warm saffron sugar syrup for a few minutes.",
        "Serve immediately."
    ]
},
{
    name: "Palak Paneer",
    category: "Lunch",
    calories: "270 kcal",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500",
    description: "Spinach and cottage cheese curry.",
    ingredients: [
        "250g spinach",
        "200g paneer",
        "1 onion",
        "2 tomatoes",
        "Spices"
    ],
    steps: [
        "Boil spinach and make puree.",
        "Cook onion and tomato masala.",
        "Add spinach puree.",
        "Add paneer cubes.",
        "Cook for 5 minutes and serve."
    ]
}
,
{
    name: "Cheeseburger",
    category: "Lunch",
    calories: "520 kcal",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500",
    description: "Juicy beef patty with melted cheese, lettuce and tomato.",
    ingredients: [
        "200g ground beef",
        "2 burger buns",
        "Cheddar cheese slices",
        "Lettuce",
        "Tomato",
        "Onion",
        "Salt and pepper",
        "Butter"
    ],
    steps: [
        "Season and shape the beef into patties.",
        "Grill or pan-fry patties until cooked.",
        "Melt cheese on top of patties.",
        "Toast buns with butter.",
        "Assemble burger with lettuce, tomato, onion and serve."
    ]
},
{
    name: "Creamy Alfredo Pasta",
    category: "Dinner",
    calories: "430 kcal",
    image: "https://www.sharmispassions.com/wp-content/uploads/2015/12/alfredopasta2.jpg",
    description: "Pasta tossed in a rich and creamy Alfredo sauce.",
    ingredients: [
        "200g fettuccine or pasta of choice",
        "1 cup heavy cream",
        "1/2 cup grated Parmesan",
        "2 tbsp butter",
        "2 cloves garlic",
        "Salt and pepper"
    ],
    steps: [
        "Cook pasta according to package instructions.",
        "Sauté garlic in butter, add cream and simmer.",
        "Stir in Parmesan until sauce thickens.",
        "Toss pasta with sauce and season to taste.",
        "Serve garnished with extra Parmesan."
    ]
},
{
    name: "Club Sandwich",
    category: "Lunch",
    calories: "350 kcal",
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=500",
    description: "Classic triple-layer sandwich with chicken, bacon and veggies.",
    ingredients: [
        "3 slices of bread",
        "Cooked chicken slices",
        "Bacon",
        "Lettuce",
        "Tomato",
        "Mayonnaise",
        "Salt and pepper"
    ],
    steps: [
        "Toast the bread slices lightly.",
        "Spread mayonnaise and layer chicken, bacon, lettuce and tomato.",
        "Stack and secure with toothpicks, then slice and serve."
    ]
},
{
    name: "Margherita Pizza",
    category: "Dinner",
    calories: "300 kcal",
    image: "https://i.pinimg.com/originals/57/e7/a1/57e7a19334571946391a7430fcb86202.png",
    description: "Simple pizza with fresh tomato, basil and mozzarella.",
    ingredients: [
        "Pizza dough",
        "Tomato sauce",
        "Fresh mozzarella",
        "Fresh basil",
        "Olive oil",
        "Salt"
    ],
    steps: [
        "Preheat oven and prepare dough.",
        "Spread tomato sauce, add mozzarella and bake until crust is golden.",
        "Garnish with basil and drizzle olive oil before serving."
    ]
},
{
    name: "Pepperoni Pizza",
    category: "Dinner",
    calories: "360 kcal",
    image: "https://healthywayrecipes.com/wp-content/uploads/2025/01/Classic-Pepperonis-Pizza-Fresh-from-the-Oven.png",
    description: "Classic pepperoni pizza with a crispy crust.",
    ingredients: [
        "Pizza dough",
        "Tomato sauce",
        "Mozzarella",
        "Pepperoni slices",
        "Olive oil"
    ],
    steps: [
        "Assemble pizza with sauce, cheese and pepperoni.",
        "Bake until cheese bubbles and crust is crisp.",
        "Slice and serve hot."
    ]
},
{
    name: "Gol Gappa (Pani Puri)",
    category: "Lunch",
    calories: "120 kcal",
    image: "https://static.vecteezy.com/system/resources/previews/045/703/417/large_2x/close-up-of-panipuri-or-gol-gappa-or-chaat-indian-fast-food-chaat-spices-photo.jpeg",
    description: "Crispy puris filled with spicy tamarind water and fillings.",
    ingredients: [
        "Puris (store-bought or homemade)",
        "Tamarind chutney",
        "Spiced water (pani)",
        "Boiled potato",
        "Boiled chickpeas",
        "Chaat masala"
    ],
    steps: [
        "Make spiced pani (tamarind + mint + spices).",
        "Fill puris with potato and chickpeas.",
        "Pour pani into each puri and eat immediately."
    ]
}
];

const recipeContainer = document.getElementById("recipeContainer");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

const modal = document.getElementById("recipeModal");
const modalTitle = document.getElementById("modalTitle");
const ingredientsList = document.getElementById("ingredientsList");
const stepsList = document.getElementById("stepsList");
const closeBtn = document.getElementById("closeBtn");

function showRecipe(index) {

    const recipe = recipes[index];

    modalTitle.textContent = recipe.name;

    ingredientsList.innerHTML = "";
    stepsList.innerHTML = "";

    recipe.ingredients.forEach(item => {
        ingredientsList.innerHTML += `<li>${item}</li>`;
    });

    recipe.steps.forEach(step => {
        stepsList.innerHTML += `<li>${step}</li>`;
    });

    modal.style.display = "block";
}

function displayRecipes(recipeList) {

    recipeContainer.innerHTML = "";

    if (recipeList.length === 0) {
        recipeContainer.innerHTML = "<h2>No recipes found!</h2>";
        return;
    }

    recipeList.forEach(recipe => {

        const originalIndex = recipes.indexOf(recipe);

        recipeContainer.innerHTML += `
            <div class="recipe-card" onclick="showRecipe(${originalIndex})">
                <img src="${recipe.image}" alt="${recipe.name}" onerror="this.onerror=null;this.src='https://via.placeholder.com/500?text=No+Image'">
                <div class="recipe-content">
                    <span class="category">${recipe.category}</span>
                    <h3>${recipe.name}</h3>
                    <p>${recipe.description}</p>
                    <p><strong>Calories:</strong> ${recipe.calories}</p>
                </div>
            </div>
        `;
    });
}

function filterRecipes() {

    const searchValue = searchInput.value.toLowerCase();
    const categoryValue = categoryFilter.value;

    const filteredRecipes = recipes.filter(recipe => {

        const matchesSearch =
            recipe.name.toLowerCase().includes(searchValue);

        const matchesCategory =
            categoryValue === "all" ||
            recipe.category === categoryValue;

        return matchesSearch && matchesCategory;
    });

    displayRecipes(filteredRecipes);
}

searchInput.addEventListener("input", filterRecipes);
categoryFilter.addEventListener("change", filterRecipes);

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

displayRecipes(recipes);