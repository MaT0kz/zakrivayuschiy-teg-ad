const saveButton = document.getElementById('save-button');
const modal = document.getElementById('modal');
const modalCloseButton = document.getElementById('modal-close-button');

saveButton.addEventListener('click', () => {
  modal.showModal();
});

modalCloseButton.addEventListener('click', () => {
  modal.close();
});