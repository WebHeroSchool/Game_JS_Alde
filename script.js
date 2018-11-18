class game {
    constructor(){
        this.score = 0;
        this.live = 3;
        this.isRunning = false;
        this.isMouse = false;
        
        this.emojis = ['🐭', '🐼', '🐻', '🦊', '🐱', '🐱', '🐮', '🦁', '🐽', '🐨', '🐨', '🐰', '🐯'];
        
        let minks = document.querySelectorAll('.game-field__mink');
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
        else {
            rand2 = Math.floor(Math.random() * this.emojis.length);
            if(this.emojis[rand2] === '🐭')
                this.isMouse = true;

        return this.emojis[rand2];
        }
    }
    getClick(){
        if(this.isMouse){
            this.score += 10;
        }
        else{        
            this.live--;
        }
        
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
        while(this.live > 0){
            setTimeout(setInterval( () => this.createElement(),2000),0);
        }
        clearInterval();
    };
   
}
let newGame = new game();
let start = document.querySelector('.btn__start');
start.addEventListener('click', () => newGame.startGame());
// newGame.startGame();



