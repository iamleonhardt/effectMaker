function dropItLikeItsHot(left){
    this.left = left
    this.myArray = ['안','녕', '내', '이','름','은', ' ', ' ', ' '];
    var self = this;

    this.createDrop = function(){
        var random = Math.floor((Math.random() * self.myArray.length) + 0);
        var drop = $('<div>').text(self.myArray[random]).css({
            'position':'absolute',
            'top': '0',
            'left': this.left,
            'color': '#00ff00'
        }).animate({
            top: '800px'
        },5000,'linear').delay(5000, function(){this.remove()});
        return drop;
    }

    this.display = function(){
        setInterval(function(){
            var drop = self.createDrop();
            drop.appendTo('body');
        }, 100);
    }
}

var item;
for(var i = 0; i < 150; i++){
    var item = new dropItLikeItsHot(i*10);
    item.display();
}
