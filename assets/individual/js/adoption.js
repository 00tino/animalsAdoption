(function () {

    let navbar = document.querySelector('#navbar');
    let main = document.querySelector('main');
    let navbarHeight = navbar.getBoundingClientRect().height;
    let breakpoint = main.offsetTop - navbarHeight;
    let windowPos;
    let isFixed = false;

    function updatePos() {
        windowPos = window.scrollY;
    }

    function onScroll() {

        updatePos();

        if (windowPos >= breakpoint && !isFixed) {
            // navbar.classList.remove('open');

            navbar.classList.add('navbar-fixed');
            main.style.cssText = "margin-top: " + navbarHeight + 'px;';
            isFixed = true;

        } else if (windowPos < breakpoint && isFixed) {
            navbar.classList.remove('navbar-fixed');
            main.style.cssText = "margin-top: " + 0;
            isFixed = false;
        }
    }

    document.addEventListener('scroll', onScroll);

})()

// button
var animateButton = function (e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');

    e.target.classList.add('animate');
    setTimeout(function () {
        e.target.classList.remove('animate');
    }, 700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
}

// hamburger navbar

const toggleMenu = () => {
    document.body.classList.toggle("open");
};

// Function for showing the Product Slideshow at mobile size
(function productSlideshow() {
    const prevBtn = document.querySelectorAll(".prev");
    const nextBtn = document.querySelectorAll(".next");

    let slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
        showSlides((slideIndex += n));
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[slideIndex - 1].style.display = "block";
    }

    prevBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
            plusSlides(-1);
        });
    });
    nextBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
            plusSlides(1);
        });
    });
})();

// Function for slideshow of modal product showcase
(function productSlideshowDesktop() {
    const prevBtn = document.querySelectorAll(".modal__prev");
    const nextBtn = document.querySelectorAll(".modal__next");

    const modalPdtImages = document.querySelectorAll(".pdt-img-modal");

    let slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
        showSlides((slideIndex += n));
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides__desktop");

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[slideIndex - 1].style.display = "block";

        // console.log(slides[slideIndex - 1].children[0].dataset.item)

        modalPdtImages.forEach((img) => {
            img.classList.remove("active-pdt-img__modal");
            img.parentElement.classList.remove("active-pdt-img-ctn__modal");
        });
        modalPdtImages.forEach((img) => {
            if (img.dataset.key == slideIndex) {
                img.classList.add("active-pdt-img__modal");
                img.parentElement.classList.remove("active-pdt-img-ctn__modal");
            }
            img.addEventListener("click", (e) => {
                const index = e.target.dataset.key;
                showSlides(index);
            });
        });
    }

    prevBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
            plusSlides(-1);
        });
    });
    nextBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
            plusSlides(1);
        });
    });
})();


// Function to update the main product image
(function changeMainProduct() {
    const mainPdtImage = document.querySelector(".main-pdt-img");
    const pdtImages = document.querySelectorAll(".pdt-img");

    // const modalPdtImages = document.querySelectorAll('.pdt-img-modal')
    // changePdtImg(modalPdtImages);

    pdtImages.forEach((img) => {
        if (img.dataset.key == 1) {
            img.parentElement.classList.add("active-img-ctn");
        }

        img.addEventListener("click", () => {
            const key = img.dataset.key;
            mainPdtImage.setAttribute(
                "src",
                `https://raw.githubusercontent.com/Rohitgour03/JavaScript-projects/main/E-Commerce%20product%20page/images/image-product-${key}.jpg`
            );

            pdtImages.forEach((img) => {
                img.parentElement.classList.remove("active-img-ctn");
            });

            img.parentElement.classList.add("active-img-ctn");
        });
    });
})();

// Function to update the main product image in modal
(function changeMainProduct() {
    const mainPdtImage = document.querySelector(".main-pdt-img");
    const pdtImages = document.querySelectorAll(".pdt-img");

    // const modalPdtImages = document.querySelectorAll('.pdt-img-modal')
    // changePdtImg(modalPdtImages);

    pdtImages.forEach((img) => {
        img.addEventListener("click", () => {
            const key = img.dataset.key;
            mainPdtImage.setAttribute(
                "src",
                `https://raw.githubusercontent.com/Rohitgour03/JavaScript-projects/main/E-Commerce%20product%20page/images/image-product-${key}.jpg`
            );

            pdtImages.forEach((img) => {
                img.parentElement.classList.remove("active-img-ctn");
            });

            img.parentElement.classList.add("active-img-ctn");
        });
    });
})();