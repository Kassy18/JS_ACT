const cart = [
  { name: "Pen", price: 20, quantity: 3 },
  { name: "Notebook", price: 50, quantity: 2 },
  { name: "Pencil", price: 10, quantity: 5 }
];


const itemDescriptions = cart.map(item => {
  const total = item.price * item.quantity;
  return `<li>${item.name} - ₱${total}</li>`;
});


document.getElementById("item-list").innerHTML = itemDescriptions.join("");


const totalCart = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);


document.getElementById("total").textContent = `Total: ₱${totalCart}`;

