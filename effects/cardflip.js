function cardflip(objConfig){
  this.config = objConfig;
  this.frontImage = this.config.frontImage;
  this.backImage = this.config.backImage;
  this.appendTo = this.config.appendTo;
  this.height = this.config.height;
  this.width = this.config.width;
  this.coordinates = this.config.coordinates;
  this.transitionTime = this.config.transitionTime;
  var self = this;
  var counter = 0;
  
  this.display = function(){
    self.createCardDiv().appendTo(self.appendTo);
  };
  
  this.createCardDiv = function(){
    var front = self.createInnerDiv(self.frontImage);
    var back = self.createInnerDiv(self.backImage).css('transform','rotateY( 180deg )');
    var main = $('<div>').css({
      'position': 'absolute',
      'height': self.height,
      'width': self.width,
      'top': self.coordinates.x,
      'left': self.coordinates.y,
      'transition': 'transform '+self.transitionTime+'s',
      'transform-style': 'preserve-3d'
    }).append(back, front).click(function(){
      self.toggle(main);
    });
    return main;
  }
  
  this.toggle = function(mainDiv){
    counter++;
    if(counter % 2 === 0){
      mainDiv.css('transform', '')
    }else{
      mainDiv.css('transform', 'rotateY( 180deg )');
    }
  }
  
  this.createInnerDiv = function(imageLink){
    return $('<div>').css({
      'position':'absolute',
      'height': '100%',
      'width': '100%',
      'background-size': 'cover',
      'background-image': 'url(' + imageLink + ')',
      'transform': 'rotateY(180deg)'
    });
    
  }
    
}

var config = {
  frontImage:'https://www.shibas.org/images/redShiba.jpg',
  backImage: 'http://vignette2.wikia.nocookie.net/hearthstone/images/c/c4/Card_back-Default.png/revision/latest?cb=20140823204025',
  height: '450px',
  width: '300',
  coordinates: {x:100, y:100},
  appendTo: 'body',
  transitionTime: 1.5
};

var newCard = new cardflip(config);
newCard.display();