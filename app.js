$ = require('jquery');
require('aframe');
var extendDeep = AFRAME.utils.extendDeep;
var meshMixins = AFRAME.primitives.getMeshMixin();
var menuImages;
var mainMenu;
var currentGallery;

// animations
var fadeOutMenu;

init_SETUP();

function init_SETUP() {
    set_menu_Images();
    set_animations();
}


function after_load_SETUP() {
    console.log('INFO: initial setup');
    mainMenu = document.querySelector('#mainMenu');
    currentGallery = document.querySelector('#currentGallery');
    menuImages = document.querySelector('#menuImages');
    menuImages.addEventListener('mouseenter', function (event) {
        try {
            // console.log('I was clicked at: ', event.detail.intersection.point);
            switch (event.path[0].id) {
                default: console.log('path is =', event.path[0].id);
                    break;
            }
            mainMenu.appendChild(fadeOutMenu);
        } catch (e) {
            console.log(e);
        }

    });

}

function set_menu_Images() {
    // AFRAME.registerComponent('log', {
    //     schema: {
    //         type: 'string'
    //     },
    //     init: function () {
    //         var stringToLog = this.data;
    //         console.log('stringToLog', stringToLog);
    //     }
    // })
}


function set_animations() {
    fadeOutMenu = document.createElement('a-animation');
    fadeOutMenu.setAttribute('attribute', 'visible');
    fadeOutMenu.setAttribute('begin', 1000);
    fadeOutMenu.setAttribute('to', false);
};

$(document).ready(function () {
    after_load_SETUP();
});