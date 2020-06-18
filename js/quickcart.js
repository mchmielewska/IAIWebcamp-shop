const quickBuyElements = document.querySelectorAll('.quickBuy');
const quickOverlay = document.getElementById("quickOverlay");
const closeOverlay = document.getElementById("close");
const productCart = document.getElementById('productCart');
const popup = document.getElementById('popup');

const product_name_h3 = document.getElementById('product_name_h3');
const product_name_h5 = document.getElementById('product_name_h5');
const price_span = document.getElementById('price');
const product_slide1 = document.getElementById('slide1');
const product_slide2 = document.getElementById('slide2');
console.log(product_slide1.src)

popup.classList.add('hidden');

function quickOverlayOn() {
    quickOverlay.style.display = "block";
}

quickBuyElements.forEach(item => {
    item.addEventListener('click', quickCart);
});

function quickCart (e) {
    const productId = e.currentTarget.id;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '../products.json', true);

    xhr.onreadystatechange = function (e) {
        if (this.readyState !== 4) {
            quickOverlayOn();
            loader.classList.remove('hidden');
        }

        else if (this.readyState == 4 && this.status == 200){
            loader.classList.add('hidden');
            popup.classList.remove('hidden');

            let products = JSON.parse(this.responseText);
            let productsArray = [];

            for (let i in products) {
                productsArray[i] = {
                    id: products[i].id,
                    name : products[i].name,
                    img : products[i].img,
                    longName : products[i].long_name,
                    price : products[i].price,
                    sizes : products[i].available_sizes
                }

                if (productId == productsArray[i].id) {
                    e.preventDefault();
                    quickOverlayOn();
                    product_name_h3.innerHTML = productsArray[i].name;
                    product_name_h5.innerHTML = productsArray[i].longName;
                    price_span.innerHTML = productsArray[i].price;

                    product_slide1.src = productsArray[i].img;
                    product_slide2.src = productsArray[i].img;
                    console.log(product_slide1.src)

                    const sizesArray = [];

                    for (size in products[i].available_sizes) {
                        sizesArray[size] = [`${products[i].available_sizes[size]}`, 'green.png', `Rozmiar ${products[i].available_sizes[size]}| Dostępne`, 'available']
                    }

                    (function($){
                        
                        $.customSelect({
                            identifier: 'select',
                            selector: '#popupSelect',
                            value: '',
                            placeholder: 'Wybierz romiar',
                            options: sizesArray,
                            template: "<div class='jqcs_option' data-select-value='$0 $3' style='background-image:url(../assets/$1);'>$2</div>"
                        });
                    })(jQuery);

                    closeOverlay.addEventListener('click', () => {
                        quickOverlay.style.display = "none"
                    })
                }
            }
        }
    }

    

    xhr.send();
}



