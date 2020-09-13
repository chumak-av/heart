const img = document.querySelector(".img");
let i = 0;
setInterval(() => {
    if (i == 0) {
        img.removeAttribute("src");
        img.setAttribute("src", "./img/бс.png")

        i = 1;
    } else
    if (i == 1) {
        img.removeAttribute("src");
        img.setAttribute("src", "./img/мс.png")
        i = 0;
    }

}, 500);