// import {canvas , ctx} from "./canvas.js";

// Leap hover



class LeapHover {
    constructor() {
        this.leapHoverElements = [];
        document.querySelectorAll('[data-leap-hover]').forEach(element => {
            this.leapHoverElements.push(element);
        });
    }

    verify(x, y, callback) {
        this.leapHoverElements.forEach(element => {
            let rect = element.getBoundingClientRect();
            element.classList.remove('leap-hover');
            if (x > rect.left && x < rect.right && y > rect.top && y < rect.bottom) {
                element.classList.add('leap-hover');
                // document.elementFromPoint(x, y).click();
                callback(element);
            }
        });
    }
}
const leapHover = new LeapHover();

const pointer = document.getElementById("pointer");

let isdragging = false;

// Leap Controller
const controller = new Leap.Controller();
controller.connect();
controller.on('frame', frame => {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);

    frame.hands.forEach(hand => {
        let {x, y} = getCoords(hand.stabilizedPalmPosition, frame);
        
        // Si leapHover trouve un élément HTML avec lequel x et y est en collision ...
        leapHover.verify(x, y, function(el) {

            let carrevert = el;

            // console.log(hand.grabStrength)
            if (hand.pinchStrength> 0.97) {
                let dimensions = carrevert.getBoundingClientRect();
                carrevert.style.left = (x - dimensions.width/2 - 8) + 'px';
                carrevert.style.top = (y - dimensions.height/2 - 8) + 'px';

                
                const targets = document.elementsFromPoint(x, y);
                const caseHover = targets.find(t => t.classList.contains('case'));
                if (caseHover) {
                    caseHover.innerHTML = carrevert.innerHTML;
                }
                // Remettre l'élément vert à sa position initiale

                if (caseHover.innerHTML = carrevert.innerHTML){
                    carrevert.style.left =  x
                    carrevert.style.top = y
                }
            }

        });

        // if (hand.pinchStrength >= 0.97) {
        //     ctx.fillStyle = '#f00';
        // } else {
        //     ctx.fillStyle = '#000';
        // }
        
        pointer.style.left = x +'px';
        pointer.style.top = y +'px';
    });
});

function getCoords(leapPoint, frame) {
    const [x, y, z] = frame.interactionBox.normalizePoint(leapPoint);
    return {
        x : window.innerWidth * x,
        y : window.innerHeight * (1 - y)
    };
}