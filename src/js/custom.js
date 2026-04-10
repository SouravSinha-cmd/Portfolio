

// -----------====== Custom Header ======-----------

const header =document.querySelector('header');
const body = document.querySelector('body');

window.addEventListener('scroll' , function(){
  if(window.scrollY >= 10){
    body.classList.add('test');
  }else{
    console.log('not');
  }
});

// -----------====== Wow Js init ======-----------
new WOW().init();


// -----------====== Progress bar height according to scroll ======-----------


const lineInner = document.querySelector('#progress-bar');

window.addEventListener('scroll', () => {

  const scrollPosition = window.scrollY;
  
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

  const height = (scrollPosition / maxScroll) * (90 * 4) ; // Use scroll percentage
  
  lineInner.style.height = `${height}vh`;
});


// -----------====== gsap init ======-----------
gsap.registerPlugin(ScrollTrigger);

// -----------====== gsap effect on contact ======-----------
window.addEventListener("load", () => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: true,
        markers: false, // Disable markers
        onEnter: () => { // Triggered when scroll enters the defined range
          document.querySelector(".contact-section-overlay").classList.add("pattern-added");
        },
        onLeaveBack: () => { // Triggered when scrolling back
          document.querySelector(".contact-section-overlay").classList.remove("pattern-added");
        }
      }
    })
    .to("img", {
      scale: 2,
      z: 350,
      transformOrigin: "center center",
      ease: "power1.inOut"
    })
    .to(
      ".contact-section > h2",
      {
        scale: 1.1,
        transformOrigin: "center center",
        ease: "power1.inOut"
      },
      "<"
    );
});




