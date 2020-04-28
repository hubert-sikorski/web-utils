const getDeviceWidth = () => {
  if (window.screen.width <= 1024) console.log('mobile');
  else console.log('desktop');
};

getDeviceWidth();
