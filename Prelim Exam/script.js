
// smooth scroll while clicking
const links = document.querySelectorAll('.navbar-nav .nav-item');

for(const link of links){
    link.addEventListener('click', clickHandler);
}

function clickHandler(e){
    e.preventDefault();
    const href = this.firstElementChild.getAttribute("href");
    document.querySelector(href).scrollIntoView({
        behavior: "smooth"
    });
}