const ul = document.querySelector('ul')
const input = document.querySelector('input')

function get() {
    const li = document.createElement('li')
    li.innerText = input.value
    input.value = ''
    ul.appendChild(li)
}