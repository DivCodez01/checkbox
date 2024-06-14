
fetchImage()
function fetchImage() {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(res => {
            if (!res.ok) {
                console.log('There\'s no image because of link')
            }
            return res.json();
        })
        .then(data => console.log(data))
        .catch(error => console.log(error));
}