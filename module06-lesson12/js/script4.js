let openModalBtn = document.getElementById("openModalBtn");
let overlay = document.getElementById("overlay");
let closeBtn = document.getElementById("closeBtn");

openModalBtn.addEventListener("click", handleModalOpen);
document.body.addEventListener("keydown", handleModalCloseOnESC);
closeBtn.addEventListener("click", handleModalClose);
overlay.addEventListener("click", handleModalClose);

function handleModalOpen() {
    document.body.classList.add("open");
}

function handleModalClose() {
    document.body.classList.remove("open");
}

function handleModalCloseOnESC({ key }) {
    if (key === "Escape") handleModalClose();
}
