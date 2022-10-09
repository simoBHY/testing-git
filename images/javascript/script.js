const navlinks = document.getElementById('nav-links')
const btn = document.getElementById('nav-toggle')

btn.addEventListener('click', () => {
  navlinks.classList.toggle('show-links')
})
