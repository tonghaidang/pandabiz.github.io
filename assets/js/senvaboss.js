// Zoom ảnh
var modal = document.getElementById("myModal");
var images = document.getElementsByClassName("ab-de");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

if (window.innerWidth >= 992) {
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
}
function closeModal() {
    modal.style.display = "none";
}
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeModal();
    }
})
window.onclick = function (event) {
    if (event.target == modal) {
        closeModal();
    }
}

if (window.innerWidth >= 992) {
    var slideIndex = 1;

    showSlides(slideIndex);

    function openModal(imgId) {
        document.getElementById("myModal").style.display = "block";
        document.getElementById("img01").src = document.getElementById(imgId).src;
        slideIndex = getIndex(imgId);
        showSlides(slideIndex);
    }

    function getIndex(imgId) {
        var imgs = document.getElementsByClassName("img-fluid ab-de");
        for (var i = 0; i < imgs.length; i++) {
            if (imgs[i].id == imgId) {
                return i + 1;
            }
        }
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        var slides = document.getElementsByClassName("img-fluid ab-de");
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        document.getElementById("img01").src = slides[slideIndex - 1].src;
    }

    document.addEventListener('keydown', function (event) {
        if (event.code === 'ArrowLeft') {
            plusSlides(-1);
        }
        if (event.code === 'ArrowRight') {
            plusSlides(1);
        }
    });
}

// Zalo
function openWindow() {
    var w = 500;
    var h = 700;
    var left = (screen.width / 2) - (w / 2);
    var top = (screen.height / 2) - (h / 2);
    window.open('https://zalo.me/0865723251', 'mywin', 'width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

}



// Preloader
window.addEventListener("load", function () {
    setTimeout(function () {
        var preloader = document.getElementById("preloader");
        preloader.style.display = "none";
    }, 5000);
});



// Tính ngày từ 01-04-2022
const startDate = new Date('2022-03-04');
const today = new Date();
const timeDiff = Math.abs(today.getTime() - startDate.getTime());
const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

const counters = document.getElementsByClassName('withday');
for (let i = 0; i < counters.length; i++) {
    counters[i].setAttribute('data-purecounter-end', dayDiff);
}

// Button back to top
const btnBackToTop = document.querySelector('.back-to-top');
btnBackToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Update title
var titles = ['Tiểu Sen', 'Đại Boss', '01 - 04 - 2022', 'Tiểu Sen ❤ Đại Boss']; // danh sách các tiêu đề

function changeTitle() {
    var i = 0;
    setInterval(function () {
        document.title = titles[i++ % titles.length];
    }, 2000);
}

changeTitle();
