let card = document.querySelector(".card_one");
let info_text = document.querySelector(".info");
let card_one_h1 = document.querySelector(".info_head");
let ballHeading = document.querySelector("#ballOne h2");
let closeBtn = document.querySelector(".closeButton");
let closeBtnTwo = document.querySelector("#ballTwoClose");
let closeBtnThree = document.querySelector("#ballThreeClose");
let invisibleText = document.querySelector(".invisibleText");
let skillsBoxContainer = document.querySelector(".skillsBoxContainer");



//Bouncing BallOne MOVEMENT script code
let ballBox = document.querySelector("#ballBox");
let ballOne = document.querySelector("#ballOne");
let ballTwo = document.querySelector("#ballTwo");
let ballThree = document.querySelector("#ballThree");

let speed = 3.6;
let speedTwo;
let speedThree;


setTimeout(() => {

    ballBox.addEventListener('mouseenter', () => {
        ballBox.classList.add("openScreen");
        console.log("screen blacked");
        invisibleText.classList.add("visibleText");


        setTimeout(() => {
            ballBox.classList.remove("openScreen");
            invisibleText.classList.remove("visibleText");
        }, 2000);
    },{once: true})
}, 2000);





//CLICK EVENT TO EXPAND THE BALLONE AND SHOW THE CONTENT
ballOne.addEventListener('click', () => {
    console.log(`ball clicked`);

    ballExpand(ballOne);
    ballsHidden(ballTwo, ballThree);
    console.log("expanded");
    clearInterval();


    speed = 0;
    speedTwo = 0;
    speedThree = 0;

})

//CLICK EVENT TO CLOSE THE EXPANDED BLOCK AND COME BACK TO BALLONE SHAPE
closeBtn.addEventListener('click', (evt) => {
    evt.stopPropagation();
    console.log("x clicked")

    originalShape();

    speed = 3.6;
    speedTwo = 4;
    speedThree = 3;


})


//CLICK EVENT TO EXPAND THE BALLTWO AND SHOW THE CONTENT
ballTwo.addEventListener('click', () => {
    console.log(`ballTwo clicked`);

    ballExpand(ballTwo);
    ballsHidden(ballOne, ballThree);
    console.log("expanded");
    clearInterval();


    speed = 0;
    speedTwo = 0;
    speedThree = 0;

})

//CLICK EVENT TO CLOSE THE EXPANDED BLOCK AND COME BACK TO BALLTWO SHAPE
closeBtnTwo.addEventListener('click', (evt) => {
    evt.stopPropagation();
    console.log("x clicked")

    originalShape();

    speed = 3.6;
    speedTwo = 4;
    speedThree = 3;


})

//CLICK EVENT TO EXPAND THE BALLTHREE AND SHOW THE CONTENT
ballThree.addEventListener('click', () => {
    console.log(`ballTwo clicked`);

    ballExpand(ballThree);
    ballsHidden(ballOne, ballTwo);
    console.log("expanded");
    clearInterval();


    speed = 0;
    speedTwo = 0;
    speedThree = 0;

})

//CLICK EVENT TO CLOSE THE EXPANDED BLOCK AND COME BACK TO BALLTHREE SHAPE
closeBtnThree.addEventListener('click', (evt) => {
    evt.stopPropagation();
    console.log("x clicked")

    originalShape();

    speed = 3.6;
    speedTwo = 4;
    speedThree = 3;


})




//FUCNTION TO EXPAND THE BALL
function ballExpand(ball) {
    ball.setAttribute("class", "big_card");
    ballHeading.classList.add("info_head");
    skillsBoxContainer.classList.add("skillsBoxContainerVisible");
}

//FUNCTION TO RESHAPE TO BALL
function originalShape() {
    ballOne.setAttribute("class", "ball");
    ballTwo.setAttribute("class", "ball");
    ballThree.setAttribute("class", "ball");
    skillsBoxContainer.classList.remove("skillsBoxContainerVisible");
}


