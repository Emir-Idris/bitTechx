
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


const quantityInput = document.getElementById("quantity-input");
const minusButton = document.querySelector(".minus-btn");
const plusButton = document.querySelector(".plus-btn");
const orderButton = document.getElementById("order-button");
const showOrderFormButton = document.getElementById("show-order-form-button");

const saveOrderToStorage = (product, quantity) => {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push({ product, quantity });
    localStorage.setItem("orders", JSON.stringify(orders));
};

minusButton.addEventListener("click", () => {
    let currentValue = Number(quantityInput.value);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }
});

plusButton.addEventListener("click", () => {
    let currentValue = Number(quantityInput.value);
    if (currentValue < 10) {
        quantityInput.value = currentValue + 1;
    }
});

orderButton.addEventListener("click", () => {
    const product = document.querySelector(".order-button").textContent;
    const quantity = Number(quantityInput.value);
    saveOrderToStorage(product, quantity);
    alert(`You ordered ${quantity} ${product}.`);
});

const toggleOrderForm = () => {
    const container = document.querySelector(".container");
    if (container.style.bottom === "-270px") {
        container.style.bottom = "20px";
    } else {
        container.style.bottom = "-270px";
    }
};

showOrderFormButton.addEventListener("click", toggleOrderForm);

