import users from './data.js'

const container = document.getElementById("container")

const usersHtml = users.map((user) => {
    return `<div class="user-profile">${user}</div>`
})

container.innerHTML = usersHtml