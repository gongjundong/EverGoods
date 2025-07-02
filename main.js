
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
      <div id="paypal-button-container-${product.id}"></div>
    `;
    container.appendChild(card);
  });
}

function renderPayPalButtons() {
  products.forEach(product => {
    paypal.Buttons({
      createOrder: function(data, actions) {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: product.price
            },
            description: product.name.en
          }]
        });
      },
      onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
          alert(`Thanks ${details.payer.name.given_name}! You bought ${product.name.en}`);
        });
      }
    }).render(`#paypal-button-container-${product.id}`);
  });
}

window.onload = () => {
  switchLanguage(currentLang);
  renderProducts();
  renderPayPalButtons();
};
