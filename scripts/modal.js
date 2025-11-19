const saveButton = document.getElementById('save-button');
const modal = document.getElementById('modal');
const modalCloseButton = document.getElementById('modal-close-button');

saveButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.showModal();
});

modalCloseButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.close();
});