// var test = new particles();

// Doc Ready and applying click handlers
function applyClickHandler() {
    $('#addImagesBtn').click(getImagesFromInputs);
    $('#addImagesBtn').click(getSizesFromSliders);
    appendCodeDiv();
}

$(document).ready(function () {
    applyClickHandler();
    $('#main').mousemove(function (e) {
        currentCoordinates = [e.pageX, e.pageY];
        test.setCoordinates(currentCoordinates);
        test.display();
    });
});

// Menu Items

// Gets Info from the sliders
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

// Updates the Min Size
function updateMinSizeOuput(value) {
    $('#minSizeValue').val(value);
    getSizesFromSliders();
}
// Updates the Max Size
function updateMaxSizeOuput(value) {
    $('#maxSizeValue').val(value);
    getSizesFromSliders();
}

// Div where the code is displayed
function appendCodeDiv() {
    var codeDiv = $('<div id="codeBlock">This is the code for the effect</div>');
    $('#main').append(codeDiv);
    codeDiv.hide();
    $("#showCode").click(function(){
        codeDiv.toggle();
    });
}