//      carousel

let scrollContainer = document.querySelector(".carousel");
let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");

scrollContainer.addEventListener("wheel", (e) => {
  e.preventDefault();
  scrollContainer.scrollLeft += e.deltaY;
  scrollContainer.style.scrollBehavior = "smooth";
});

nextBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 950;
});

prevBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 950;
});

//      gallery
document.querySelectorAll('.gallery-container img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.gallery-popup').style.display = 'block';
        document.querySelector('.gallery-popup img').src = image.getAttribute('src');
    }
});

document.querySelector('.gallery-popup span').onclick = () => {
    document.querySelector('.gallery-popup').style.display = 'none';

}