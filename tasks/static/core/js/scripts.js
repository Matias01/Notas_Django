const username = document.querySelector("[data-name]")
const formUser = document.querySelector("[data-form]")

formUser.addEventListener('submit', (e) => {
    let nombre = String(username.value).trim()
    if (nombre.length === 0) {
        alert("El nombre del usuario no puede estar vacío")
        e.preventDefault()
    }
})
