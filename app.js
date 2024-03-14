let lifePoints = 100;
let botPoints = 100;

document.querySelector('#attack').addEventListener('click', playerAttack);
document.querySelector('#heal').addEventListener('click', playerAttack);

function playerAttack(evt) {
    // damage the botPoints
        // range 10-30
        const dmg = Math.floor(Math.random() * 21) + 10;
    //change the botPoints onscreen
    botPoints -= dmg;
    // change the botPoints onscreen
    document.querySelector('.enemy span').innerHTML = botPoints
    //triggers the botAttack
    botAttack();
}

function playerHeal(evt) {
    // increase the lifePoints
    //update the lifePoints
}

function botAttack() {
    //damage the playersPoint
    
    // change the lifePonts on screen
}