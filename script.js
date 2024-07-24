var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: "fade",
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//   navbar
function animatehomepage() {
  let hometl = gsap.timeline()

  hometl.from('.logo', {
    y: -70,
    opacity: 0,
    duration: 0.5,
    delay: 1
  })

  hometl.from('.links li', {
    y: -50,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1
  })

  hometl.from('.right-home', {
    x: 200,
    opacity: 0,
    duration: 0.7
  })

  hometl.from('.left-home h1, .left-home p, .left-home .btn', {
    y: 50,
    opacity: 0,
    stagger: 0.1
  })
}

// dropdown

let drop1tl = gsap.timeline()

drop1tl.to(".dropdown-1", {
  top: "18%",
  duration: 0.5,
})

drop1tl.to(".dropdown-1-navigation svg", {
  rotate: "-90deg",
  duration: 0.3,
  delay: -0.5,
})

drop1tl.from(".first-drop-content li", {
  y: 40,
  opacity: 0,
  duration: 0.5,
  stagger: 0.02
})

drop1tl.from(".first-drop-imgs img", {
  x: 60,
  duration: 0.5,
  delay: -0.4,
  opacity: 0,
  stagger: 0.05
})

drop1tl.pause()

const navigation1 = document.querySelectorAll(".dropdown-1-navigation, .dropdown-1")
const dropdown1 = document.querySelector(".dropdown-1")

navigation1.forEach(drop1 => {
  drop1.addEventListener('mouseenter', () => {
    drop1tl.play()
  });
});

navigation1.forEach(drop1 => {
  drop1.addEventListener('mouseleave', () => {
    drop1tl.reverse()
  });
});






let drop2tl = gsap.timeline()

drop2tl.to(".dropdown-2", {
  top: "18%",
  duration: 0.5,
})

drop2tl.to(".dropdown-2-navigation svg", {
  rotate: "-90deg",
  duration: 0.3,
  delay: -0.5,
})

drop2tl.from(".second-drop-content li", {
  y: 40,
  opacity: 0,
  duration: 0.5,
  stagger: 0.02
})

drop2tl.from(".second-drop-imgs img", {
  x: 60,
  duration: 0.5,
  delay: -0.4,
  opacity: 0,
  stagger: 0.05
})

drop2tl.pause()

const navigation2 = document.querySelectorAll(".dropdown-2-navigation, .dropdown-2")
const dropdown2 = document.querySelector(".dropdown-2")

navigation2.forEach(drop2 => {
  drop2.addEventListener('mouseenter', () => {
    drop2tl.play()
  });
});

navigation2.forEach(drop2 => {
  drop2.addEventListener('mouseleave', () => {
    drop2tl.reverse()
  });
});
















let drop3tl = gsap.timeline()

drop3tl.to(".dropdown-3", {
  top: "58%",
  duration: 0.5,
})

drop3tl.to(".dropdown-3-navigation svg", {
  rotate: "-90deg",
  duration: 0.3,
  delay: -0.5,
})

drop3tl.from(".third-drop-content li", {
  x: 40,
  opacity: 0,
  duration: 0.5,
  stagger: 0.02
})

drop3tl.pause()

const navigation3 = document.querySelectorAll(".dropdown-3-navigation, .dropdown-3")
const dropdown3 = document.querySelector(".dropdown-3")

navigation3.forEach(drop3 => {
  drop3.addEventListener('mouseenter', () => {
    drop3tl.play()
  });
});

navigation3.forEach(drop3 => {
  drop3.addEventListener('mouseleave', () => {
    drop3tl.reverse()
  });
});

// animatehomepage()

