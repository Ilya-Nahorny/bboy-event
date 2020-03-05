let article = document.querySelectorAll('.article');
let equalizer = document.querySelectorAll('.equalizer');
let articleHover = function(){
    article.forEach(element => {
        element.addEventListener('touchend', function (){
            element.classList.toggle('articleActive');
/*             equalizer.classList.toggle('equalizerActive'); */
        })
    });

}
articleHover()