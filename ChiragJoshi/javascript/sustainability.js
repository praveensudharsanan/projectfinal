const btntotop = document.qu("#btntotop");

btntotop.addEventListener("click", function () {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
    });
});