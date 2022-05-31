import { galleryItems } from "./gallery-items.js";

// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector(".js-gallery"); // Обращение к родителю в HTML
const imageMarkup = createImage(galleryItems); //Переменная для вызова функции

galleryContainer.insertAdjacentHTML("beforeend", imageMarkup); //Добавление в родителя готовой разметки

galleryContainer.addEventListener("click", onGalleryContainerClick); //Делегирование прослушивания всей галереи

function createImage(image) {
  //Рендер разметки
  return image
    .map(({ preview, original, description }) => {
      return `
            <div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                    />
                </a>
            </div>`;
    })
    .join("");
}

let instance = null;

function onGalleryContainerClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width = 100%>`
  );

  instance.show();
}
