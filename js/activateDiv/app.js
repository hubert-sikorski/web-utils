const divs = ['Div1', 'Div2', 'Div3', 'Div4', 'Div5'];
const parentDiv = document.querySelector('.container');

const renderDivs = () => {
  divs.map(div => {
    const childDiv = document.createElement('div');
    parentDiv.appendChild(childDiv);
    childDiv.className = 'child';
    childDiv.innerHTML = div;
    childDiv.addEventListener('click', () => {
      if (childDiv.className === 'child') childDiv.className = 'child isActive', childDiv.innerHTML = `${div} activated`;
      else childDiv.className = 'child', childDiv.innerHTML = div;
    });
  });
};
