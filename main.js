// effect maker main js
var test = new particles();


function getImagesFromInputs(){
    var newArray = [];
    var image1 = $('#image1Input').val();
    var image2 = $('#image2Input').val();
    var image3 = $('#image3Input').val();

    newArray.push(image1);
    newArray.push(image2);
    newArray.push(image3);
    test.setNewimages(newArray);
}

function appendCodeDiv(){
    var codeDiv = $('<div>').attr('id', 'codeBlock').text('This is the code for the effect');
    $('#main').append(codeDiv);
}

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