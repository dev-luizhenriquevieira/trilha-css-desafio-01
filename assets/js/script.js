
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll(".reveal").forEach(el => {
  observer.observe(el);

  // força verificação inicial
  if (el.getBoundingClientRect().top < window.innerHeight) {
    el.classList.add("show");
  }
});



const btnTop = document.createElement("button");
btnTop.innerText = "↑";
btnTop.id = "btnTop";
document.body.appendChild(btnTop);

btnTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
});