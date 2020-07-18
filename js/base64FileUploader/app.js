const handleFileChange = elementID => {
  const selectedFile = document.getElementById(elementID).files;
  const fileReader = new FileReader();
  const regex = /data:application\/pdf;base64,/;
  let fileToLoad;
  let base64;

  if (selectedFile.length) fileToLoad = selectedFile[0];

  fileReader.readAsDataURL(fileToLoad);
  fileReader.onload = fileLoadedEvent => {
    base64 = fileLoadedEvent.target.result;
    const dataToPass = base64.replace(regex, '');
    console.log(dataToPass);
  };
};

const displayFileName = (querySelector, elementID) => {
  document.querySelector(querySelector).textContent = document.getElementById(elementID).files[0].name;
};

