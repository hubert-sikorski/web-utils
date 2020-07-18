const attachStyle = () => {
  const styleElement = document.head.appendChild(document.createElement('style'));
  styleElement.innerHTML = `.class-selector::pseudo-element {example-property: value, backup-value}`;
};
