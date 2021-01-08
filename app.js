(function () {
  let button = document.getElementById("toggle");
  let menu = document.getElementById("menu");

  button.addEventListener("click", openClose);

  function openClose() {
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
    } else {
      menu.classList.add("active");
    }
  }
})();
