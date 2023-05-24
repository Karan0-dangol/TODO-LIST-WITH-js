let input_field = document.querySelector('.input-field')
let btn = document.querySelector('.btn')
let ul = document.querySelector('.lists')

function addList() {
  let li = document.createElement('li')
  let delete_btn = document.createElement('button')
  delete_btn.setAttribute('class', 'btn btn-delete btn-danger m-2')
  delete_btn.textContent = 'delete'
  li.textContent = input_field.value
  li.appendChild(delete_btn)
  ul.appendChild(li)

  input_field.value = ''

  delete_btn.addEventListener('click', () => {
    li.style = 'display:none'
  })
}

btn.addEventListener('click', () => {
  if (input_field.value) {
    addList()
  }
})

document.addEventListener('keyup', (e) => {
  if (e.key === 'Enter' && input_field.value) {
    addList()
  }
})


