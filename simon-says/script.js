$(document).ready(function () {
    //     Wait for player to click start
    // Start a round, which follows these steps
    // Add a random number (1-4) to the sequence
    // Animate the sequence to the user
    // Enable user interaction with the board, and register any clicks on the Simon tiles
    // While the player has not entered an incorrect response, and the number of clicks is less than the length of the sequence, wait for player input
    // Continue adding rounds until the player loses
    //------------------------------------------------------------------------------------------------------
    //input pole so ke brojt poeni/score
    //ko ke izgubis ili ko ke ti pominit vremeto gi zemat poenite i gi dodavat vo tabela pod igrava demek ko high scores
    //da gi sporedvit rezultatite i najgolemata brojka stalno da e najgore 
    function oneToFourRandom() {
        return Math.floor(Math.random() * 4 + 1);
    }

    function isTimeUp() {

    }


    $('#start').click(function () {
        let colorOrder = [];

        do {
            let oneToFourNumber = oneToFourRandom();

            // setTimeout(function () {
            switch (oneToFourNumber) {
                case 1:
                    colorOrder.push('red');
                    break;

                case 2:
                    colorOrder.push('yellow');
                    break;

                case 3:
                    colorOrder.push('blue');
                    break;

                case 4:
                    colorOrder.push('green');
                    break;
                default:
                    alert("There have been an error in the application");
            }
            // }, 1000);

            console.log(colorOrder);

        }
        while (false)
    });


    // isTimeUp() == false && madeMistake() == false



















})