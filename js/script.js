
let lightBox = document.querySelector(".light-box");
let lightBoxItem = document.querySelector(".light-box-item") ;
let close = document.querySelector("#close");
let prev = document.querySelector("#prev") ;
let next = document.querySelector("#next") ;
let currentSlideIndex = 0
let listImg = Array.from(document.querySelectorAll('.item img')) ;

for(let i = 0 ; i<listImg.length ; i++ ){
    listImg[i].addEventListener('click' , (e)=>{
        currentSlideIndex =  listImg.indexOf(e.target) ;

        let srcImg = e.target.getAttribute("src") ;
        lightBoxItem.style.cssText = `background-image: url(${srcImg}) ; background-size : cover ;` ;
        lightBox.classList.replace("d-none" , "d-flex") ;   
    });
};

next.addEventListener("click" , ()=>{
    currentSlideIndex++ ;
    if(currentSlideIndex == listImg.length){
        currentSlideIndex = 0;
    }
    let indexSrc = listImg[currentSlideIndex].getAttribute("src") ;
    lightBoxItem.style.cssText = `background-image : url(${indexSrc})`;
});

prev.addEventListener("click" , ()=>{
    currentSlideIndex-- ;
    if(currentSlideIndex < 0){
        currentSlideIndex = 5 ;
    }
    let indexSrc = listImg[currentSlideIndex].getAttribute("src") ;
    lightBoxItem.style.cssText = `background-image : url(${indexSrc})`;
});

close.addEventListener("click" , ()=>{
    lightBox.classList.replace("d-flex" , "d-none") ;
})