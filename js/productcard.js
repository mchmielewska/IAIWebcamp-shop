const overlay = document.getElementById("overlay");
const addToCart = document.getElementById("addToCart");
const closeButton = document.getElementById("closeButton");
const loader = document.getElementById('loader');
const text = document.getElementById("text");

function overlayOn() {
  overlay.style.display = "block";
}

function addProduct(e) {
  const bagItems = document.getElementById('bag');

  let bag = parseInt(bagItems.innerText);
  
  const priceElement = document.getElementById('price').innerText;
  let price = parseFloat(priceElement);

  let bagTotalElement = document.getElementById('bagTotal');
  let bagTotal = parseFloat(bagTotalElement.innerText);
  
  let checkingValue = function (cartSelect, e){
    if (cartSelect.value === '')
    {
      e.preventDefault();
      overlayOn();
      closeButton.addEventListener('click', 
      function () {
        overlay.style.display = "none";
      })
  
      setTimeout(function () {
        overlay.style.display = "none";
      }, 3000);
  
    } else {
      if (cartSelect.value.includes('notavailable')) {
        e.preventDefault();
        overlayOn();
        loader.classList.add('hidden');
        text.classList.remove("hidden");
        text.innerText = "Wybrany produkt nie jest dostępny.";
      } else {
        e.preventDefault();
        overlayOn();
        text.classList.add("hidden");
        loader.classList.remove('hidden');
        bagItems.innerText = ++bag;
        bagTotalElement.innerText = bagTotal + price;
      }
  
      closeButton.addEventListener('click', 
      function () {
        overlay.style.display = "none";
      })
  
      setTimeout(function () {
        overlay.style.display = "none";
      }, 3000);
    }
  }

  if (document.getElementById("sizeSelect")) {
    const cartSelect = document.getElementById("sizeSelect");
    checkingValue(cartSelect, e);
  } else {
    const cartSelect = document.getElementById("popupSelect");
    checkingValue(cartSelect, e);
  }
  
};

addToCart.addEventListener('click', addProduct);

