gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({scrollTrigger: {
    trigger: "#page-two",
    start:"0% 95%",
    end:"50% 50%",
    scrub: true,
    markers: true
}
});

tl.to("#fanta_can",{
    top:"115%",
    left:"9%"
},'second_page')

tl.to("#orange_slice",{
    top:"150%",
    left:"25%",
    rotate: "360deg",
},'second_page')

tl.to("#leaf-1",{
    top:"93%",
    left:"-5%",
    rotate: "180deg",
},'second_page')

tl.to("#orange",{
    top:"150%",
    left:"75%",
    scale: 0.5,
},'second_page')