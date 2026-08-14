const btn = document.querySelector("#btn");
const input = document.querySelector("#name");
const result = document.querySelector("#final");
// console.log("connected");
btn.addEventListener("click",async function() {
    const username = input.value.trim(); // trim is used to clear extra spaces in the username
    if (username === "") {
        alert("Please enter a username");
        return;
    }
    const URL = `https://api.github.com/users/${username}`;
    const response = await fetch(URL);
    const data = await response.json();
    result.innerText = username;

    result.innerHTML = `
        <img class="avatar" src="${data.avatar_url}" >

        <h2>${data.name}</h2>

        <p><strong>Username:</strong> ${data.login}</p>

        <p><strong>Followers:</strong> ${data.followers}</p>

        <p><strong>Following:</strong> ${data.following}</p>

        <p><strong>Public Repositories:</strong> ${data.public_repos}</p>

        <p><strong>Bio:</strong> ${data.bio}</p>
    `;
});

