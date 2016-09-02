function particles(configObj){
    this.configs = configObj|| {
            coords: [0, 0],                 //Start coordinates if effect is used statically
            image: [                        //Array of images to be repeated in effect
                'effects/images/snow.png',
                'effects/images/particle4u.png',
                'effects/images/particle5u.png'
            ],
            imageCount: 1,                  //Number of images generated per mouse move
            size: {min: 10, max: 20},       //Lower and upper bound of image size for random selection
            rotation: {min: 0, max: 180},   //lower and upper bound angles of random rotation
            appendTo: 'body',              //What element to append effect to
            fadeTime: {min: .2, max: .7},   //Lower and upper bound of fade time to be randomly selected and applied to images
            spread: {min: 15, max: 35}      //Lower and upper bound of image spread to be randomly selected
        };
    this.coords = this.configs.coords;
    this.image = this.configs.image;
    this.imageCount = this.configs.imageCount;
    this.size = this.configs.size;
    // this.minSize = this.configs.size.min;
    // this.maxSize = this.configs.size.max;
    this.rotation = this.configs.rotation;
    this.appendTo = this.configs.appendTo;
    this.fadeTime = this.configs.fadeTime;
    this.spread = this.configs.spread;
    var self = this;
    this.display = function(){
        var particle = this.createParticles(self);
        for (var subParticle in particle){
            var randomTime = (Math.random() * self.fadeTime.max) + self.fadeTime.min;
            var randomTime2 = (Math.random() * self.fadeTime.max) + self.fadeTime.min;
            particle[subParticle].appendTo($(self.appendTo)).hide().fadeIn(1000 * randomTime).fadeOut(1000 * randomTime2 , function(){this.remove()});
        }
    };
    this.createParticles = function(config){
        var particleArray = [];
        for (var i = 0; i < self.imageCount; i++){
            var randomImage = Math.floor((Math.random() * config.image.length) + 0);
            var sizeRandom = Math.floor((Math.random() * config.size.max) + config.size.min);
            console.log('configs.size.min is: ', config.size.min);
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
            particleArray.push(subSmoke);
        }
        return particleArray;
    };
    this.setNewimages = function(newImageArray){
        self.image = newImageArray;
        console.log('in setNewimages self : ', self);
    }
    this.setNewSizes = function(minSize, maxSize){
        self.size.min = minSize;
        self.size.max = maxSize;
        console.log('self.minSize is : ', self.minSize);
        console.log('self.maxSize is : ', self.maxSize);
    }

    this.setCoordinates = function(newCoords){
        self.coords = newCoords;
    }
}