const buttons = document.querySelectorAll('.favorite-icon')
const toggleIcon = (btn) => {
  btn.classList.toggle('filled')
  const filled = "&#10084;"
  const empty = "&#9825;"
 
 if (btn.classList.contains('filled')) {btn.innerHTML = filled}
 else {btn.innerHTML = empty}
 
 } 
buttons.forEach((button) => 
  button.addEventListener('click', (e) => {
    e.preventDefault()
    toggleIcon(button)
  }))