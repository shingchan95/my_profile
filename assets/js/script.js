let controller = new ScrollMagic.Controller()
let timeline= new TImelineMax()

// timeline
// .to("class",5 , {x:500})
// .to("class",5 , {opactiy: 0}, '-=5');

// timeline
// .fromto("class", {x:500}, {x:300, furation:5}, "-=5")

//https://www.youtube.com/watch?v=Nt70Ld0dJCM&ab_channel=DevEd
//https://github.com/developedbyed/explore/blob/master/script.js

let scene = new ScrollMagic.Scene({
    triggerElement: "section",
     duration:"100%",
     triggerHook:0

})
.setTween(timeline)
.setPin("section")
.addTo(controller)