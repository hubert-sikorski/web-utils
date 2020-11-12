const determineObjectFit = () => {
  const functionToExecute = () => {
    document.images.forEach(img => {
      img.naturalWidth >= img.naturalHeight ? img.style.objectFit = 'cover' : img.style.objectFit = 'fill';
    });
  }
  setInterval(functionToExecute, 1000);
}