const getDeviceWidth = () => {
  if (window.screen.width <= 1024) {
    // store.commit('setDevice' ,'smartphone or tablet');
    console.log('mobile');
  } else {
    // store.commit('setDevice', 'computer or tv');
    console.log('desktop');
  }
};

getDeviceWidth();
