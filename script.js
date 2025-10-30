function navAnimation() {
    let nav = document.querySelector(".nav_elem");


nav.addEventListener("mouseenter", function () {
    let tl = gsap.timeline()
    tl.to(".nav_bottom", {
        height: "48.9vh",
        width: "7.9vw",
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
    tl.to(".elem_span h5 span", {
        y:25,
        duration:0.11,
        stagger:{
            amount:0.1
        }
    })
    tl.to(".nav_p2 h5 span", {
        display: "none",
        duration:0.001,
    })
    tl.to(".nav_bottom", {
        height: "0",
        duration:0.1
    })
})
}
navAnimation()


// 🟢 GREEN CIRCLE MOVE WITHIN VIDEO AREA
let green = document.querySelector(".video .green");
let video = document.querySelector(".video");


video.addEventListener("mousemove", (e) => {
  let rect = video.getBoundingClientRect();
  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;

  // center the circle under cursor
  let newX = x - green.offsetWidth / 2;
  let newY = y - green.offsetHeight / 2;

  // 🧱 Boundary limits
  const maxX = rect.width - green.offsetWidth;
  const maxY = rect.height - green.offsetHeight;

  if (newX < 0) newX = 0;
  if (newY < 0) newY = 0;
  if (newX > maxX) newX = maxX;
  if (newY > maxY) newY = maxY;

  // Smooth follow
  gsap.to(green, {
    x: newX,
    y: newY,
    duration: 0.9,
    ease: "power3.out",
  });
});