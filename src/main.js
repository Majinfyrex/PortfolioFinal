import ScrollReveal from "scrollreveal";
["s-right", "s-left", "s-top", "s-bottom"].forEach((className) => {
    ScrollReveal().reveal(`.${className}`, {
        delay: 200,
        duration: 1000,
        distance: "50px",
        origin: className.replace("s-", ""),
        reset: true,
    });
});

import { Observer } from 'tailwindcss-intersect';

Observer.start();
