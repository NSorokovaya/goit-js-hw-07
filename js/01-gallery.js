import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector(".gallery");
const itemMarkup = createImageCards(galleryItems);
function createImageCards(images) {
      return images
            .map(({ preview, original, description }) => {
                  return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`})
              .join("");

}

gallery.insertAdjacentHTML("beforeend", itemMarkup);

      gallery.addEventListener('click', onImageCardClick)

function onImageCardClick(evt) {
      evt.preventDefault();

      if (evt.target.nodeName !== "IMG") {
            return;
      }
      const galleryItem = evt.target.dataset.source;
      const instance = basicLightbox.create(
            `
      <img src="${galleryItem}" width="800" height="auto">
  `,
      );
      function closeModal(evt) {
            if (evt.code === "Escape") {
                  instance.close();
            }
      }
      instance.show();
}
