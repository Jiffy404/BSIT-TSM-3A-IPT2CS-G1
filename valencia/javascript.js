const links = document.querySelectorAll('a[href^="#"]');

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const hash = link.hash;
    const target = document.querySelector(hash);
    target.scrollIntoView({ behavior: "smooth" });
  });
});