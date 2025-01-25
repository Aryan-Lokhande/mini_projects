let h3 = document.querySelector('h3');
let game = false;
let color = ['green', 'red', 'orange', 'purple'];
let sqn = [];
let level = 0;
let usersqn = [];

document.addEventListener("keypress", () => {
    if (game == false) {
        // return;
        game = true;
        levelUp();
    }
});

function flash(btn) {
    btn.classList.add('flash');
    setTimeout(() => {
        btn.classList.remove('flash');
    }, 240);
}

function userFlash(btn){
    btn.classList.add('uflash');
    setTimeout(() => {
        btn.classList.remove('uflash');
    }, 240);

}

function levelUp() {
    usersqn = [];
    level++;
    h3.innerText = `Level ${level}`;
    sqn.push(color[Math.floor(Math.random() * 4)]);
    // console.log(sqn);
    let btn = document.querySelector(`.${sqn[level - 1]}`);
    flash(btn);

}

function gameOver(){
    document.querySelector('body').classList.add('wrong');
    setTimeout(() => {
        document.querySelector('body').classList.remove('wrong');
    }, 330);

    h3.innerText = `Game Over! Press any key to start, SCORE ${level - 1}`;
    game = 0;
    level = 0;
    console.log("Correct sequence was: ",sqn);
    console.log("You enter the sequence",usersqn);
    sqn = [];
    usersqn = [];
}

function checkAns(ind) {
    if (sqn[ind] == usersqn[ind]) {
        if(usersqn.length == sqn.length){            
            // console.log("Game Continue..!");
            setTimeout(() => {
                levelUp();
            },1000);
        }
    } else {
        // console.log("Game Over");
        gameOver();
    }
}


function btnPress() {
    if (game) {
        let color = this.classList[1];
        // let btn = document.querySelector(`.${sqn[level - 1]}`);
        let btn = this;
        userFlash(btn);
        usersqn.push(color);
        checkAns(usersqn.length - 1);
    }
}


let allbtn = document.querySelectorAll('.btn');
for (b of allbtn) {
    b.addEventListener("click", btnPress);
}


