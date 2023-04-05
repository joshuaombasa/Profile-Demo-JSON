import users from './data.js'


console.log(users[0].username)

const container = document.getElementById("container")

const usersHtml = users.map((user) => {
    return `<div class="user-profile">${user.username}</div>`
}).join("")

container.innerHTML = usersHtml