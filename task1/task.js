const array_modul = Array.from(document.querySelectorAll('.modal'))
console.log(array_modul)
// const modal = document.getElementById('modal_main')
// const modal_success = document.getElementById('modal_success')
// modal.classList.add('modal_active')
// console.log(modal)
// const modul_close = modal.getElementsByClassName('modal__close modal__close_times')
// console.log(modul_close)
// modul_close[0].onclick = () =>{
//     modal.className = modal.classList[0]
// }
// const btn = modal.querySelector('a')
// btn.onclick = () =>{
//     console.log(window.modal_success)
//     console.log("ee")
// }

array_modul[0].classList.add('modal_active')

const close_modul = array_modul[0].getElementsByClassName('modal__close modal__close_times')
const close_modul_success = array_modul[1].getElementsByClassName('modal__close modal__close_times')
close_modul[0].onclick = () => {
    array_modul[0].className = array_modul[0].classList[0]
}
close_modul_success[0].onclick = () => {
    array_modul[1].className = array_modul[1].classList[0]
}
const btn = array_modul[0].querySelector('a')
btn.onclick = () =>{
    array_modul[1].classList.add('modal_active')
    array_modul[0].className = array_modul[0].classList[0]
}






