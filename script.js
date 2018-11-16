class game {
    constructor(){
    this.score = 0;
    this.live = 3;
    this.isRunning = false;
    this.isMouse = false;

    this.emojis = [
        '🐭', 
        '🐼', 
        '🐻',
        '🦊',
        '🐱',
        '🐱',
        '🐮',
        '🦁',
        '🐽',
        '🐨',
        '🐨',
        '🐰',
        '🐯'
    ]
    }
    getClick(){

    };
    createElement(){

    };
    startGame(){

    };
}
let g = new game();

let mink = document.querySelector('.game-field__mink');
mink.classList.add('emoji');
mink.innerHTML = g.emojis[5];
console.log(g);