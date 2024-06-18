const filterBtn = document.querySelectorAll('.filter button');
const galleryCard = document.querySelectorAll('.carGallery .card');

const filterCards = e => {
    document.querySelector(".checked").classList.remove("checked");
    e.target.classList.add("checked");

    galleryCard.forEach(card => {
        card.classList.add("hide");

        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all" ){
            card.classList.remove("hide");
        };
    });
    
};

filterBtn.forEach(button => button.addEventListener("click", filterCards));

// Brand Carousel

var copy = document.querySelector(".brandCarousel").cloneNode(true);
document.querySelector(".brand").appendChild(copy);