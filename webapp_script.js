// SCRIPT SFONDO

function home_background() {
    var ParentDocument = window.parent.document;
    var home_background = ParentDocument.querySelector('#home_background');
    var current_background = ParentDocument.querySelector('.current_background');
    current_background.classList.remove('current_background');
    home_background.classList.add('current_background');
    console.log(current_background);
}

function story1_background() {
    var ParentDocument = window.parent.document;
    var story1_background = ParentDocument.querySelector('#story1_background');
    var current_background = ParentDocument.querySelector('.current_background');
    current_background.classList.remove('current_background');
    story1_background.classList.add('current_background');
    console.log(current_background);
}

function story2_background() {
    var ParentDocument = window.parent.document;
    var story2_background = ParentDocument.querySelector('#story2_background');
    var current_background = ParentDocument.querySelector('.current_background');
    current_background.classList.remove('current_background');
    story2_background.classList.add('current_background');
    console.log(current_background);
}

function story3_background() {
    var ParentDocument = window.parent.document;
    var story3_background = ParentDocument.querySelector('#story3_background');
    var current_background = ParentDocument.querySelector('.current_background');
    current_background.classList.remove('current_background');
    story3_background.classList.add('current_background');
    console.log(current_background);
}

function authors_background() {
    var ParentDocument = window.parent.document;
    var authors_background = ParentDocument.querySelector('#authors_background');
    var current_background = ParentDocument.querySelector('.current_background');
    current_background.classList.remove('current_background');
    authors_background.classList.add('current_background');
    console.log(current_background);
}

function game_background() {
    var ParentDocument = window.parent.document;
    var game_background = ParentDocument.querySelector('#game_background');
    var current_background = ParentDocument.querySelector('.current_background');
    current_background.classList.remove('current_background');
    game_background.classList.add('current_background');
    console.log(current_background);
}

function vittoria_background() {
    var ParentDocument = window.parent.document;
    var vittoria_background = ParentDocument.querySelector('#vittoria_background');
    var current_background = ParentDocument.querySelector('.current_background');
    current_background.classList.remove('current_background');
    vittoria_background.classList.add('current_background');
    console.log(current_background);
}

function sconfitta_background() {
    var ParentDocument = window.parent.document;
    var sconfitta_background = ParentDocument.querySelector('#sconfitta_background');
    var current_background = ParentDocument.querySelector('.current_background');
    current_background.classList.remove('current_background');
    sconfitta_background.classList.add('current_background');
    console.log(current_background);
}

// SCRIPT HOME

var menu_home = document.querySelector('#menu_home');
var menu_play = document.querySelector('#menu_play');
var menu_story = document.querySelector('#menu_story');
var menu_authors_credits = document.querySelector('#menu_authors_credits');

function hover_home(){
    var current_slide = document.querySelector('.current_slide')
    current_slide.classList.remove('current_slide');
    menu_home.classList.add('current_slide');
}

function hover_play(){
    var current_slide = document.querySelector('.current_slide')
    current_slide.classList.remove('current_slide');
    menu_play.classList.add('current_slide');
}

function hover_story(){
    var current_slide = document.querySelector('.current_slide')
    current_slide.classList.remove('current_slide');
    menu_story.classList.add('current_slide');
}

function hover_authors_credits(){
    var current_slide = document.querySelector('.current_slide')
    current_slide.classList.remove('current_slide');
    menu_authors_credits.classList.add('current_slide');
}


//SCRIPT SLIDE STORIA

const carosello = document.querySelector('.carosello');
const carosello_slides = document.querySelectorAll('.slide_carosello');
const slides = Array.from(carosello_slides);
const arrow_right = document.querySelector('#arrow_right');
const arrow_left = document.querySelector('#arrow_left');

const vaiAllaSlide = (current_slide, target_slide) => {

    current_slide.classList.remove('current_slide');
    target_slide.classList.add('current_slide');
 
    const target_index = slides.findIndex(slide => slide === target_slide);
    console.log(target_index);

    if (target_index === 0) {
        arrow_left.classList.add('hidden')
        story1_background()
    }
    else {
        arrow_left.classList.remove('hidden')
    };

    if (target_index === 1) {
        story2_background()
    }

    if (target_index === 2) {
        story3_background()
    }

    if (target_index === 3) {
        arrow_right.classList.add('hidden')
        arrow_left.classList.add('hidden')
        story3_background()
    }
    else {
        arrow_right.classList.remove('hidden')
    };
};


//quando clicco sulla freccia sostituisci la slide successiva alla slide target

arrow_right.addEventListener('click', () => {
    const current_slide = document.querySelector('.current_slide'); 
    const nextSlide = current_slide.nextElementSibling; 
    
    vaiAllaSlide(current_slide, nextSlide);
});

//quando clicco sulla freccia sostituisci la slide precedente alla slide target

arrow_left.addEventListener('click', () => {
    const current_slide = document.querySelector('.current_slide'); 
    const prevSlide = current_slide.previousElementSibling; 
    
    vaiAllaSlide(current_slide, prevSlide);
});


// SCRIPT CREDITS

function credits() {
    var credits = document.querySelector('#credits');
    var authors = document.querySelector('#authors');
    var tasto_credits = document.querySelector('.tasto_credits');

    credits.classList.add('current_slide');
    authors.classList.remove('current_slide');
    tasto_credits.classList.add('hidden');
    
}

// LOADING

function loading() {
    console.log('ciao');
    var loading = document.querySelector('.loading');
    loading.classList.remove('loading_active');
}   