const count=document.getElementById("count");
const btns=document.querySelectorAll(".btn");
const price=document.querySelector("#price");

let increase=document.getElementById("increament");
let reset=document.getElementById("reset");
let decrease=document.getElementById("decreament");
let defaultPrice=count.innerHTML=0
const uni=5



//======================APPLICATION DOM MANIPULATION====================================================================
increase.addEventListener('click', function(){
    const incre=++count.innerHTML
    price.textContent=`${incre * uni}`
    count.style.color="green";
    count.style.background="white";
    increase.style.background="green"
})
reset.addEventListener('click', function(){
    count.innerHTML=defaultPrice
    price.textContent=0
    count.style.color="white";
    count.style.background="black";
    increase.style.background="blue"
    decrease.style.background="blue" 
})
decrease.addEventListener('click', function(){
    if(count.innerHTML <= 0){
        count.style.color="white";
        count.style.background="black";
    }else{
        const decre=--count.innerHTML
        price.textContent=`${decre * uni}`
        count.style.color="red";
        count.style.background="white";
        decrease.style.background="red";
    }
   
})


//============HEADER AND NAV-BAR SECTION========================================================================
const hamburger=document.getElementById('hamburg')
const unoder=document.getElementById('unoder1')
hamburger.addEventListener("click", function(){
    document.querySelector('.hamburger').classList.toggle("active");
    document.querySelector('.nav-links').classList.toggle("active");
})