const attachStyle = () => {
  const styleElement = document.head.appendChild(
    document.createElement('style')
  );
  // styleElement.innerHTML = `.user-row-switch-${this.index} .el-switch__core::after {background: url(${this.avatarUrl}), #707070}`;
  styleElement.innerHTML = `.class-selector::pseudo-element {example-property: value, backup-value}`;
};
