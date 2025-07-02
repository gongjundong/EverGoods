
const translations = {
  en: {
    welcome: "Welcome to EverGoods",
    buy: "Buy Now",
  },
  zh: {
    welcome: "欢迎来到 EverGoods",
    buy: "立即购买",
  }
};

let currentLang = 'en';

function switchLanguage(lang) {
  currentLang = lang;
  document.getElementById("welcome").innerText = translations[lang].welcome;
  const buttons = document.querySelectorAll(".buy-btn");
  buttons.forEach(btn => btn.innerText = translations[lang].buy);
}
