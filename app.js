$ = require('jquery');
require('aframe');
var extendDeep = AFRAME.utils.extendDeep;
var meshMixins = AFRAME.primitives.getMeshMixin();
var menuImages;
function after_load_setup() {
    console.log('INFO: initial setup');
    //setup Camera;
    // your code
    console.log('document is ready');

    menuImages = document.getElementById('menuImages');
    menuImages.addEventListener('mouseenter', function (event) {
        try {
            switch (event.path[0].id) {
                default:
                    console.log('path is =', event.path[0].id);
                    break;
            }
        }
        catch (e) {
            console.log(e);
        }

    });

    // someImage = $("landscapeImg");
    // someImage.mouseenter(function () {
    //     console.log('Entered');
    //     someImage.remove();
    // });

}

$(document).ready(function () {
    after_load_setup();
});