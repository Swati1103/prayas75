NProgress.configure({
    trickle: true,  
    trickleSpeed: 0, 
    minimum: 5,  
    easing: 'ease',
    speed: 1000
});

const links = document.querySelectorAll("a");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        NProgress.start();
        NProgress.inc();
    });
});

links.forEach((link) => {
    link.addEventListener("click", () => {
        NProgress.start();
        NProgress.inc();
    });
});