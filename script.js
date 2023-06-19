'use strict';

//ALL CONSTANTS
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const showModal = document.querySelectorAll('.show-modal');

//FUNCTION FOR CLOSE MODAL
const close = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//FUNNCTION FOR OPEN MODAL
const open = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//Adding Click Event Listener TO ALl Buttons
for (let i = 0; i < 3; i++) {
  showModal[i].addEventListener('click', open);
}

//ADDING CLICK EVENT LISTENER TO CLOSE BUTTONS
closeModal.addEventListener('click', close);

//ADDING CLICK EVENT LISTENER TO HIDE OVERLAY
overlay.addEventListener('click', close);

//If Escape key is pressed and Modal is open
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    close();
  }
});
