function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}
function loadUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        // .then(data => console.log(data))
        .then(data => displayUsers(data));
}
function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => displayPost(data))
}
function loadAlbum() {
    fetch('https://jsonplaceholder.typicode.com/albums').then(res => res.json()).then(data => console.log(data))
}

function displayUsers(data) {
    // console.log(data);
    const ul = document.getElementById('users');
    for (const user of data) {
        // console.log(user);
        // console.log(user.name);
        const li = document.createElement('li');
        li.innerText = `Name: ${user.name} 
        Email: ${user.email}
        Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`;
        ul.appendChild(li)
    }
}

function displayPost(posts) {
    const div = document.getElementById('posts');
    for (const post of posts) {
        const title = document.createElement('h2');
        title.innerText = post.title;

        const body = document.createElement('p');
        body.innerText = post.body;

        div.appendChild(title);
        div.appendChild(body);

    }
}

function loadComments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComments(data))
}
function displayComments(data) {
    const div = document.getElementById('comment-section');
    for (const datrum of data) {

        //Creating tag for the context
        const name = document.createElement('h2');
        const email = document.createElement('h5');
        const comment = document.createElement('p');

        //Adding Text to the tag
        name.innerText = datrum.name;
        email.innerText = datrum.email;
        comment.innerText = datrum.body;

        //Adding to the website
        div.appendChild(name);
        div.appendChild(email);
        div.appendChild(comment);
    }
}