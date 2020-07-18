const getDeviceWidth = () => {
  window.screen.width <= 1024 ? console.log('mobile') : console.log('desktop');
};

getDeviceWidth();
