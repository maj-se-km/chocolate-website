// CART SYSTEM
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCart() {
  document.querySelectorAll("#cartCount").forEach(el => {
    el.innerText = cart.length;
  });
}

function addToCart(item) {
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
  showToast(item + " added to cart 🍫");
}

// TOAST MESSAGE
function showToast(msg) {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.innerText = msg;
  toast.style.display = "block";

  setTimeout(() => {
    toast.style.display = "none";
  }, 2000);
}

// SCROLL REVEAL ANIMATION
function revealOnScroll() {
  const elements = document.querySelectorAll(".reveal");
  const windowHeight = window.innerHeight;

  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", () => {
  revealOnScroll();
  updateCart();
});
