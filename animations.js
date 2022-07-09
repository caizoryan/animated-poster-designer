function flicker(r){
    gsap.to(r, {duration: .1, opacity: 0, stagger: 0.1});
    gsap.to(r, {duration: .1, opacity: 1, delay: .2, stagger: 0.1});
    gsap.to(r, {duration: .1, opacity: 0, delay: .3, stagger: 0.1});
    gsap.to(r, {duration: .1, opacity: 1, delay: .5, stagger: 0.1});
    gsap.to(r, {duration: .1, opacity: 0, delay: .7, stagger: 0.1});
};