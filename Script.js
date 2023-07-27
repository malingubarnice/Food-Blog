//Recipe data array with different recipe objects
const recipes = [
    {
        image: "Chicken.jpg",
        description: "This is Kolkata Chicken Chaap Recipe description",
    },
    {
        image: "Friedrice.jpg",
        description: "This is Fried Rice Recipe description"

    },
    {
        image: "Cupcake.jpg" ,
        description: "This is Vanilla Cupcake Recipe description",
        
    },
];

//Function to display arandom recipe
function displayRandomRecipe() {
    //Get a random index within the range of the recipe array
    const randomIndex = Math.floor(Math.random() * recipes.length);

    //Get the recipe object ath the random index
    const randomRecipe = recipes[randomIndex];

    //update the recipe image and description in the HTML
    const recipeImage = document.getElementById("recipeimage");
    const recipeDescription= document.getElementById("recipedescription");

    recipeImage.src = randomRecipe.image;
    recipeDescription.textContent = randomRecipe.description;
}

//Call the function to display a random recipe when the page is loaded or refreshed
window.onload = displayRandomRecipe;


document.getElementById("homeButton").addEventListener("click" ,function (){
    window.location.href="Homepage.html";
});

document.getElementById("galleryButton").addEventListener("click" ,function (){
    window.location.href="Gallerycollection.html";
});

document.getElementById("contactButton").addEventListener("click", function (){
    window.location.href="Contactus.html";
});

document.getElementById("aboutButton").addEventListener("click", function(){
    window.location.href="Aboutus.html";
});

document.getElementById("mapsButton").addEventListener("click", function(){
    window.location.href="Maps.html";
});



