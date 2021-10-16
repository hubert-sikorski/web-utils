// Send a message to the parent window from an iframe

window.parent.postMessage({ message: 'mock' }, '*');

// Register a message listener to be able to intercept a message from an iframe

window.addEventListener('message', (e) => {
  if (e.data.message === 'mock') {
    // do something
  }
});