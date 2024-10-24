gsap.to("nav", {
    backgroundColor: 'black',
    height: '8.5vmax',
    scrollTrigger: {
        trigger: "nav",
        scroller: "body",
        start: "top 0",
        end: "bottom 0",
        scrub: 1,
    },
});

gsap.from("nav .nav-border", {
    width: '0%',
    scrollTrigger: {
        trigger: "nav",
        scroller: "body",
        start: "top 0",
        end: "bottom 0",
        scrub: 1,
    },
});

gsap.to("main", {
    backgroundColor: 'black',
    scrollTrigger: {
        trigger: "#page1",
        scroller: "body",
        start: "top 0",
        end: "80% 0",
        scrub: 1,
    },
});

let btns = document.querySelectorAll(".c-btn");

btns.forEach(btn => {
    let btnText = btn.querySelector(".btn-text");

    console.log();

})

window.addEventListener("mousemove", (dets) => {
    let x = dets.x,
        y = dets.y;

    // set --xAngle and --yAngle of .card
    gsap.to(".card", {
        "--xAngle": -Math.floor((y - window.innerHeight / 2) / (window.innerHeight / 2) * 8),
        "--yAngle": Math.floor((x - window.innerWidth / 2) / (window.innerWidth / 2) * 8),
    });

});

function changeCarouselImage(index = null) {
    let currentImg, nextImg;

    if (index) {
        currentImg = document.querySelector(".carousel .img.current");
        nextImg = Array.from(currentImg.parentNode.children)[index];
    } else {
        currentImg = document.querySelector(".carousel .img.current");
        nextImg = currentImg.nextElementSibling || document.querySelector(".carousel .img");
    }

    nextImg.classList.add("current");
    currentImg.classList.remove("current");

    let currentIndex = Array.from(currentImg.parentNode.children).indexOf(nextImg);

    let carouselBtnsParent = document.querySelector(".carousel .carousel-btns");
    let activeBtn = carouselBtnsParent.querySelector(".carousel-btn.active");
    activeBtn.classList.remove("active");
    carouselBtnsParent.children[currentIndex].classList.add("active");
}

let carouselInterval = setInterval(changeCarouselImage, 3000);



