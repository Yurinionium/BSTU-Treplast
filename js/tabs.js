// function tabs() {
//     const tabs = document.querySelectorAll('.portfolio__button');
//     const tabsContent = document.querySelectorAll('.portfolio__cards');
//     const tabsParent = document.querySelector('.portfolio__buttons');

//     function hideTabContent() {
//         tabsContent.forEach((item) => {
//             item.style.display = 'none';
//         });
//         tabs.forEach(item => {
//             item.classList.remove('portfolio__button_active');
//         });
//     }

//     function showTabContent(i = 0) {
//         tabsContent[i].style.display = 'flex';
//         tabs[i].classList.add('portfolio__button_active');
//     }

//     tabsParent.addEventListener('click', (e) => {
//         const target = e.target;
//         if (target && target.classList.contains('portfolio__button')) {
//             tabs.forEach((item, index) => {
//                 if (target == item) {
//                     hideTabContent();
//                     showTabContent(index);
//                 }
//             })
//         }
//     });

//     hideTabContent();
//     showTabContent();
// }

// // tabs();

console.log("56556645464");

const shops = {
    shop_1: [
        './extends/jpg/1_1.jpg',
        './extends/jpg/1_2.jpg',
        './extends/jpg/1_3.jpg',
        './extends/jpg/1_4.jpg',
        './extends/jpg/1_5.jpg',
        './extends/jpg/1_6.jpg'
    ],
    shop_2: [
        './extends/jpg/2_1.jpg',
        './extends/jpg/2_2.jpg',
        './extends/jpg/2_3.jpg',
        './extends/jpg/2_4.jpg',
        './extends/jpg/2_5.jpg',
        './extends/jpg/1_1.jpg'
    ],
    shop_3: [
        './extends/jpg/3_1.jpg',
        './extends/jpg/3_3.jpg',
        './extends/jpg/3_4.jpg',
        './extends/jpg/к3.jpg',
        './extends/jpg/к6.jpg',
        './extends/jpg/кк.jpg'
    ],
    shop_4: [
        './extends/jpg/3_3.jpg',
        './extends/jpg/3_4.jpg',
        './extends/jpg/1_2.jpg',
        './extends/jpg/1_3.jpg',
        './extends/jpg/к6.jpg',
        './extends/jpg/кк.jpg'
    ],
}


function changeImage(event) {
    console.log("5655ergrbrbrvb5464");

    const shop = event.target.dataset.shop;
    const seasonImages = document.querySelectorAll('.portfolio__img');
    const buttons = document.querySelectorAll('.portfolio__button');
    console.log(buttons);
    Array.from(seasonImages).forEach((image, index) => image.src = shops[shop][index]);

    Array.from(buttons).forEach(button => {
        if (button.dataset.shop == shop) {
            button.classList.add('portfolio__button_active');
        } else {
            button.classList.remove('portfolio__button_active');
        };
    });
};

function buttonClick(event) {
    if (event.target.classList.contains('portfolio__button')) {
        changeImage(event);
    };
};

document.querySelector('.portfolio__buttons').addEventListener('click', buttonClick);

console.log(document.querySelector('.portfolio__buttons'));