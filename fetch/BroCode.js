const pokemonName = document.getElementById('pokemonName');
const pokemonSprite = document.getElementById('pokemonSprite');


fetchImage()
function fetchImage() {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(res => {
            if (!res.ok) {
                console.log('There\'s no image because of link')
            }
            return res.json();
        })
        .then(data => {
            let imgData = data.sprites.front_default
            console.log(imgData)
            pokemonSprite.src = imgData;
            pokemonSprite.style.display = 'block'
            console.log(pokemonSprite)
        })
        .catch(error => console.log(error));
}