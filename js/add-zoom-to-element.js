let scale = 1;

const addZoomToElement = (element, zoomModifier, minZoom, maxZoom) => {
  element?.addEventListener('wheel', event => {
    event.preventDefault();

    scale += event.deltaY * -(scale / zoomModifier);
    scale = Math.min(Math.max(minZoom, scale), maxZoom);

    element.style.transform = `scale(${scale})`;
  });
}