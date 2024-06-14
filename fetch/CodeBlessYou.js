const data = {
    title: " This is title",
    body: "This is post body",
    userId: 2
}

fetch('https://jsonplaceholder.typicode.com/users', {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        "Content-type": 'application/json'
    }
})
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));