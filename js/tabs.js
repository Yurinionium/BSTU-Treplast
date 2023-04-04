function tabs() {
    const tabs = document.querySelectorAll('.portfolio__button');
    const tabsContent = document.querySelectorAll('.portfolio__cards');
    const tabsParent = document.querySelector('.portfolio__buttons');

    function hideTabContent() {
        tabsContent.forEach((item) => {
            item.style.display = 'none';
        });
        tabs.forEach(item => {
            item.classList.remove('portfolio__button_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].style.display = 'flex';
        tabs[i].classList.add('portfolio__button_active');
    }

    tabsParent.addEventListener('click', (e) => {
        const target = e.target;
        if (target && target.classList.contains('portfolio__button')) {
            tabs.forEach((item, index) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(index);
                }
            })
        }
    });

    hideTabContent();
    showTabContent();
}

tabs();