const getUserLang = () => {
  const supportedLangs = ['en', 'fr', 'de', 'nl', 'pl'];
  let lang = window.navigator.language.slice(0, 2);

  if (lang === 'en' || !supportedLangs.includes(lang)) lang = 'gb';
  console.log(lang);
};
