const searchBtn = document.getElementById('search-btn')
const closeModal = document.getElementById('close-modal')
const modal = document.getElementById('modal')

searchBtn.addEventListener('click', (e)=> {~
    e.preventDefault()
    console.log(e.target)
    modal.classList.remove('hide')
})

closeModal.addEventListener('click', (e)=> {
    e.preventDefault()
    modal.classList.add('hide')
})