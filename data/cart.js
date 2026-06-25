export let cart = JSON.parse(localStorage.getItem('cart'));

// When no products on the cart, let's put some default products on the cart for that scenario :
if (!cart) {
  cart = [{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 3,
    deliveryOptionId: '1'
  }, {
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1,
    deliveryOptionId: '2'
  }];
}

// Save the data to the localStorage :
function saveToStorage () {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// For adding product to the cart : 
export function addToCart (productId, productName) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      productName: productName,
      quantity: 1,
      deliveryOptionId: '1'
    });
  }
  saveToStorage();
}

// For removing a product from the cart :
export function removeFromCart (productId) {
  let newCart = [];

  cart.forEach((cartItem) => {
    if (productId !== cartItem.productId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;

  saveToStorage();
}