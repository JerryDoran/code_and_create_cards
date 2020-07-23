const contactButton = document.querySelector('.card-btn');
const container = document.querySelector('.container');

contactButton.addEventListener('click', () => {
  container.classList.toggle('change');
});
