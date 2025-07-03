var btn = document.querySelector('.btn');
var modalBox = document.querySelector('.modal-box');
var closeBox = modalBox.querySelector('.modal header .close');
var modalOverlay = modalBox.querySelector('.overlay');

closeModal = function(){
    modalBox.classList.remove('show');

}
btn.addEventListener('click', function(){
    modalBox.classList.add('show');
});

closeBox.addEventListener('click', closeModal);
modalOverlay.addEventListener('click',closeModal);