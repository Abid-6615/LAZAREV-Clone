function navAnimation() {
    let nav = document.querySelector(".nav_elem");


nav.addEventListener("mouseenter", function () {
    let tl = gsap.timeline()
    tl.to(".nav_bottom", {
        height: "53vh",
        width: "7.92vw",
        duration:0.4
    })
    tl.to(".nav_p2 h5 span", {
        display: "block",
        duration:0.1
    })
    tl.to(".elem_span h5 span", {
        y:0,
        // duration:0.11,
        stagger:{
            amount:0.3
        }
    })
})

nav.addEventListener("mouseleave", function () {
    let tl = gsap.timeline()
    tl.to(".nav_bottom", {
        height: "0",
        duration:0.2
    })
    tl.to(".nav_p2 h5 span", {
        display: "none",
        duration:0.001,
    })
    tl.to(".elem_span h5 span", {
        y:25,
        // duration:0.11,
        stagger:{
            amount:0.2
        }
    })
})
}
navAnimation()