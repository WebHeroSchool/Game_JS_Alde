class game {
    constructor(){
        this.score = 0;
        this.live = 3;
        this.isRunning = false;
        this.isMouse = false;

        this.emojis = ['🐭', '🐼', '🐻', '🦊', '🐱', '🐱', '🐮', '🦁', '🐽', '🐨', '🐨', '🐰', '🐯'];
    }
    getRandomEmoji () {
        let rand = Math.floor(Math.random() * 100);
        let rand2;
        if (rand <= 30){
            rand2 = Math.floor(Math.random() * 2);
            console.log(rand2);
            if(this.emojis[rand2] === '🐭')
                this.isMouse = true;

        return this.emojis[rand2];
        }
        else{
            rand2 = Math.floor(Math.random() * this.emojis.length);
            if(this.emojis[rand2] === '🐭')
                this.isMouse = true;

        return this.emojis[rand2];
        }
    }
    getClick(){
        if(this.isMouse)
            this.score += 10;
        
        if(!this.isMouse)
            this.live--;
        
    };
    setScore(){
        let score = document.querySelector('.score');
        score.innerHTML = this.score;
    };
    deleteElement(){
        let mink = document.querySelector('.emoji');
        if(mink)
            mink.remove();
        this.isMouse = false;
    }
    createElement(){
        this.setScore();
        this.deleteElement();
        let minks = document.querySelectorAll('.game-field__mink');
        let span = document.createElement('span');
        let rand = Math.floor(Math.random() * minks.length);

        span.classList.add('emoji');
        span.innerHTML = this.getRandomEmoji();
        console.log(span.innerHTML);
        span.addEventListener('click', () => this.getClick());
        minks[rand].appendChild(span);
        console.log(this.isMouse);
        console.log(this.score, this.live);

    };
    startGame(){
        this.isRunning = true;
        let interval = setInterval( () => this.createElement(),2000);

    };
}
let newGame = new game();
let start = document.querySelector('.btn__start');
start.addEventListener('click', () => newGame.startGame());
// newGame.startGame();



