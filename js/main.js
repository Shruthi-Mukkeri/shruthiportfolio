const collapsibles = document.querySelectorAll(".collapsible");
const heroPage = document.querySelector(".home-hero");
const nav = document.querySelector(".nav");

collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

const sticky = (entries) => {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};

const headerObserver = new IntersectionObserver(sticky, {
  root: null,
  threshold: 0,
});

headerObserver.observe(heroPage);
