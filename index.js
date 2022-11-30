randomNumber1 = Math.ceil(Math.random() * 6);
randomNumber2 = Math.ceil(Math.random() * 6);


// function generateRandom(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(generateRandom(1, 6));

function winner_declaration()
{
    if (randomNumber1 < randomNumber2)
    {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    }

    else if (randomNumber1 > randomNumber2)
    {
        document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩";
    }

    else if (randomNumber1 === randomNumber2)
    {
document.querySelector("h1").innerHTML = "Draw!";
    }
    else
    {
document.querySelector("h1").innerHTML = "Refresh Me";
    }
}

console.log(randomNumber1)
console.log(randomNumber2)


// Player 1

function dice_changer1()
{
    if (randomNumber1 === 1)
    {
        document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
    }

    else if (randomNumber1 === 2)
    {
        document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
    }

    else if (randomNumber1 === 3)
    {
        document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
    }

    else if (randomNumber1 === 4)
    {
        document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
    }

    else if (randomNumber1 === 5)
    {
        document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
    }

    else if (randomNumber1 === 6)
    {
        document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
    }

    else
    {
        document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
    }
}


// Player 2

function dice_changer2()
{
    if (randomNumber2 === 1)
    {
        document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
    }

    else if (randomNumber2 === 2)
    {
        document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
    }

    else if (randomNumber2 === 3)
    {
        document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
    }

    else if (randomNumber2 === 4)
    {
        document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
    }

    else if (randomNumber2 === 5)
    {
        document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
    }

    else if (randomNumber2 === 6)
    {
        document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
    }

    else
    {
        document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
    }
}

dice_changer1();
dice_changer2();

winner_declaration();