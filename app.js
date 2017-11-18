$ = require('jquery')

console.log('Now in main.js');

var someImage;
var mainCamera;
function init_setup() {
    console.log('initial setup');
    //setup Camera;
    mainCamera = document.querySelector('a-camera');

    someImage = $("img1");
    someImage.mouseenter(function () {
        console.log('Entered');
        // document.getElementById('mycursor').remove();
        someImage.remove();
    });
}
init_setup();