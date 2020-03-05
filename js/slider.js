const slider = document.getElementById("slider");
let slides = document.querySelectorAll(".slide");
const slide1 = document.querySelector(".slide1");
const slide2 = document.querySelector(".slide2");
const slide3 = document.querySelector(".slide3");
let dots = document.getElementsByClassName("dot")
const dot1 = document.getElementById("dot1");
const dot2 = document.getElementById("dot2");
const dot3 = document.getElementById("dot3");
let touchStart=0;
let touchEnd=0;
let translateX = 0;

const hottest = document.querySelector('.hottest');
const hottestActive = document.querySelector('.hottestActive');
const nearest = document.querySelector('.nearest');
const nearesttActive = document.querySelector('.nearestActive');
let h11 = document.querySelector('.h11');
let h12 = document.querySelector('.h12');
let h13 = document.querySelector('.h13');
let sliderLink1 = document.querySelector('.sliderLink1');
let sliderLink2 = document.querySelector('.sliderLink2');
let sliderLink3 = document.querySelector('.sliderLink3');

window.onload = function(){h11.style.opacity = 1;
    sliderLink1.style.opacity = 1;}


let slideMove = function(){

    slider.addEventListener("touchstart", function(event){  
        event.preventDefault();
       touchStart = event.touches[0].pageX;
    })
    slider.addEventListener("touchend", function(event){
        touchEnd = event.changedTouches[0].pageX;
        if(touchStart < touchEnd){
            translateX+=232;
            if(translateX > 0){
                translateX = -464;
            }
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.transform = `translateX(${translateX}px)`;
            }
        }
        else if (touchStart > touchEnd){
            translateX-=232;
            if(translateX <= -696){
                translateX = 0;
                slide2.style.opacity = '1';
            }      
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.transform = `translateX(${translateX}px)`;
            }
        }
        if(translateX == 0) {dot1.classList.add('activeDot');
                                dot2.classList.remove('activeDot');
                                dot3.classList.remove('activeDot');
                                slide1.style.opacity = "1";
                                h11.style.opacity = 1;
                                h12.style.opacity = 0;
                                h13.style.opacity = 0;
                                sliderLink1.style.opacity = 1;
                                sliderLink2.style.opacity = 0;
                                sliderLink3.style.opacity = 0;
                                hottest.classList.remove('hottestActive');
                                nearest.classList.remove('nearestActive');
                                }
        else if( translateX == -232) {dot2.classList.add('activeDot');
                                dot1.classList.remove('activeDot');
                                dot3.classList.remove('activeDot');
                                slide1.style.opacity = "0";
                                slide2.style.opacity = '1';
                                slide3.style.opacity = '1';
                                h12.style.opacity = 1;
                                h11.style.opacity = 0;
                                h13.style.opacity = 0;
                                sliderLink1.style.opacity = 0;
                                sliderLink2.style.opacity = 1;
                                sliderLink3.style.opacity = 0;
                                hottest.classList.add('hottestActive');
                                nearest.classList.remove('nearestActive');
/*                                 slide2.appendChild(h1).classList.add("h1");
                                h1.innerText = 'Temple rock'; */}
        else if( translateX == -464) {dot3.classList.add('activeDot');
                                    dot2.classList.remove('activeDot');
                                    dot1.classList.remove('activeDot');
                                    slide2.style.opacity = "0";
                                    slide1.style.opacity = "1";
                                    slide3.style.opacity = "1";
                                    h13.style.opacity = 1;
                                    h11.style.opacity = 0;
                                    h12.style.opacity = 0;
                                    sliderLink1.style.opacity = 0;
                                    sliderLink2.style.opacity = 0;
                                    sliderLink3.style.opacity = 1;
                                    hottest.classList.remove('hottestActive');
                                    nearest.classList.add('nearestActive');
/*                                     slide3.appendChild(h1).classList.add("h1");
                                    h1.innerText = 'Drop the beat 3'; */};
})

}
slideMove();

