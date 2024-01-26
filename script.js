const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function page4Animation() {
    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function ()       {
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
           
            fixed.style.backgroundImage = `url(${image})`
          
         
        })
    })
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 150,
    });
}
function menuAnimation() {

    var menu = document.querySelector("nav h3")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}

swiperAnimation()
page4Animation()
menuAnimation()
loaderAnimation()

const textarea = document.querySelector(".text-area")
const design = document.querySelector('#Design')
const project = document.querySelector('#project')
const Execution = document.querySelector('#Execution')
const para = document.querySelector('#para')
const maincontent = document.querySelector('.main-content')


const img1 = document.querySelector('#img1')
const img2 = document.querySelector('#img2')
const img3 = document.querySelector('#img3')


project.addEventListener('click',function(){
    gsap.to('#img2',{
        stagger: .3,
        y: -10,
        duration: 1,
        ease: Power2,
    });
  
        img1.style.display = "none"    
        img2.style.display = "block"
        img3.style.display = "none"
        para.innerHTML = "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need."

        // design.style.color = "#504A45"
        // Execution.style.color = "#504A45"

})

Execution.addEventListener('click',function(){
    gsap.to('#img3',{
        stagger: .3,
        y: -10,
        duration: 1,
        ease: Power2,
    })
    img2.style.display = "none"    
    img3.style.display = "block"
    img1.style.display = "none"
    para.innerHTML = "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience."
  

})

design.addEventListener('click',function(){
    gsap.to('#img1',{
        stagger: .3,
        y: -10,
        duration: 1,
        ease: Power2,
    })
img1.style.display = "block"
img1.style.transition = "all ease-out 0.5s"
    img2.style.display = "none"    
    img3.style.display = "none"
    para.innerHTML = "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings."
 
})

project.addEventListener('click',function(){
    design.style.color = "#504A45"
    Execution.style.color = "#504A45"
    project.style.color = "white"
})
design.addEventListener('click',function(){
    project.style.color = "#504A45"
    Execution.style.color = "#504A45"
    design.style.color = "white"
})
Execution.addEventListener('click',function(){
    project.style.color = "#504A45"
    design.style.color = "#504A45"
    Execution.style.color = "white"
})




const crsr = document.querySelector('.mouse')
const  page4 = document.querySelector('#page4')
const swiperslide = document.querySelector('.swiper-wrapper')

page4.addEventListener('mousemove',function(dets){
  
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
});


swiperslide.addEventListener('mouseenter',function(){
       crsr.style.display = "block"
       gsap.to('.mouse',{
                stagger: .3,
            opacity:1,
                ease: Power2,
            })
});

swiperslide.addEventListener('mouseleave',function(){
    crsr.style.display = "block"
    gsap.to('.mouse',{
             stagger: .3,
         opacity:0,
             ease: Power2,
         })
});
    

var mobilescen = ()=>{

const deleteto = document.querySelector(".delete-main")
const texo = document.querySelector(".texo-area")
const desi = document.querySelector("#Desi")
const pro = document.querySelector("#pro")
const Exe  = document.querySelector("#Exe")
const parac = document.querySelector("#paracommando")
const hiarea = document.querySelector(".h1-area")
const img4 = document.querySelector("#img4")
const img5 = document.querySelector("#img5")
const img6 = document.querySelector("#img6")

pro.addEventListener('click',function(){
    gsap.to('#img4',{
        stagger: .3,
        y: -10,
        duration: 1,
        ease: Power2,
    });
  
        img4.style.display = "none"    
        img5.style.display = "block"
        img6.style.display = "none"
        parac.innerHTML = "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need."

        // design.style.color = "#504A45"
        // Execution.style.color = "#504A45"

})

Exe.addEventListener('click',function(){
    gsap.to('#img5',{
        stagger: .3,
        y: -10,
        duration: 1,
        ease: Power2,
    })
    img5.style.display = "none"    
    img6.style.display = "block"
    img4.style.display = "none"
    parac.innerHTML = "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience."
  

})

desi.addEventListener('click',function(){
    gsap.to('#img6',{
        stagger: .3,
        y: -10,
        duration: 1,
        ease: Power2,
    })

img4.style.display = "block"
img4.style.transition = "all ease-out 0.5s"
    img5.style.display = "none"    
    img6.style.display = "none"
    parac.innerHTML = "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings."
 
})

pro.addEventListener('click',function(){
    desi.style.color = "#504A45"
    Exe.style.color = "#504A45"
    pro.style.color = "white"
})
desi.addEventListener('click',function(){
    pro.style.color = "#504A45"
    Exe.style.color = "#504A45"
    desi.style.color = "white"
})
Exe.addEventListener('click',function(){
    pro.style.color = "#504A45"
    desi.style.color = "#504A45"
    Exe.style.color = "white"
})



}
mobilescen()