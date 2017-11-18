$ = require('jquery')

 console.log('INFO: now in app.js');
var someImage;
var mainCamera;
function init_setup() {
    console.log('INFO: initial setup');
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