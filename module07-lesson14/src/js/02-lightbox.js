import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector("ul.gallery");

function createGalleryItem(array) {
	return array
		.map(({ preview, original, description }) => {
			return `
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}"/>
            </a>
        `;
		})
		.join("");
}

const photosMarkup = createGalleryItem(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", photosMarkup);

const galleryHandler = new SimpleLightbox(".gallery a", { captionsData: "alt", captionDelay: 250 });
galleryHandler.on("show.simplelightbox");
