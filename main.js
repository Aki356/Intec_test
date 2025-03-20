// Слайдер
let currentSlide = 0;
const slides = document.querySelectorAll('.main__slide');
const dots = document.querySelectorAll('.main__slider-dot');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('main__slide--active');
        if (i === index) {
            slide.classList.add('main__slide--active');
        }
    });

    dots.forEach((dot, i) => {
        dot.classList.remove('main__slider-dot--active');
        if (i === index) {
            dot.classList.add('main__slider-dot--active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

showSlide(currentSlide);

setInterval(nextSlide, 5000);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

//F.A.Q
document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".FAQ__item");
    const answers = document.querySelectorAll(".FAQ__answer");
    const answersContainer = document.querySelector(".FAQ__answers");

    const ANSWER_HEIGHT = 416;

    items[0].classList.add("FAQ__item--active");
    answers[0].classList.add("FAQ__answer--active");
    answers[0].style.opacity = "1";
    answers[0].style.visibility = "visible";
    answersContainer.style.maxHeight = ANSWER_HEIGHT + "px";
    answersContainer.style.opacity = "1";
    answersContainer.classList.add("FAQ__answers--active");

    items.forEach((item, index) => {
        item.addEventListener("click", function () {
            if (item.classList.contains("FAQ__item--active")) {
                return;
            }

            items.forEach(i => i.classList.remove("FAQ__item--active"));
            answers.forEach(a => {
                a.classList.remove("FAQ__answer--active");
                a.style.opacity = "0";
                a.style.visibility = "hidden";
            });

            item.classList.add("FAQ__item--active");
            answers[index].classList.add("FAQ__answer--active");

            window.requestAnimationFrame(() => {
                answers[index].style.opacity = "0";
                answers[index].style.visibility = "hidden";

                window.requestAnimationFrame(() => {
                    answers[index].style.opacity = "1";
                    answers[index].style.visibility = "visible";
                    answersContainer.classList.add("FAQ__answers--active");
                    updateAnswerContainer();
                });
            });
        });
    });

    function updateAnswerContainer() {
        const activeAnswer = document.querySelector(".FAQ__answer--active");
        if (activeAnswer) {
            answersContainer.style.maxHeight = ANSWER_HEIGHT + "px";
            answersContainer.style.opacity = "1";
        } else {
            answersContainer.style.maxHeight = "0px";
            answersContainer.style.opacity = "0";
        }
    }
});

