var freindStatus = document.querySelector("h5");
var friendBtn = document.querySelector("#friendBtn")
let flag = true;

friendBtn.addEventListener("click", function(){
    if(flag) {
        freindStatus.innerHTML =  `Friend`;
        freindStatus.style.color = 'green';
        friendBtn.innerHTML = `Unfriend`
        flag = false
    } else {
        freindStatus.innerHTML =  `Stranger`;
        freindStatus.style.color = 'Red';
        friendBtn.innerHTML = `Add Friend`
        flag = true
    }
});



var lightBulb = document.querySelector(".light");
var bulbSwitch = document.querySelector("#switch")

bulbSwitch.addEventListener("click", function(){
    if(bulbSwitch.innerHTML === "On") {
        lightBulb.style.backgroundColor =  `Yellow`;
        bulbSwitch.innerHTML = `Off`
    } else {
        lightBulb.style.backgroundColor =  `white`;
        bulbSwitch.innerHTML = `On`
    }
});