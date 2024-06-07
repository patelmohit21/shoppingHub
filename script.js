document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 1200,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
});

// Add to Cart

// let cart = [];
// let cartTotal = 0.00;

// function addItemToCart(itemName, itemPrice) {

//   cart.push({ name: itemName, price: itemPrice });

//   updateCartDisplay();


//   cartTotal += itemPrice;
//   updateCartTotal();
// }

// function updateCartDisplay() {
//   const cartItemsElement = document.getElementById('cartItems');
//   if (cartItemsElement) {
//     cartItemsElement.innerHTML = 'cartItems';


//     cart.forEach(item => {
//       const li = document.createElement('li');
//       li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
//       cartItemsElement.appendChild(li);
//     });
//   }
// }

function addItemToCart(itemName, itemPrice) {
  var cart = JSON.parse(localStorage.getItem('cart')) || [];


  var newItem = {
      name: itemName,
      price: itemPrice
  };
  cart.push(newItem);

  localStorage.setItem('cart', JSON.stringify(cart));

  alert(itemName  + itemPrice + 'Item added to cart!');
}

