const socket = io('ws://localhost:3500')

function sendMessage(e) {
    e.preventDefault()
    const input = document.querySelector('input')
    if (input.value) {
        socket.emit('message', input.value)
        input.value = ""
    }
    input.focus()
}

document.querySelector('form')
    .addEventListener('submit', sendMessage)

// Listen for messages 
socket.on("message", (data) => {
    const li = document.createElement('li')
   li.innerHTML = `
  <img src="images/user.png" class="avatar" alt="User" />
  <span>${data}</span>
`

    document.querySelector('ul').appendChild(li)
})