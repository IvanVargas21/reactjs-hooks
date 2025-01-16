// function oddOrEven(num1, num2){
//     const result1 = num1 % 2 === 0 ? "Even" : "Odd";
//     const result2 = num2 % 2 === 0 ? "Even" : "Odd";

//     return `First Number: ${num1} is ${result1}, Second Number: ${num2} is ${result2}`
// }

// console.log(oddOrEven(6,7));

const fetchData = async () =>{
    try{
        const userInput  = document.getElementById("searchInput").value.toLowerCase();
        const pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}`);
        
        if(!pokemonData.ok){
            throw new Error ('Could not find pokemon')
        }

        const data = await pokemonData.json();
        console.log(data)
        const pokemonImage = data.sprites.front_default;

        const displayPokemon = document.getElementById('pokemonImg')

        displayPokemon.src = pokemonImage;
        displayPokemon.style.display ="block"
        
    }catch(error){
        console.log(error)
    }
}

const searchButton = document.getElementById('search-button')
searchButton.addEventListener('click', fetchData)