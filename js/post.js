function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))
}

function displayPost(posts) {

    const postContainer = document.getElementById('post-container');
    for (const post of posts) {
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
        <h2> Post No: ${post.id}</h2>
        <h4> ${post.title} </h4>
        <p> ${post.body} </p>
        `
        postContainer.appendChild(div);
    }
}