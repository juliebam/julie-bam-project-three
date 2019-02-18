
const answers = [];

$(document).ready(function(){

    $('.start').on('click keypress', function(event) {
        if (event.which === 13 || event.type === 'click')
            $('.start').addClass("hide");
            $('.question-1').removeClass("hide");
    })
            // when (any) label is clicked, we are going to grab the value in for (answer-1) and save it to labelID variable, then we are going to grab the id value in the input and check if its equal to the value of for in label, and if its the same the clicked radio head will be checked.
    
    $('label').on('click', function() {
        const labelId = $(this).attr('for');
        $(`input[id=${labelId}`).attr('checked', true);
    })

            //Firefox bug??? - when clicking on the answer of the first question, it does not push it into the array , works fine on Chrome though...
    $('.question-1 label').on('click keypress', function(event) {
        if (event.which === 13 || event.type === 'click')
            $('.question-1').addClass("hide");
            $('.question-2').removeClass("hide");
        const userAnswer = $('input[name=biology]:checked').val();
        const pressedAnswer = $(this).val();

        if (userAnswer === "correct" || pressedAnswer === "correct" ){
            answers.push(userAnswer)
            console.log(answers);
        }     
    })
    // || pressedAnswer === "correct"

    $('.question-2 label').on('click keypress', function(event) {
        if (event.which === 13 || event.type === 'click')
            $('.question-2').addClass("hide");
            $('.question-3').removeClass("hide");
        const userAnswer = $('input[name=chemistry]:checked').val()
        if (userAnswer === "correct"){
            answers.push(userAnswer);
        } 
    })

    $('.question-3 label').on('click keypress', function(event) {
        if (event.which === 13 || event.type === 'click')
            $('.question-3').addClass("hide");
            $('.question-4').removeClass("hide");
        const userAnswer = $('input[name=earth]:checked').val()
        if (userAnswer === "correct"){
            answers.push(userAnswer);
        } 
    })

    $('.question-4 label').on('click keypress', function(event) {
        if (event.which === 13 || event.type === 'click')
            $('.question-4').addClass("hide");
            $('.question-5').removeClass("hide");
        const userAnswer = $('input[name=botany]:checked').val();
        if (userAnswer === "correct"){
            answers.push(userAnswer);
        } 
    })

    $('.question-5 label').on('click keypress', function(event) {
        if (event.which === 13 || event.type === 'click');
        const userAnswer = $('input[name=health]:checked').val()
        if (userAnswer === "correct"){
            answers.push(userAnswer);
        } 
        const numOfCorrectAnswers = answers.length;
    
        if (numOfCorrectAnswers === 5) {
            $('.question-5').addClass("hide");
            $('.results-five').removeClass("hide");
            $('.score').html(`<p>Your score is ${numOfCorrectAnswers} out of 5<p>`);
        } else if (numOfCorrectAnswers === 4){
            $('.question-5').addClass("hide");
            $('.results-four').removeClass("hide");
            $('.score').html(`<p>Your score is ${numOfCorrectAnswers} out of 5<p>`);
        } else if (numOfCorrectAnswers === 3){
            $('.question-5').addClass("hide");
            $('.results-three').removeClass("hide");
            $('.score').html(`<p>Your score is ${numOfCorrectAnswers} out of 5<p>`);
        }  else if (numOfCorrectAnswers === 2) {
            $('.question-5').addClass("hide");
            $('.results-two').removeClass("hide");
            $('.score').html(`<p>Your score is ${numOfCorrectAnswers} out of 5<p>`);
        } else {
            $('.question-5').addClass("hide");
            $('.results-one').removeClass("hide");
            $('.score').html(`<p>Your score is ${numOfCorrectAnswers} out of 5<p>`);
        }
        $('.retry').click(function() {
            location.reload();
        })

    })  
});

