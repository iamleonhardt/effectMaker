// effect maker main js
var test = new particles();

function getImagesFromInputs() {
    var newArray = [];
    var image1 = $('#image1Input').val();
    var image2 = $('#image2Input').val();
    var image3 = $('#image3Input').val();

    newArray.push(image1);
    newArray.push(image2);
    newArray.push(image3);
    test.setNewimages(newArray);
}

function getSizesFromSliders() {
    var minSize = $('#minSizeSlider').val();
    console.log($('#minSizeSlider').val());
    var maxSize = $('#maxSizeSlider').val();
    console.log('minSize : ', minSize);
    console.log('maxSize : ', maxSize);

    test.setNewSizes(minSize, maxSize);
}

function appendCodeDiv() {
    var codeDiv = $('<div id="codeBlock">This is the code for the effect</div>');
    $('#main').append(codeDiv);
    codeDiv.hide();

    $("#showCode").click(function(){
        codeDiv.toggle();
    });
}


function updateMinSizeOuput(value) {
    $('#minSizeValue').val(value);
    console.log('Slider triggered, value is : ', value);
}

function updateMaxSizeOuput(value) {
    $('#maxSizeValue').val(value);
    console.log('Slider triggered, value is : ', value);
}

function applyClickHandler() {
    $('#addImagesBtn').click(getImagesFromInputs);
    $('#addImagesBtn').click(getSizesFromSliders);
    appendCodeDiv();
}

//todo make slider oninput call the updateOutput AND the updateSize
// function onSliderInput(){
//     updateMinSizeOuput();
//     getSizesFromSliders();
// }

$(document).ready(function () {
    applyClickHandler();
    $('#main').mousemove(function (e) {
        currentCoordinates = [e.pageX, e.pageY];
        // console.log(currentCoordinates);
        test.setCoordinates(currentCoordinates);
        test.display();
    });
});