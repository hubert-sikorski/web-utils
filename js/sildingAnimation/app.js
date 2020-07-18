let firstLoad = true;
let slide = 1;
const slides = ['./assets/slide1.jpg', './assets/slide2.jpg'];

const runSlidingImages = () => {
  const background = document.backgroundImage;

  if (slide === 0) slide++;
  else if (slide === 1 && firstLoad) slide--, background.src = slides[0]
  else slide--;

  setTimeout(() => {
    if (!firstLoad) background.src = slides[slide];
  }, 1000);

  if (slide === 1) {
    background.style.transform = 'translateX(200%)';
    setTimeout(() => {
      background.style.transform = 'translateX(0px)';
    }, 1000);
  } else if (slide === 0 && firstLoad) {
    background.style.transform = 'translateX(0px)';
    firstLoad = false;
  } else {
    background.style.transform = 'translateX(200%)';
    setTimeout(() => {
      background.style.transform = 'translateX(0px)';
    }, 1000);
  };

  background.style.transition = 'transform 1s ease-in-out';

  setTimeout(runSlidingImages, 6000);
};
