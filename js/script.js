let resizing = false;

window.addEventListener('resize', function(){
  if(!resizing){
    resizing = true;
    setTimeout( () => {
      resizing = false;
      window.location.reload(true);
    },5);
  }
});

  const mediaQ = window.matchMedia("(max-width: 980px)");

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
    if (window.matchMedia('(max-width: 980px)').matches) {
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