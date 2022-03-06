const toggle = document.querySelector('.toggle-icon');
const ul = document.querySelector('ul')

toggle.addEventListener('click', ()=>{
    ul.classList.toggle('block-and-none')
})