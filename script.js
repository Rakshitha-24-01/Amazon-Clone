const sliderImages = [
  "https://via.placeholder.com/1500x400/007BFF/FFFFFF?text=Prime+Day+Deals+12-14+July",
  "https://via.placeholder.com/1500x400/FF5733/FFFFFF?text=Up+to+55%25+off+Electronics",
  "https://via.placeholder.com/1500x400/28a745/FFFFFF?text=Home+and+Kitchen+Deals",
];

let currentSlide = 0;
const slider = document.querySelector(".slider img");

function changeSlide() {
  currentSlide = (currentSlide + 1) % sliderImages.length;
  slider.src = sliderImages[currentSlide];
}


setInterval(changeSlide, 4000);



const searchInput = document.querySelector(".search-bar input");
const searchButton = document.querySelector(".search-bar button");

searchButton.addEventListener("click", () => {
  const query = searchInput.value.trim();
  if (query) {
    alert(`You searched for: "${query}"`);
   
  }
});



let cartCount = 0;
const cartIcon = document.querySelector(".nav-links div:last-child");

cartIcon.addEventListener("click", () => {
  cartCount++;
  alert(`Product added to cart! (Fake)`);
  cartIcon.innerHTML = `🛒 Cart (${cartCount})`;
});

const sliderTrack = document.querySelector(".slider-track");
const totalSlides = sliderTrack.children.length;
let currentIndex = 0;

function slideNext() {
  currentIndex = (currentIndex + 1) % totalSlides;
  sliderTrack.style.transform = `translateX(-${currentIndex * 100}vw)`;
}


setInterval(slideNext, 4000);
