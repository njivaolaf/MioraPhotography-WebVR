$ = require('jquery');
require('aframe');
var extendDeep = AFRAME.utils.extendDeep;
var meshMixins = AFRAME.primitives.getMeshMixin();
var menuImages;
var mainMenu;
var currentGallery;

//Hover setup
var canHoverMainMenu = true;

class fadeOutAnimation {
    constructor(allowAnimEnd) {
        function endingAnimation() {
            console.log('event fade out END now');
        }
        this.allowAnimationEndAction = allowAnimEnd;
        this.fadeOutNode = document.createElement('a-animation');
        this.fadeOutNode.setAttribute('attribute', 'material.opacity');
        this.fadeOutNode.setAttribute('to', 0);
        if (this.allowAnimationEndAction) {
            this.fadeOutNode.addEventListener('animationend', function (event) {
                endingAnimation();

            });
        }

    }
}

class fadeOutAnimInChilds {
    // fadeOutAnim = new fadeOutAnimation();
    constructor(parentNode, childIndexes) {
        var allowAnimEndBool = false;
        for (let oneChildIndex in childIndexes) {
            if (oneChildIndex == 0) {
                allowAnimEndBool = true;
            } else {
                allowAnimEndBool = false;
            }
            parentNode[childIndexes[oneChildIndex]].appendChild(new fadeOutAnimation(allowAnimEndBool).fadeOutNode);
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
        if (canHoverMainMenu) {
            try {
                canHoverMainMenu = false;
                console.log('entered');
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

                var fadeOUTimagesLabels = new fadeOutAnimInChilds(img0label0CHILDS, [1, 3]);
                // imglblParent.appendChild(fadeOutNode);
            } catch (e) {
                console.log(e);
            }
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