//FUNCTION TO HIDDEN THE BALLS WHEN ONE BALL EXPANDED
function ballsHidden(ballX, ballY) {

    ballX.setAttribute("class", "ballHidden");
    ballY.setAttribute("class", "ballHidden");
    console.log("balls hided");
}




let leftRight = Math.floor(Math.random() * 2);
let right = leftRight ? true : false;

let upDown = Math.floor(Math.random() * 2);
let up = upDown ? true : false;

//Bouncing BallOne MOVEMENT script code
//SETINTERVAL FUNCTION FOR BALL MOVEMENT
start();
function start() {
    setInterval(() => {


        let ballBounds = ballOne.getBoundingClientRect();
        let borderBounds = ballBox.getBoundingClientRect();

        let ballBoundsLeft = parseInt(ballBounds.left);
        let ballBoundsRight = parseInt(ballBounds.right);
        let ballBoundsTop = parseInt(ballBounds.top);
        let ballBoundsButtom = parseInt(ballBounds.bottom);

        let ballTop = Math.floor(parseInt(window.getComputedStyle(ballOne).getPropertyValue("top")));
        let ballLeft = Math.floor(parseInt(window.getComputedStyle(ballOne).getPropertyValue("left")));

        if (right && up) {

            ballOne.style.top = ballTop - speed + "px";
            ballOne.style.left = ballLeft + speed + "px";
        }
        if (!right && up) {

            ballOne.style.top = ballTop - speed + "px";
            ballOne.style.left = ballLeft - speed + "px";
        }
        if (right && !up) {

            ballOne.style.top = ballTop + speed + "px";
            ballOne.style.left = ballLeft + speed + "px";
        }
        if (!right && !up) {

            ballOne.style.top = ballTop + speed + "px";
            ballOne.style.left = ballLeft - speed + "px";
        }

        if (ballBoundsTop <= borderBounds.top) {
            leftRight = Math.floor(Math.random() * 2);
            right = leftRight ? true : false;
            up = false;
        }
        if (ballBoundsButtom >= borderBounds.bottom) {
            leftRight = Math.floor(Math.random() * 2);
            right = leftRight ? true : false;
            up = true;
        }
        if (ballBoundsRight >= borderBounds.right) {
            right = false;
            upDown = Math.floor(Math.random() * 2);
            up = upDown ? true : false;
        }
        if (ballBoundsLeft <= borderBounds.left) {
            right = true;
            upDown = Math.floor(Math.random() * 2);
            up = upDown ? true : false;
        }

    }, 20)
}


////BALL TWO MOVEMENT CODE

speedTwo = 4;
let leftRightBallTwo = Math.floor(Math.random() * 2);
let rightBallTwo = leftRightBallTwo ? true : false;

let upDownBallTwo = Math.floor(Math.random() * 2);
let upBallTwo = upDownBallTwo ? true : false;

