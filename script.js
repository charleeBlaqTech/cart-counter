const count=document.getElementById("count");
const btns=document.querySelectorAll(".btn");
const price=document.querySelector("#price");

let increase=document.getElementById("increament");
let reset=document.getElementById("reset");
let decrease=document.getElementById("decreament");
let defaultPrice=0
count.innerText=defaultPrice
const uni=5



//======================APPLICATION DOM MANIPULATION====================================================================
increase.addEventListener('click', function(){
    const incre=++count.innerText
    price.textContent=`${incre * uni}`
    count.style.color="green";
    count.style.background="white";
})
reset.addEventListener('click', function(){
    count.innerText=defaultPrice
    price.textContent=0
    count.style.color="white";
    count.style.background="grey";

})
decrease.addEventListener('click', function(){
    if(count.innerText <= 0){
        count.style.color="white";
        count.style.background="black";
    }else{
        const decre=--count.innerText
        price.textContent=`${decre * uni}`
        count.style.color="red";
        count.style.background="white";
    }
   
})


//============HEADER AND NAV-BAR SECTION========================================================================
const hamburger=document.getElementById('hamburg')
const unoder=document.getElementById('unoder1')
hamburger.addEventListener("click", function(){
    document.querySelector('.hamburger').classList.toggle("active");
    document.querySelector('.nav-links').classList.toggle("active");
})