// const pokemonName = document.getElementById('pokemonName');
// const pokemonSprite = document.getElementById('pokemonSprite');


// fetchImage()
// function fetchImage() {
//     const pokemonImg = pokemonName.value.toLowerCase();

//     fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonImg}`)
//         .then(res => {
//             if (!res.ok) {
//                 throw Error('There\'s no image because of link');
//                 // console.log('There\'s no image because of link');
//             }
//             return res.json();
//         })
//         .then(data => {
//             let imgData = data.sprites.front_default
//             pokemonSprite.src = imgData;
//             pokemonSprite.style.display = 'block'
//         })
//         .catch(error => console.log(error));
// }

fetchImage()
function fetchImage() {

    const pokemonName = document.getElementById('pokemonName');
    const pokemonSprite = document.getElementById('pokemonSprite');


}