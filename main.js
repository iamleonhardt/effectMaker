$(document).ready(function(){
    emitterLink()
    cardFlipLink();
});

function cardFlipLink(){
    $('#cardFlipContainer').click(function(){
        window.location='cardFlip/';
    })
}

function emitterLink(){
    $('#emitterContainer').click(function(){
        window.location='emitter/';
    })
}