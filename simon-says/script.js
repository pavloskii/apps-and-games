$(document).ready(function () {
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
        while (colorOrder.length < 50)
    });


// isTimeUp() == false && madeMistake() == false



















})