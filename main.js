// effect maker main js









// Sparkle Effect
function ninjaVanish(configObj){
    this.coords = configObj.coords;
    this.image = configObj.image;
    this.imageCount = configObj.imageCount;
    this.size = configObj.size;
    this.rotation = configObj.rotation;
    this.appendTo = configObj.appendTo;
    this.fadeTime = configObj.fadeTime;
    this.spread = configObj.spread;
    var self = this;

    this.display = function(){
        var smoke = this.createSmoke(self);
        for (var subSmoke in smoke){
            var randomTime = (Math.random() * self.fadeTime.max) + self.fadeTime.min;
            var randomTime2 = (Math.random() * self.fadeTime.max) + self.fadeTime.min;

            smoke[subSmoke].appendTo($(self.appendTo)).hide().fadeIn(1000 * randomTime).fadeOut(1000 * randomTime2 , function(){this.remove()});
        }
    };

    this.createSmoke = function(config){
        var smokeArray = [];
        for (var i = 0; i < self.imageCount; i++){
            var randomImage = Math.floor((Math.random() * config.image.length) + 0);
            var sizeRandom = Math.floor((Math.random() * config.size.max) + config.size.min);
            var angleRandom = Math.floor((Math.random() * config.rotation.max) + config.rotation.min) + 'deg';
            var spreadTop = Math.floor((Math.random() * config.spread.max) + config.spread.min);
            var spreadLeft = Math.floor((Math.random() * config.spread.max) + config.spread.min);
            var subSmoke = $('<div>').css({
                'position': 'absolute',
                'left': (config.coords[0] + spreadTop) + (- config.size.max),
                'top': (config.coords[1] + spreadLeft) + (- config.size.max),
                'height': sizeRandom,
                'width': sizeRandom,
                'background-image': 'url(' + config.image[randomImage] + ')',
                'background-size': 'contain',
                'background-repeat':'no-repeat',
                '-webkit-transform': 'rotate(' + angleRandom + ')',
                '-moz-transform': 'rotate(' + angleRandom + ')',
                '-ms-transform': 'rotate(' + angleRandom + ')',
                '-o-transform': 'rotate(' + angleRandom + ')',
                'transform': 'rotate(' + angleRandom + ')'
            });
            smokeArray.push(subSmoke);
        }
        return smokeArray;
    };

    this.setCoordinates = function(newCoords){
        self.coords = newCoords;
    }

var image3 = 'http://pngimg.com/upload/hot_dog_PNG10231.png';
var image2 = 'http://pngimg.com/upload/burger_sandwich_PNG4160.png';
var image1 = 'http://sherrychao.com/images/pizzaslice.png';
// var image1 = 'http://1.bp.blogspot.com/-xi7518g5MI0/VV25Inpsk9I/AAAAAAAAAbI/J71q0k5-Rho/s1600/3%2B%25283%2529%2B%25281%2529.png';
// var image2 = 'https://gdbooks.gitbooks.io/legacyopengl/content/Chapter10/snow.png';
// var image3 = 'http://www.textures123.com/tutorials/particles/8/particle4u.png';

function getImagesFromInputs(){
    console.log('The button was clicked and should redefine image1 2 and 3');
    image1 = $('#image1Input').val();
    image2 = $('#image2Input').val();
    image3 = $('#image3Input').val();
    console.log('image1 is now : ', image1);
    console.log('image2 is now : ', image2);
    console.log('image3 is now : ', image3);

    test.display();
}

function appendCodeDiv(){
    var codeDiv = $('<div>').attr('id', 'codeBlock').text('This is the code for the effect');
    $('#main').append(codeDiv);
}


var vanishConfig = {
    coords: [0, 0],
    image: [image1, image2, image3],
    imageCount: 1,
    size: {min: 15, max: 35},
    rotation: {min: 0, max: 180},
    appendTo: '#main',
    fadeTime: {min: .2, max: .7},
    spread: {min: 7, max: 15}
}

var test = new ninjaVanish(vanishConfig);
var currentCoordinates;





$(document).ready(function(){
    $('#addImagesBtn').click(getImagesFromInputs);
    $('#showCode').click(appendCodeDiv);

    $('#main').mousemove(function(e){
        currentCoordinates = [e.pageX, e.pageY];
        // console.log(currentCoordinates);
        test.setCoordinates(currentCoordinates);
        test.display();
    });

});