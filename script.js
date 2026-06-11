
function toggleChat() {
  const box = document.getElementById("chatBox");
  box.classList.toggle("chat-hidden");
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const messages = document.getElementById("messages");

  const text = input.value;
  if (!text) return;

  messages.innerHTML += `<p><b>You:</b> ${text}</p>`;

  const reply = getResponse(text);

  messages.innerHTML += `<p><b>Agent:</b> ${reply}</p>`;

  input.value = "";
  messages.scrollTop = messages.scrollHeight;
}

// 🤖 YOUR LEVEL 1 AGENT BRAIN
function getResponse(msg) {
  msg = msg.toLowerCase();

  if (msg.includes("hello")) return "Hi 🍫 I’m your chocolate assistant!";
  if (msg.includes("buy")) return "Go to Products page to buy chocolates!";
  if (msg.includes("price")) return "Our chocolates start at $5 🍫";
  if (msg.includes("dark")) return "Dark chocolate is rich and premium 😍";

  return "Ask me about chocolates, prices, or products 🍫";
}









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
