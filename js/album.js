function loadAlbums() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => displayAlbums(data))
}

function displayAlbums(data) {
    const albumContainer = document.getElementById('albums');
    for (const album of data) {

        const div = document.createElement('p');
        div.innerText = album.title;
        albumContainer.appendChild(div);
    }
}