startTwo();
function startTwo() {
    setInterval(() => {


        let ballBounds = ballTwo.getBoundingClientRect();
        let borderBounds = ballBox.getBoundingClientRect();

        let ballBoundsLeft = parseInt(ballBounds.left);
        let ballBoundsRight = parseInt(ballBounds.right);
        let ballBoundsTop = parseInt(ballBounds.top);
        let ballBoundsButtom = parseInt(ballBounds.bottom);

        let ballTop = Math.floor(parseInt(window.getComputedStyle(ballTwo).getPropertyValue("top")));
        let ballLeft = Math.floor(parseInt(window.getComputedStyle(ballTwo).getPropertyValue("left")));

        if (rightBallTwo && upBallTwo) {

            ballTwo.style.top = ballTop - speedTwo + "px";
            ballTwo.style.left = ballLeft + speedTwo + "px";
        }
        if (!rightBallTwo && upBallTwo) {

            ballTwo.style.top = ballTop - speedTwo + "px";
            ballTwo.style.left = ballLeft - speedTwo + "px";
        }
        if (rightBallTwo && !upBallTwo) {

            ballTwo.style.top = ballTop + speedTwo + "px";
            ballTwo.style.left = ballLeft + speedTwo + "px";
        }
        if (!rightBallTwo && !upBallTwo) {

            ballTwo.style.top = ballTop + speedTwo + "px";
            ballTwo.style.left = ballLeft - speedTwo + "px";
        }

        if (ballBoundsTop <= borderBounds.top) {
            leftRightBallTwo = Math.floor(Math.random() * 2);
            rightBallTwo = leftRightBallTwo ? true : false;
            upBallTwo = false;
        }
        if (ballBoundsButtom >= borderBounds.bottom) {
            leftRightBallTwo = Math.floor(Math.random() * 2) + 1;
            rightBallTwo = leftRightBallTwo ? true : false;
            upBallTwo = true;
        }
        if (ballBoundsRight >= borderBounds.right) {
            rightBallTwo = false;
            upDownBallTwo = Math.floor(Math.random() * 2);
            upBallTwo = upDownBallTwo ? true : false;
        }
        if (ballBoundsLeft <= borderBounds.left) {
            rightBallTwo = true;
            upDownBallTwo = Math.floor(Math.random() * 2);
            upBallTwo = upDownBallTwo ? true : false;
        }

    }, 20)
}




//BALL THREE MOVEMENT CODE
speedThree = 3;
let leftRightBallThree = Math.floor(Math.random() * 2);
let rightBallThree = leftRightBallThree ? true : false;

let upDownBallThree = Math.floor(Math.random() * 2);
let upBallThree = upDownBallThree ? true : false;


startThree();
function startThree() {
    setInterval(() => {


        let ballBounds = ballThree.getBoundingClientRect();
        let borderBounds = ballBox.getBoundingClientRect();

        let ballBoundsLeft = parseInt(ballBounds.left);
        let ballBoundsRight = parseInt(ballBounds.right);
        let ballBoundsTop = parseInt(ballBounds.top);
        let ballBoundsButtom = parseInt(ballBounds.bottom);

        let ballTop = Math.floor(parseInt(window.getComputedStyle(ballThree).getPropertyValue("top")));
        let ballLeft = Math.floor(parseInt(window.getComputedStyle(ballThree).getPropertyValue("left")));

        if (rightBallThree && upBallThree) {

            ballThree.style.top = ballTop - speedThree + "px";
            ballThree.style.left = ballLeft + speedThree + "px";
        }
        if (!rightBallThree && upBallThree) {

            ballThree.style.top = ballTop - speedThree + "px";
            ballThree.style.left = ballLeft - speedThree + "px";
        }
        if (rightBallThree && !upBallThree) {

            ballThree.style.top = ballTop + speedThree + "px";
            ballThree.style.left = ballLeft + speedThree + "px";
        }
        if (!rightBallThree && !upBallThree) {

            ballThree.style.top = ballTop + speedThree + "px";
            ballThree.style.left = ballLeft - speedThree + "px";
        }

        if (ballBoundsTop <= borderBounds.top) {
            leftRightBallThree = Math.floor(Math.random() * 2);
            rightBallThree = leftRightBallThree ? true : false;
            upBallThree = false;
        }
        if (ballBoundsButtom >= borderBounds.bottom) {
            leftRightBallThree = Math.floor(Math.random() * 2) + 1;
            rightBallThree = leftRightBallThree ? true : false;
            upBallThree = true;
        }
        if (ballBoundsRight >= borderBounds.right) {
            rightBallThree = false;
            upDownBallThree = Math.floor(Math.random() * 2);
            upBallThree = upDownBallThree ? true : false;
        }
        if (ballBoundsLeft <= borderBounds.left) {
            rightBallThree = true;
            upDownBallThree = Math.floor(Math.random() * 2);
            upBallThree = upDownBallThree ? true : false;
        }

    }, 20)
}