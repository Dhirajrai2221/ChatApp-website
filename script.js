const aLink = document.querySelectorAll("a");
aLink.forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
  });
});
