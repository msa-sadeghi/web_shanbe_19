fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => renderUsers(data))
.catch(error => console.log(error))

const usersElement = document.querySelector(".users")

function renderUsers(users){
    users.forEach(user => {
        const userCard = document.createElement("div")
        userCard.classList.add("note")
        const header = document.createElement("div")
        header.classList.add("note-header")
        const id = document.createElement("span")
        id.innerText = user.id
        const name = document.createElement("span")
        name.innerText = user.name

        header.append(id, name)
        const username = document.createElement("span")
        username.innerText = user.username

        userCard.append(header, username)
        usersElement.append(userCard)
    });
}