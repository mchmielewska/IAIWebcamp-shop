const mediaQ = window.matchMedia("(max-width: 480px)");

if (mediaQ.matches) {
        const footerMenuItem = document.getElementsByClassName('footer__item');

        let showDetails = false;
        for (const item of footerMenuItem) {
            const link = item.firstElementChild;
            const submenu = item.lastElementChild;
            submenu.classList.add('hidden');

            link.addEventListener('click', (e) => {
                showDetails = !showDetails;
                e.preventDefault();
                if (showDetails === true) {
                    submenu.classList.remove('hidden');
                }
                else {
                    submenu.classList.add('hidden');
                }
        })


}
} else {
    const mobileHiddenItems = document.getElementsByClassName('mobile_hide');
    for (let i=0; i<mobileHiddenItems.length; i++) {
        mobileHiddenItems[i].classList.remove('mobile_hide');
    }
};

$(document).ready(function(){
    if (window.matchMedia('(max-width: 480px)').matches) {
    var zeynep = $('.zeynep').zeynep({
        disableTransition: true,
        onClosed: function () {
          $("body main").attr("style", "");
        },
        onOpened: function () {
          $("body main").attr("style", "pointer-events: none;");
        }
      });

    $('.zeynep').zeynep({
      onClosed: function () {
        $("body main").attr("style", "");
      },
      onOpened: function () {
        $("body main").attr("style", "pointer-events: none;");
      }
    });
  
    $(".zeynep-overlay").click(function () {
      zeynep.close();
    });
  
    $(".btn-open").click(function () {
      if ($("html").hasClass("zeynep-opened")) {
        zeynep.close();
      } else {
        zeynep.open();
      }
    });
    }
});


const overlay = document.getElementById("overlay");
const addToCart = document.getElementById("addToCart");
const closeButton = document.getElementById("closeButton");
const loader = document.getElementById('loader');
const text = document.getElementById("text");

function overlayOn() {
  overlay.style.display = "block";
}

function overlayOff() {
  overlay.style.display = "none";
}

addToCart.addEventListener('click', (e) => {

  const cartSelect = document.getElementById("size");
  const selection = cartSelect.selectedIndex;

  if (selection === 0)
  {
    overlayOn();
    closeButton.addEventListener('click', 
    function () {
      overlay.style.display = "none";
    })
  } else {
    e.preventDefault();
    overlayOn();
    text.classList.add("hidden");
    loader.classList.remove('hidden');
    
    closeButton.addEventListener('click', 
    function () {
      overlay.style.display = "none";
    })

    //overlay closing without any action
    setTimeout(function () {
      overlay.style.display = "none";
    }, 3000);
  }

});
