const body = document.querySelector('body');

const BackgroundColors = {
  GREEN: '#849D8F',
  BLUE: '#8996A6',
  GREY: '#9D8B84',
}

//slider
let slides = body
  .querySelectorAll('.slide-item');

let controls = body
  .querySelector('.slider-controls')
  .querySelectorAll('input');

const setBackgroundColor = (index) => {
  switch (index) {
    case 0:
      return BackgroundColors.GREEN;
    case 1:
      return BackgroundColors.BLUE;
    case 2:
      return BackgroundColors.GREY;
    default:
      BackgroundColors.GREEN;
  }
}

controls.forEach((control, index) => {
  control.addEventListener('change', () => {
    controls.forEach(control => control.checked = false);
    slides.forEach(slide => slide.classList.remove('show'));
    control.checked = true;
    slides[index].classList.add('show');
    body.style.backgroundColor = setBackgroundColor(index);
  });
});

//modal
const modal = body.querySelector('.modal-feedback');

const showModalButton = body.querySelector('.button-feedback');
const closeModalButton = modal.querySelector('.modal-close');

const clickOpenHandler = (evt) => {
  evt.preventDefault();
  modal.classList.add('modal-show');
  modal.removeEventListener('click', clickOpenHandler);
  showModalButton.classList.add('disabled');

  closeModalButton.addEventListener('click', clickCloseHandler);

  window.addEventListener('keydown', escDownHandler);
}

const clickCloseHandler = (evt) => {
  evt.preventDefault();
  modal.classList.remove('modal-show');
  closeModalButton.removeEventListener('click', clickCloseHandler);
  showModalButton.classList.remove('disabled');
}

const escDownHandler = (evt) => {
  if (evt.key === 'Esc' || evt.key === 'Escape') {
    modal.classList.remove('modal-show');
    showModalButton.classList.remove('disabled');

    closeModalButton.removeEventListener('click', clickCloseHandler);
    window.addEventListener('keydown', escDownHandler);
  }
}

showModalButton.addEventListener('click', clickOpenHandler);