let imgMarqueeImageNames = [
    "https://eiwgew27fhz.exactdn.com/wp-content/uploads/sb-instagram-feed-images/447781550_991790659220634_5577119039868959224_nlow.jpg?strip=all&lossy=1&sharp=1&w=1920&ssl=1",
    "https://eiwgew27fhz.exactdn.com/wp-content/uploads/sb-instagram-feed-images/446099330_436478269139605_3616962284735382682_nlow.jpg?strip=all&lossy=1&sharp=1&w=1920&ssl=1",
    "https://eiwgew27fhz.exactdn.com/wp-content/uploads/sb-instagram-feed-images/444226941_1417025942347467_5480901222125906797_nlow.jpg?strip=all&lossy=1&sharp=1&w=1920&ssl=1",
    "https://eiwgew27fhz.exactdn.com/wp-content/uploads/sb-instagram-feed-images/442560574_959754042122832_495329382656501152_nlow.jpg?strip=all&lossy=1&sharp=1&w=1920&ssl=1",
    "https://eiwgew27fhz.exactdn.com/wp-content/uploads/sb-instagram-feed-images/438948530_1484966565755090_1439835802890169023_nlow.jpg?strip=all&lossy=1&sharp=1&w=1920&ssl=1",
    "https://eiwgew27fhz.exactdn.com/wp-content/uploads/sb-instagram-feed-images/436635154_953403546173691_3308096617421948060_nlow.jpg?strip=all&lossy=1&sharp=1&w=1920&ssl=1",
    "https://eiwgew27fhz.exactdn.com/wp-content/uploads/sb-instagram-feed-images/435318823_258606790673865_2530423443188938293_nlow.jpg?strip=all&lossy=1&sharp=1&w=1920&ssl=1",
    "https://eiwgew27fhz.exactdn.com/wp-content/uploads/sb-instagram-feed-images/453518734_1037047134723040_8073951644951463776_nlow.jpg?strip=all&lossy=1&sharp=1&w=1920&ssl=1",
    "https://eiwgew27fhz.exactdn.com/wp-content/uploads/sb-instagram-feed-images/448523995_1030727008770120_6567554558293281910_nlow.jpg?strip=all&lossy=1&sharp=1&w=1920&ssl=1",
    "https://eiwgew27fhz.exactdn.com/wp-content/uploads/sb-instagram-feed-images/447929470_988634446296987_6093112883687622864_nlow.jpg?strip=all&lossy=1&sharp=1&w=1920&ssl=1",
    "https://eiwgew27fhz.exactdn.com/wp-content/uploads/sb-instagram-feed-images/447781550_991790659220634_5577119039868959224_nlow.jpg?strip=all&lossy=1&sharp=1&w=1920&ssl=1",
    "https://eiwgew27fhz.exactdn.com/wp-content/uploads/sb-instagram-feed-images/446099330_436478269139605_3616962284735382682_nlow.jpg?strip=all&lossy=1&sharp=1&w=1920&ssl=1",
    "https://eiwgew27fhz.exactdn.com/wp-content/uploads/sb-instagram-feed-images/444226941_1417025942347467_5480901222125906797_nlow.jpg?strip=all&lossy=1&sharp=1&w=1920&ssl=1",
    "https://eiwgew27fhz.exactdn.com/wp-content/uploads/sb-instagram-feed-images/442560574_959754042122832_495329382656501152_nlow.jpg?strip=all&lossy=1&sharp=1&w=1920&ssl=1",
    "https://eiwgew27fhz.exactdn.com/wp-content/uploads/sb-instagram-feed-images/438948530_1484966565755090_1439835802890169023_nlow.jpg?strip=all&lossy=1&sharp=1&w=1920&ssl=1",
    "https://eiwgew27fhz.exactdn.com/wp-content/uploads/sb-instagram-feed-images/436635154_953403546173691_3308096617421948060_nlow.jpg?strip=all&lossy=1&sharp=1&w=1920&ssl=1",
    "https://eiwgew27fhz.exactdn.com/wp-content/uploads/sb-instagram-feed-images/435318823_258606790673865_2530423443188938293_nlow.jpg?strip=all&lossy=1&sharp=1&w=1920&ssl=1",
    "https://eiwgew27fhz.exactdn.com/wp-content/uploads/sb-instagram-feed-images/453518734_1037047134723040_8073951644951463776_nlow.jpg?strip=all&lossy=1&sharp=1&w=1920&ssl=1",
    "https://eiwgew27fhz.exactdn.com/wp-content/uploads/sb-instagram-feed-images/448523995_1030727008770120_6567554558293281910_nlow.jpg?strip=all&lossy=1&sharp=1&w=1920&ssl=1",
    "https://eiwgew27fhz.exactdn.com/wp-content/uploads/sb-instagram-feed-images/447929470_988634446296987_6093112883687622864_nlow.jpg?strip=all&lossy=1&sharp=1&w=1920&ssl=1",
    "https://eiwgew27fhz.exactdn.com/wp-content/uploads/sb-instagram-feed-images/447781550_991790659220634_5577119039868959224_nlow.jpg?strip=all&lossy=1&sharp=1&w=1920&ssl=1",
    "https://eiwgew27fhz.exactdn.com/wp-content/uploads/sb-instagram-feed-images/446099330_436478269139605_3616962284735382682_nlow.jpg?strip=all&lossy=1&sharp=1&w=1920&ssl=1",
    "https://eiwgew27fhz.exactdn.com/wp-content/uploads/sb-instagram-feed-images/444226941_1417025942347467_5480901222125906797_nlow.jpg?strip=all&lossy=1&sharp=1&w=1920&ssl=1",
    "https://eiwgew27fhz.exactdn.com/wp-content/uploads/sb-instagram-feed-images/442560574_959754042122832_495329382656501152_nlow.jpg?strip=all&lossy=1&sharp=1&w=1920&ssl=1"
]

let sliderImg;

imgMarqueeImageNames.forEach(img => {
    sliderImg += `
    <div class="img h-full aspect-[5/9] bg-zinc-700 rounded-md shrink-0 overflow-hidden">
        <img src="${img}" class="w-full h-full object-cover hover-scale-up cursor-hover-effect" alt="">
    </div>
    `
})

let imgMarquee = document.querySelector(".img-marquee");
imgMarquee.innerHTML = sliderImg;


const cards = document.querySelectorAll('.card');
const h2 = document.querySelector('#page7 h2');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        h2.style.setProperty("--outline-color", "var(--green)");
    });

    card.addEventListener('mouseleave', () => {
        h2.style.setProperty("--outline-color", "white");
    });
});

gsap.from(h2, {
    y: "100%",
    scrollTrigger: {
        trigger: h2,
        scroller: "body",
        start: "top bottom",
        end: "bottom bottom",
        scrub: 1
    }
})



const cursor1 = document.querySelector('.cursor-1');
const cursor2 = document.querySelector('.cursor-2');

document.addEventListener('mousemove', (dets) => {
    cursor1.animate({
        left: dets.x + "px",
        top: dets.y + "px"
    }, {
        duration: 1000,
        fill: "forwards"
    })

    cursor2.animate({
        left: dets.x + "px",
        top: dets.y + "px"
    }, {
        duration: 3000,
        fill: "forwards"
    })
});

document.querySelectorAll(".cursor-hover-effect").forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
        cursor1.classList.add("hover-state");
    });

    elem.addEventListener("mouseleave", () => {
        cursor1.classList.remove("hover-state");
    });
})

let menuOpenBtn = document.querySelector(".menu-toggle");
let hamburgerMenu = document.querySelector("#hamburger-menu");
let menuCloseBtn = document.querySelector("#hamburger-menu .close-btn");

menuOpenBtn.addEventListener("click", () => {
    hamburgerMenu.classList.add("show");
});

menuCloseBtn.addEventListener("click", () => {
    hamburgerMenu.classList.remove("show");
});