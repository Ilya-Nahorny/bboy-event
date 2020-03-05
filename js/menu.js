const container = document.getElementById('container');
const footer = document.querySelector('footer');
const eventsList = document.querySelector('.eventsList');
const menuBtn = document.querySelector('.menuBtn');
const eventsBtn = document.querySelector('.eventsBtn');
const searchBtn = document.querySelector('.searchBtn');
const profileBtn = document.querySelector('.profileBtn');


menuBtn.addEventListener('touchend', function(){
    menuBtn.classList.toggle('menuBtnActive');
    eventsList.classList.toggle('eventsListActive');
    container.classList.toggle('conatinerNon');
    footer.classList.toggle("footerMenu");
    if(this.classList.contains('menuBtnActive')){
        eventsBtn.classList.remove('eventsBtnActive');
        searchBtn.classList.remove('searchBtnActive');
        profileBtn.classList.remove('profileBtnActive');
    }


})
eventsBtn.addEventListener('touchend', function(){
    eventsBtn.classList.toggle('eventsBtnActive');
    if(this.classList.contains('eventsBtnActive')){
        menuBtn.classList.remove('menuBtnActive');
        searchBtn.classList.remove('searchBtnActive');
        profileBtn.classList.remove('profileBtnActive');
    }
})
searchBtn.addEventListener('touchend', function(){
    searchBtn.classList.toggle('searchBtnActive');
    if(this.classList.contains('searchBtnActive')){
        menuBtn.classList.remove('menuBtnActive');
        eventsBtn.classList.remove('eventsBtnActive');
        profileBtn.classList.remove('profileBtnActive');
    }
})
profileBtn.addEventListener('touchend', function(){
    profileBtn.classList.toggle('profileBtnActive');
    if(this.classList.contains('profileBtnActive')){
        menuBtn.classList.remove('menuBtnActive');
        eventsBtn.classList.remove('eventsBtnActive');
        searchBtn.classList.remove('searchBtnActive');
    }
})