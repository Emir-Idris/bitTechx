
const burger = document.querySelector(".burger")
function activeCursor(e){
    const item = e.target
    if(item.id === 'logo' || item.classList.contains('burger') ){
        mouse.classList.add('nav-active')
    }else{
        mouse.classList.remove('nav-active')
    }if(item.classList.contains('explore')){
        mouse.classList.add("explore-active")
        gsap.to('.title-swipe' , 1 , {y:"100%"})
        mouseTxt.innerText = "Tap"
       
    }else{
        mouse.classList.remove("explore-active")
       mouseTxt.innerText = ""
    gsap.to('.title-swipe' , 1 , {y:"100%"})
    }}

function navToggle(e){
    if(!e.target.classList.contains('active')){
    e.target.classList.add('active')
    gsap.to('.line1', 0.5 , {rotate: '45' , y:5 , background : 'white'})
    gsap.to('.line2', 0.5 , {rotate: '-45' , y:-5, background : 'white'})
    gsap.to("#logo", 1 , {color:'gold'})
    gsap.to('.nav-bar' , 1 , {clipPath: 'circle(2500px at 100% )'})
    document.body.classList.add('hide')
}else {
        e.target.classList.remove('active')
        gsap.to('.line1', 0.5 , {rotate: '0' , y:0 , background : 'white'})
        gsap.to('.line2', 0.5 , {rotate: '-0' , y:-0, background : 'white'})
        gsap.to("#logo", 1 , {color:'gold'})
        gsap.to('.nav-bar' , 1 , {clipPath: 'circle(50px at -100%  -10%)'})
        document.body.classList.remove('hide')        
    }
}
burger.addEventListener('click', navToggle)
