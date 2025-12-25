const url = "https://fakestoreapi.com/products";
const elProductHome = document.querySelector(".product-grid-home");
const elProduct = document.querySelector(".product-grid");
const elLoading = document.querySelector(".loading");

axios.get(url).then((res) => {
  const data = res.data;
  if (elProductHome) {
    showProductHome(data.slice(0, 4));
  }

  if (elProduct) {
    showProduct(data);
  }
});

function showProductHome(data) {
  data.forEach((item) => {
    elProductHome.innerHTML += `
    <div class="card">
          <img
            src="${item.image}"
            alt="${item.category}"
          />
          <h4>${item.title}</h4>
          <p class="category">${item.category}</p>
          <span class="price">$${item.price}</span>
    </div>`;
  });
}

function showProduct(data) {
  data.forEach((item) => {
    elProduct.innerHTML += `
      <div class="card">
            <img
              src="${item.image}"
              alt="${item.category}"
            />
            <h4>${item.title}</h4>
            <p class="category">${item.category}</p>
            <span class="price">$${item.price}</span>
      </div>`;
  });
}
