gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({scrollTrigger: {
    trigger: "#page-two",
    start:"0% 95%",
    end:"50% 50%",
    scrub: true,
    // markers: true
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

var tl2 = gsap.timeline({scrollTrigger: {
    trigger: "#page-three",
    start:"0% 95%",
    end:"50% 50%",
    scrub: true,
    markers: true
}
});

tl2.from("#cocacola",{
    top:"1%",
    left:"-20%",
    rotate: "360deg",
    duration: 1,
},'thired_page')

tl2.from("#pepsi",{
    top:"100%",
    left:"120%",
    rotate: "-360deg",
    duration: 1,
},'thired_page')

tl2.to("#fanta_can",{
    top:"205%",
    left:"33%",
    rotate: "-360deg",
    duration: 1,
    scale: 0.85,
},'thired_page')
