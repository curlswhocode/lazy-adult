function wrapper() {
  const slides = document.querySelectorAll(".slide");
  const pages = document.querySelector(".sectiondots");

  //huidige tracked sectie
  let currentSection = 0;
  slides.forEach((slide, index) => {
    slide.addEventListener("click", function() {
      changeDots(this);
      nxtSlide(index);
    });
  });

  function changeDots(dot) {
    slides.forEach(slide => {
      slide.classList.remove("active");
    });
    dot.classList.add("active");
  }

  //   function nxtSlide(sectionNum) {
  //     const nextSection = pages[sectionNum];
  //     const shownSection = pages[currentSection];
  //     const nextLeftSide = nextSection.querySelector(".right-side .left");
  //     const nextRightSide = nextSection.querySelector(".right-side .right");
  //     const currentLeftSide = currentSection.querySelector(".right-side .left");
  //     const currentLeftSide = currentSection.querySelector(".right-side .right");
  //     const timeline = new TimeLineMax();
  //     timeline
  //       .fromTo(currentLeftSide, 0.3, { y: "10%" }, { y: "-100%" })
  //       .fromTo(currentRightSide, 0.3, { y: "10%" }, { y: "-100%" }, "-=0.2");
  //   }
  function menu() {}
}

wrapper();
