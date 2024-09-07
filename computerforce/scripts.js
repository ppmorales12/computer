document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const bagIcon = document.querySelector('.bag-icon');
    const menu = document.querySelector('.menu');
    const aside = document.querySelector('aside');

    burgerMenu.addEventListener('click', () => {
        menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
    });

    bagIcon.addEventListener('click', () => {
        aside.style.display = aside.style.display === 'block' ? 'none' : 'block';
    });
});
