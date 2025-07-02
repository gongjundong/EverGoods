
function renderProducts() {
  const container = document.getElementById("product-list");
  container.innerHTML = "";
  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.img}" alt="${product.name[currentLang]}" />
      <h3>${product.name[currentLang]}</h3>
      <p>$${product.price}</p>
      <button class="buy-btn">${translations[currentLang].buy}</button>
    `;
    container.appendChild(card);
  });
}

window.onload = () => {
  switchLanguage(currentLang);
  renderProducts();
};
