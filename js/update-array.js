const arr = ['el1', 'el2', 'el3'];
const selectedEls = [];

const updateArr = el => {
  const elIdx = selectedEls.indexOf(el);
  if (elIdx !== -1) selectedEls.splice(elIdx, 1);
  else selectedEls.push(el);
};
