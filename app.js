$ = require('jquery');
require('aframe');
var extendDeep = AFRAME.utils.extendDeep;
var meshMixins = AFRAME.primitives.getMeshMixin();
var menuImages;
var mainMenu;
var currentGallery;
var reticle;
const clickableMG_classname = 'clickableMG'; //menu gallery // the 4 panels -clickable
const non_clickableMG_classname = 'non_clickableMG';
//Hover setup
var canHoverMainMenu = true;

class fadeAnimation {
    constructor(allowAnimEnd, opacityValue, animEndCallbackID) {
        this.allowAnimationEndAction = allowAnimEnd;
        this.fadeOutNode = document.createElement('a-animation');
        this.fadeOutNode.setAttribute('attribute', 'material.opacity');
        this.fadeOutNode.setAttribute('to', opacityValue);
        if (this.allowAnimationEndAction) {
            this.fadeOutNode.addEventListener('animationend', function (event) {

                switch (animEndCallbackID) {
                    case 0:
                        hide_or_Show_menu_images_id_0();
                    default:

                        break;
                }

            });
        }

        var hide_or_Show_menu_images_id_0 = function () {
            console.log('event fade out END now');

            // menuImages.setAttribute('material', 'visible', false);
            var childsGen0 = menuImages.childNodes; // the 4 menu groups  
            for (let oneChildGenIndex in childsGen0) {
                if (childsGen0[oneChildGenIndex].nodeName == 'A-ENTITY') {
                    var boolVisible = false;
                    switch (opacityValue) {
                        case 0:
                            boolVisible = false;
                            break;
                        case 1:
                            boolVisible = true;
                            break;
                        default:
                            boolVisible = false;
                            break;
                    }
                    childsGen0[oneChildGenIndex].childNodes[1].setAttribute('material', 'visible', boolVisible);
                    childsGen0[oneChildGenIndex].childNodes[3].setAttribute('material', 'visible', boolVisible);
                }
            }
        }
    }
}

class fadeOutAnimInChilds2gen {
    constructor(parentNodes, childIndexes) { // opacityToVal-- 1 or 0 (final value in opacity)
        this.allowAnimEndBool = true;
        this.parentNodes = parentNodes;
        this.childIndexes = childIndexes;
    }
    startAnim() {

        for (let oneParent of this.parentNodes) {
            if (oneParent.localName == 'a-entity') {
                for (let oneChildIndex in this.childIndexes) {
                    // futur update: to check if node already has A-ANIMATION
                    oneParent.childNodes[this.childIndexes[oneChildIndex]].appendChild(new fadeAnimation(this.allowAnimEndBool, 0, 0).fadeOutNode);
                    this.allowAnimEndBool = false;
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
    reticle = document.querySelector('#reticle');
    window.setTimeout(function () {
        start_listener_in_MenuImages();
    }, 4000);


}

function start_listener_in_MenuImages() {
    menuImages.addEventListener('click', function (event) {
        // INFO:    event.detail.intersection.point);

        var currentTarget = event.detail.target;
        switch (currentTarget.className) {
            case clickableMG_classname:
                var all_Clickable_MG = document.getElementsByClassName(clickableMG_classname);
                while (all_Clickable_MG.length > 0) {
                    // TO REVIEW -- The classList property is not supported in Internet Explorer 9
                    all_Clickable_MG.item(0).classList.add(non_clickableMG_classname); // always ADD before REMOVE
                    all_Clickable_MG.item(0).classList.remove(clickableMG_classname);
                }

                console.log(all_Clickable_MG);
                if (canHoverMainMenu) {
                    try {
                        canHoverMainMenu = false;
                        console.log('entered');
                        // switch (event.path[0].id) {
                        //     default:
                        //      console.log('path is =', event.path[0].id);
                        //     break;
                        // }
                        var imglblParentId = currentTarget.parentElement.id; //e.g: landscape
                        var nowGalleryNode = document.querySelector('#'.concat(imglblParentId).concat('Gallery'));
                        window.setTimeout(function () {
                            if (nowGalleryNode) {
                              nowGalleryNode.setAttribute('visible', 'true');
                            }
                        }, 1000);


                        var anim_fadeOut = new fadeOutAnimInChilds2gen(menuImages.childNodes, [1, 3]);
                        document.querySelector('#NikonCams').setAttribute('visible', false); //hiding cameras
                        anim_fadeOut.startAnim();
                    } catch (e) {
                        console.log(e);
                    }
                }

                reset_reticle_raycaster(reticle);

                break;
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

$(document).ready(function () {
    after_load_SETUP();
});

<<<<<<< HEAD

function reset_reticle_raycaster(reticle_) { //refreshing raycaster's local objects
=======
function reset_reticle_raycaster(reticle_) {    //refreshing raycaster's local objects
>>>>>>> 873ff59dc679843121f5c381d9bb0358ff9a6ec6
    try {
        reticle_.components.raycaster.refreshObjects();
    } catch (e) {
        console.log(e);
    }

}