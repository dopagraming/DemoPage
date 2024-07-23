var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

let up = document.querySelector(".up")
console.log(up)
window.onscroll = function () {
    if(window.scrollY >= 400) {
        up.classList.add("active")
        up.onclick = () =>{ 
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }
    } else {
        up.classList.remove("active")
    }
}

let counts = Array.from(document.querySelectorAll(".stats span"));
let section = document.querySelector(".stats");
let start = false;

// console.log(window.scrollY)
window.onscroll = function() {
  if(window.scrollY >= 1200) {
    if(!start) {
        counts.forEach((e) => {
            let goal = e.dataset.goal
            let count = setInterval(() => {
                e.textContent++
                if(e.textContent == goal) {
                    clearInterval(count)
                }
            }, 2000 / goal)
        })
    }
    start = true
  }
}