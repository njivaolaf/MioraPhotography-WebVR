$ = require('jquery');
require('aframe');
var extendDeep = AFRAME.utils.extendDeep;
var meshMixins = AFRAME.primitives.getMeshMixin();
var menuImages;
var mainMenu;
var currentGallery;

//Hover setup
var canHoverMainMenu = true;

class fadeAnimation {
    constructor(allowAnimEnd, opacityValue) {
        function hide_menu_images() {
            console.log('event fade out END now');
            var childsGen0 = menuImages.childNodes; // the 4 menu groups    
         
                childsGen0[1].setAttribute('material','visible',false);
                childsGen0[3].setAttribute('material','visible',false);
                
                childsGen0[5].setAttribute('material','visible',false);
                
                childsGen0[7].setAttribute('material','visible',false);
            
        }
        this.allowAnimationEndAction = allowAnimEnd;
        this.fadeOutNode = document.createElement('a-animation');
        this.fadeOutNode.setAttribute('attribute', 'material.opacity');
        this.fadeOutNode.setAttribute('to', opacityValue);
        if (this.allowAnimationEndAction) {
            this.fadeOutNode.addEventListener('animationend', function (event) {
                hide_menu_images();

            });
        }
    }
}

class fadeOutAnimInChilds2gen {
    constructor(parentNodes, childIndexes) {
        var allowAnimEndBool = true;

        for (let oneParent of parentNodes) {
            if (oneParent.localName == 'a-entity') {

                for (let oneChildIndex in childIndexes) {
                    // if (oneChildIndex == 0) {
                    //     allowAnimEndBool = true;
                    // } else {
                    //     allowAnimEndBool = false;
                    // }
                    oneParent.childNodes[childIndexes[oneChildIndex]].appendChild(new fadeAnimation(allowAnimEndBool, 0).fadeOutNode);
                    allowAnimEndBool = false;
                }
            }
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
    // currentGallery = document.querySelector('#currentGallery');
    menuImages = document.querySelector('#menuImages');
    window.setTimeout(function () {
        start_listener_in_MenuImages();
    }, 4000);

}

function start_listener_in_MenuImages() {
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
                var imglblParent = currentTarget.parentElement;
                //     var img0label0CHILDS = imglblParent.childNodes;
                // var fade0prototype = new fadeOutAnimation();
                // var fade1prototype = new fadeOutAnimation();

                var fadeOUTimagesLabels = new fadeOutAnimInChilds2gen(menuImages.childNodes, [1, 3]);
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