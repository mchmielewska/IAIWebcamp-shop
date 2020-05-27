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


