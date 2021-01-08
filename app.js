(function () {
  let button = document.querySelector(".toggle");
  let menu = document.querySelector(".menu");

  button.addEventListener("click", openClose);

  function openClose() {
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
    } else {
      menu.classList.add("active");
    }
  }
})();
