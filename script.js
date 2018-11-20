class game {
    constructor(){
        this.totalScore = 0;
        this.live = 3;
        this.isRunning = false;
        this.isMouse = false;
        this.levelSpeed = 1;
        this.createInterval = 2000;
        this.span = '';
        
        this.emojis = ['🐭', '🐼', '🐻', '🦊', '🐱', '🐱', '🐮', '🦁', '🐽', '🐨', '🐨', '🐰', '🐯'];
        
        this.speed = document.querySelector('.star');
        this.score = document.querySelector('.score');
        this.heart = document.querySelectorAll('.life__heart');
        this.minks = document.querySelectorAll('.game-field__mink');
    }
    setSpeedLevel () {
        switch(this.totalScore){
            case 0:
                this.speed.classList.add('level-up');
                setTimeout(() => this.speed.innerHTML = this.levelSpeed, 1500);
                setTimeout(() => this.speed.classList.remove('level-up'), 4000);
                break;
            case 50:
                this.levelSpeed = 2;
                this.createInterval = 1500;
                this.speed.classList.add('level-up');
                setTimeout(() => this.speed.innerHTML = this.levelSpeed, 1500);
                setTimeout(() => this.speed.classList.remove('level-up'), 4000);
                break;
            case 100:
                this.speed.classList.remove('level-up');
                this.levelSpeed = 3;
                this.createInterval = 1000;
                this.speed.classList.add('level-up');
                setTimeout(() => this.speed.innerHTML = this.levelSpeed, 1500);
                setTimeout(() => this.speed.classList.remove('level-up'), 4000);
                break;
            case 150:
                this.levelSpeed = 4;
                this.createInterval = 500;
                this.speed.classList.add('level-up');
                setTimeout(() => this.speed.innerHTML = this.levelSpeed, 1500);
                setTimeout(() => this.speed.classList.remove('level-up'), 4000);
                break;
        }
    }
    setLive(){
        let j = this.live - 1;
        for(let i = 2; i > -1; i--){
            this.heart[i].classList.remove('life__heart-active');
        }
        for(;j > -1; j--){
            this.heart[j].classList.add('life__heart-active');
        }
    }
    getRandomEmoji () {
        let rand = Math.floor(Math.random() * 100);
        let rand2;
        if (rand <= 30){
            rand2 = Math.floor(Math.random() * 2);
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
    //     this.isMouse = true;
    // return this.emojis[0];
    }
    getClick(){
        if(this.isMouse){
            this.totalScore += 10;
            this.setSpeedLevel();
        }
        else{        
            this.live--;
            this.setLive();
        }
        if(this.live === 0){
            clearInterval(this.interval);
        }
        this.deleteElement();
        this.setScore();

    };
    setScore(){
        this.score.innerHTML = this.totalScore;
    };
    deleteElement(){
        let mink = document.querySelector('.emoji');
        if(mink)
            mink.remove();
        this.isMouse = false;
    }
    createElement(){
        // this.setScore();
        this.deleteElement();
        this.span = document.createElement('span');
        let rand = Math.floor(Math.random() * this.minks.length);

        this.span.classList.add('emoji');
        this.span.innerHTML = this.getRandomEmoji();
        // console.log(this.span.innerHTML);
        this.minks[rand].appendChild(this.span);
        this.span.addEventListener('click', () => this.getClick() ,{once: true});
        // console.log(this.isMouse);
        // console.log(this.totalScore, this.live);

    };
    startGame(){
        this.isRunning = true;
        this.setSpeedLevel();
        this.setScore();
        this.setLive();
        this.interval = setInterval( () => this.createElement(),this.createInterval);
        
    };
   
   
}
// let newGame = new game();
let rules = document.querySelector('.btn__info');
let ruleOk = document.querySelector('.game-rules__btn');
let ruleUp = document.querySelector('.game-rules');

let rule = () => ruleUp.classList.toggle('active');

rules.addEventListener('click', rule);
ruleOk.addEventListener('click', rule);


let start = document.querySelector('.btn__start');
start.addEventListener('click', () => { let newGame = new game();
                                        newGame.startGame();});





