const menu = document.querySelector(".menu-icon");
const headerItem = document.querySelector('.header-item')
const isActive = "is-show";

menu.addEventListener("click", function () {
    headerItem.classList.add(isActive);
});

window.addEventListener("click", function (e) {
    if (!menu.contains(e.target) && !e.target.matches(".menu-icon")) {
        headerItem.classList.remove(isActive);
    }
});


