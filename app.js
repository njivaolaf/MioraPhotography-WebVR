$ = require('jquery');
require('aframe');
var extendDeep = AFRAME.utils.extendDeep;
var meshMixins = AFRAME.primitives.getMeshMixin();
var menuImages;
init_SETUP();

function init_SETUP() {
    set_menu_Images();
}


function after_load_SETUP() {
    console.log('INFO: initial setup');
    menuImages = document.getElementById('menuImages');
    menuImages.addEventListener('mouseenter', function (event) {
        try {
            switch (event.path[0].id) {
                default: console.log('path is =', event.path[0].id);
                break;
            }
        } catch (e) {
            console.log(e);
        }

    });

}

function set_menu_Images() {
    AFRAME.registerPrimitive('a-ocean', {
        // Attaches the `ocean` component by default.
        // Defaults the ocean to be parallel to the ground.
        defaultComponents: {
            ocean: {},
            rotation: {
                x: -90,
                y: 0,
                z: 0
            }
        },
        // Maps HTML attributes to the `ocean` component's properties.
        mappings: {
            width: 'ocean.width',
            depth: 'ocean.depth',
            density: 'ocean.density',
            color: 'ocean.color',
            opacity: 'ocean.opacity'
        }
    });
}
$(document).ready(function () {
    after_load_SETUP();
});