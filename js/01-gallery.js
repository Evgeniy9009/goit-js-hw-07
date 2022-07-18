import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery")
console.log(gallery);
// for (let i = 0; i < galleryItems.length; i +=1) {
//     const li = document.createElement("li")
//     const img = document.createElement("img")
//     img.src = galleryItems[i].preview
//     img.alt = galleryItems[i].description
//     gallery.append(li)
//     li.append(img)
// }

// for (let galleryItem of galleryItems) {
//     const gallery__item = document.createElement("div")
//     const link = document.createElement("a")
//     const img = document.createElement("img")

//     gallery__item.classList.add('gallery__item')
//     link.classList.add("gallery__link")
//     img.classList.add("gallery__image")
//     img.src = galleryItem.preview
//     img.dataset.sourse = galleryItem.original
//     img.alt = galleryItem.description
//     gallery.append(gallery__item)
//     gallery__item.append(link)
//     link.append(img)
// }<a class="gallery__link" href="${original}"></a>

const renderList = (products) => products.map(({ original, preview, description }) => `<div class="gallery__item"> <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" /></div>`)
    .join("");

renderList(galleryItems)

gallery.insertAdjacentHTML("beforeend"  , renderList(galleryItems))

const instance = basicLightbox.create(`<img src="">`, {
        onShow: (instance) => {
            window.addEventListener("keydown", onEscClick);
        },
        onClose: (instance) => {
            window.removeEventListener("keydown", onEscClick)
        }
    })

const showImg = (event) => {
    if (event.target.nodeName !== "IMG") { return}

    instance.element().querySelector("img").src = event.target.dataset.source

    instance.show()
}

gallery.addEventListener("click", showImg)

    function onEscClick(e)  {
    if (e.key === "Escape") {
        console.log("close")
        instance.close()
        return
    } 
}



