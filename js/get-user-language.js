const getUserLang = () => {
  let lang = window.navigator.language.slice(0, 2);
  if (
    lang === 'en' ||
    (lang !== 'en' &&
      lang !== 'fr' &&
      lang !== 'de' &&
      lang !== 'nl' &&
      lang !== 'pl')
  ) {
    lang = 'gb';
  }
  console.log(lang);
};
