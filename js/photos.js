function loadPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayPhotos(data))
}

function displayPhotos(photos) {
    const photosContainer = document.getElementById('photo-container');
    for (const photo of photos) {

        //Creating tags
        const div = document.createElement('div');


        //Adding the element to the tags
        div.innerHTML = `
        <h1>Id: ${photo.id}</h1>
        <h2>Album Id: ${photo.albumId}</h2>
        <h3>Title: ${photo.title}</h3>
        <img src=${photo.url}>
        `;

        photosContainer.appendChild(div);
    }
}