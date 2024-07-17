const images = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/01.webp"]
const items = document.getElementById("items");
const item = document.getElementsByClassName("item");

items.innerHTML += `
<div class="item smaller active">
    <img src="img/01.webp">
</div>
<div class="item smaller">
    <img src="img/02.webp">
</div>
<div class="item">
    <img src="img/03.webp">
</div>
<div class="item stray">
    <img src="img/04.webp">
</div>
<div class="item">
    <img src="img/05.webp">
</div>
`

const next = document.getElementById("right");
const prev = document.getElementById("left");

let activeItem = 0;

next.addEventListener("click",
    function(){
        if(activeItem < images.length - 1){
            item[activeItem].classList.remove("active");

            activeItem++;

            item[activeItem].classList.add("active");
        }

        else if (activeItem == imageCarousel.length - 1) {
            item[activeItem].classList.remove("active");

            activeItem = 0;

            item[activeItem].classList.add("active");
        }
    }

)

prev.addEventListener("click",
    function(){
        if(activeItem > 0){
            item[activeItem].classList.remove("active");

            activeItem--;

            item[activeItem].classList.add("active");
        }

        else if (activeItem == images.length - 1) {
            item[activeItem].classList.remove("active");

            activeItem = 0;

            item[activeItem].classList.add("active");
        }
    }

)
