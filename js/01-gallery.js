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
    const gallery__item = document.createElement("div")
    const link = document.createElement("a")
    const img = document.createElement("img")

    gallery__item.classList.add('gallery__item')
    link.classList.add("gallery__link")
    img.classList.add("gallery__image")
    img.src = galleryItem.preview
    img.dataset.sourse = galleryItem.original
    img.alt = galleryItem.description
    gallery.append(gallery__item)
    gallery__item.append(link)
    link.append(img)
}

const showImg = (event) => {
    if (event.target.nodeName !== "IMG") { return}
    console.log(event.target.nodeName)

    const instance = basicLightbox.create(`
    <img src=${event.target.dataset.sourse}>
`)

    instance.show()

    addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        console.log("close")
        instance.close()
    } 
})

}

gallery.addEventListener("click", showImg)









