document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        items: [
            { id: 1, name: 'Risol Mayo', img: 'risol.jpg', price: 10000},
            { id: 2, name: 'Cheese Roll', img: 'cheese roll.jpg', price: 10000},
            { id: 3, name: 'Dimsum', img: 'menu dimsum.jpg', price: 10000},
            { id: 4, name: 'Piscok', img: 'piscok.jpg', price: 10000}
        ],
    }));
});