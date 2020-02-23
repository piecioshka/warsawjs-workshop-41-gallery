const loader = {
    show: function () {
        // 1. Get reference to DOM element
        const $photos = document.querySelector('#photos');

        // 2. Create HTMLImageElement
        const $loader = document.createElement('img');
        $loader.classList.add('loader');

        // 3. Set "src" attr
        $loader.src = 'images/loader.svg';

        // 4. Render HTMLImageElement into element from 1. point
        $photos.append($loader);
    },
    hide() { // Object Method Shorthand Definition
        // 1. Get reference to DOM container
        const $photos = document.querySelector('#photos');

        // 2. Get reference to DOM element
        const $loader = $photos.querySelector('.loader');

        // 3. Remove HTMLImageElement
        $loader.remove();
    }
};
