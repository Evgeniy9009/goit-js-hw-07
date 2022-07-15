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

for (let galleryItem of galleryItems) {
    const link = document.createElement("a")
    const img = document.createElement("img")

    link.classList.add("gallery__link")
    img.classList.add("gallery__image")
    img.src = galleryItem.preview
    img.src_origin = galleryItem.original
    img.alt = galleryItem.description
    gallery.append(link)
    link.append(img)
}

const showImg = (event) => {
    // if (event.target !==)
    console.log(event.target.nodeName)

    const instance = basicLightbox.create(`
    <img src=${event.target.src_origin}>
`)

    instance.show()

}

gallery.addEventListener("click" , showImg)







