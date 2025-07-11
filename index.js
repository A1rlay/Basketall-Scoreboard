let homePoints = 0;
let guestPoints = 0;

let homeEl = document.getElementById("home-points");
let guestEl = document.getElementById("guest-points");

function add1Home(){
    homePoints += 1;
    homeEl.textContent = homePoints;
    checkValue()
}

function add2Home(){
    homePoints += 2;
    homeEl.textContent = homePoints;
    checkValue()
}

function add3Home(){
    homePoints += 3;
    homeEl.textContent = homePoints;
    checkValue()
}

function add1Guest(){
    guestPoints += 1;
    guestEl.textContent = guestPoints;
    checkValue()
}

function add2Guest(){
    guestPoints += 2;
    guestEl.textContent = guestPoints;
    checkValue()
}

function add3Guest(){
    guestPoints += 3;
    guestEl.textContent = guestPoints;
    checkValue()
}

function newGame(){
    homePoints = 0;
    guestPoints = 0;
    homeEl.textContent = homePoints;
    guestEl.textContent = guestPoints;
    checkValue()
}

function checkValue(){
    if(homePoints == 0 && guestPoints == 0){
        guestEl.style.textShadow = "none";
        homeEl.style.textShadow = "none";
    }
    if(homePoints > guestPoints){
        homeEl.style.textShadow = "5px 5px 1px #10d981";
        guestEl.style.textShadow = "none";
    }
    else if(homePoints < guestPoints){
        homeEl.style.textShadow = "none";
        guestEl.style.textShadow = "5px 5px 1px #10d981";
    }
    else{
        homeEl.style.textShadow = "5px 5px 1px #10d981";
        guestEl.style.textShadow = "5px 5px 1px #10d981";
    }
}
