$ = require('jquery');
require('aframe');
var extendDeep = AFRAME.utils.extendDeep;
var meshMixins = AFRAME.primitives.getMeshMixin();
var menuImages;
var mainMenu;
var currentGallery;

class fadeOutAnimation {
    constructor() {
        this.fadeOutNode = document.createElement('a-animation');
        this.fadeOutNode.setAttribute('attribute', 'material.opacity');
        this.fadeOutNode.setAttribute('delay', 1000);
        this.fadeOutNode.setAttribute('to', 0);
    }
}

class fadeOutAnimInChilds {
    // fadeOutAnim = new fadeOutAnimation();
    constructor(parentNode, childIndexes) { 
        for (let oneChild of childIndexes) {
            parentNode[oneChild].appendChild(new fadeOutAnimation().fadeOutNode);
        }
    }
}

init_SETUP();

function init_SETUP() {
    set_menu_Images();
}


function after_load_SETUP() {
    console.log('INFO: initial setup');
    mainMenu = document.querySelector('#mainMenu');
    currentGallery = document.querySelector('#currentGallery');
    menuImages = document.querySelector('#menuImages');
    menuImages.addEventListener('mouseenter', function (event) {
        // INFO // console.log('I was clicked at: ', event.detail.intersection.point);
        try {
            var currentTarget = event.detail.target;
            // switch (event.path[0].id) {
            //     default:
            //      console.log('path is =', event.path[0].id);
            //     break;
            // }
            var imglblParent = event.detail.target.parentElement;
            var img0label0CHILDS = imglblParent.childNodes;
            // var fade0prototype = new fadeOutAnimation();
            // var fade1prototype = new fadeOutAnimation();
            var fadeOUTimagesLabels = new fadeOutAnimInChilds(img0label0CHILDS, [1,3]);

            // imglblParent.appendChild(fadeOutNode);
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

function appendChildAndFadeOut() {
    myGroup[1]
}



$(document).ready(function () {
    after_load_SETUP();
});