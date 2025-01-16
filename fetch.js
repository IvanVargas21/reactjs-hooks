const fetchData = async () => {
        try {
            const userInput = document.getElementById('searchInput').value.toLowerCase()
            const data = await fetch (`https://pokeapi.co/api/v2/pokemon/${userInput}`)

            const pokemonData = await data.json();
            console.log(pokemonData)
            //
            const img = document.getElementById('pokemonImg')
            img.src = pokemonData.sprites.front_default;
            img.style.display = "block";
        }catch(error){
            console.log(error)
        }
};

const btn = document.getElementById("search-button");
btn.addEventListener('click', fetchData)
