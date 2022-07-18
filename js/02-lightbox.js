import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery")
console.log(gallery);

const renderList = (products) => products.map(({ original, preview, description }) => `<a class="gallery__link" href="${original}"> <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a>`)
    .join("");

renderList(galleryItems)

gallery.insertAdjacentHTML("beforeend"  , renderList(galleryItems))

let galleryA = new SimpleLightbox('.gallery a', {captionsData : "alt",captionDelay : 250} );

// galleryA.on('show.simplelightbox', function () {
// });

// galleryA.captionsData = "alt"
// galleryA.captionDelay = 1000


// gallery.on('captionsData', alt);




