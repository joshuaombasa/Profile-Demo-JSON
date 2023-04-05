import users from './data.js'


console.log(users[0].username)

const container = document.getElementById("container")

const usersHtml = users.map((user) => {
    return `
    <div class="user-profile">
        <div class="image"></div>
        <p>${user.username}</p>
        <p>${user.firstName} ${user.lastName}</p>
        <p>${user.gender}</p>
        <p>${user.email}</p>
    </div>`
}).join("")

container.innerHTML = usersHtml