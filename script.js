function navAnimation() {
    let nav = document.querySelector(".nav_elem h4");


    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline()
        tl.to(".nav_bottom", {
            height: "48.9vh",
            width: "7.9vw",
            duration: 0.4
        })
        tl.to(".nav_p2 h5 span", {
            display: "block",
            duration: 0.1
        })
        tl.to(".elem_span h5 span", {
            y: 0,
            // duration:0.11,
            stagger: {
                amount: 0.3
            }
        })
    })

    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline()
        tl.to(".elem_span h5 span", {
            y: 25,
            duration: 0.11,
            stagger: {
                amount: 0.1
            }
        })
        tl.to(".nav_p2 h5 span", {
            display: "none",
            duration: 0.001,
        })
        tl.to(".nav_bottom", {
            height: "0",
            duration: 0.1
        })
    })
}



function greenAnimation() {

    let green = document.querySelector(".video .green");
    let video = document.querySelector(".video");


    video.addEventListener("mousemove", (e) => {
        let rect = video.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;

        let newX = x - green.offsetWidth / 2;
        let newY = y - green.offsetHeight / 2;

        const maxX = rect.width - green.offsetWidth;
        const maxY = rect.height - green.offsetHeight;

        if (newX < 0) newX = 0;
        if (newY < 0) newY = 0;
        if (newX > maxX) newX = maxX;
        if (newY > maxY) newY = maxY;

        gsap.to(green, {
            x: newX,
            y: newY,
            duration: 0.9,
            ease: "power3.out",
        });
    });
}


function innerVideo() {
    let upper = document.querySelector("#page2 video")
    let inner = document.querySelector(".inner video")

    upper.addEventListener("click", function () {
        inner.play()
        gsap.to(".inner video", {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1
        })
        gsap.to(".video .green", {
            opacity: 0
        })
        gsap.to("#page2", {
        })
    })

    inner.addEventListener("click", function () {
        inner.pause()
        gsap.to(".inner video", {
            transform: "scaleX(0.7) scaleY(0)",
            opacity: 0
        })
        gsap.to(".video .green", {
            opacity: 1
        })
    })
}


function cardVideo() {
    let card1 = document.querySelector(".card1");
    let video1 = document.querySelector(".video1 video");

    card1.addEventListener("mouseenter", function () {
        video1.play()
    })
    card1.addEventListener("mouseleave", function () {
        video1.pause()
        video1.currentTime = 0;
    })

    let card2 = document.querySelector(".card2");
    let video2 = document.querySelector(".video2 video");

    card2.addEventListener("mouseenter", function () {
        video2.play()
    })
    card2.addEventListener("mouseleave", function () {
        video2.pause()
        video2.currentTime = 0;
    })

    let card3 = document.querySelector(".card3");
    let video3 = document.querySelector(".video3 video");

    card3.addEventListener("mouseenter", function () {
        video3.play()
    })
    card3.addEventListener("mouseleave", function () {
        video3.pause()
        video3.currentTime = 0;
    })
}

function page7Animation(){
    let cards = document.querySelectorAll(".pg7_main .cards");

cards.forEach(function(card) {
    let video = card.querySelector(".video1 video");
    let paragraph = card.querySelector("p");

    card.addEventListener("mouseenter", function () {
        if (video) {
            let tl = gsap.timeline();
            video.play();
            tl.to(video, {
                height: "61%",
                duration: 0.4
            });
        }

        gsap.to(card, {
            borderTop: "2px solid #fff",
            duration: 0
        });

        if (paragraph) {
            gsap.to(paragraph, {
                opacity: 0,
                duration: 0.3
            });
        }
    });

    card.addEventListener("mouseleave", function () {
        if (video) {
            let tl = gsap.timeline();
            video.pause();
            video.currentTime = 0;
            tl.to(video, {
                height: "45%",
                duration: 0.4
            });
        }

        gsap.to(card, {
            borderTop: "2px solid transparent",
            duration: 0
        });

        if (paragraph) {
            gsap.to(paragraph, {
                opacity: 1,
                duration: 0.3
            });
        }
    });
});
}



navAnimation()

greenAnimation()

innerVideo()

cardVideo()
page7Animation()