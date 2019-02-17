


const answers = [];

$(document).ready(function(){
   
    $('.start').on('click', function() {
        $('.start').addClass("hide");
        $('.question-1').removeClass("hide");
    })
// when (any) label is clicked, we are going to grab the value in for (answer-1) and save it to labelID variable, then we are going to grab the id value in the input and check if its equal to the value of for in label, and if its the same the clicked radio head will be checked.
    $('label').on('click', function() {
        const labelId = $(this).attr('for');
        $(`input[id=${labelId}`).attr('checked', true);
    })

    $('.question-1 label').on('click', function() {
        $('.question-1').addClass("hide");
        $('.question-2').removeClass("hide");
    // when the user clicks on the label that is his answer, we will store his answer in variable userAnswer
    // the userAnswer will be evaluated and if "correct", it will be push into a new array (answers)
        const userAnswer = $('input[name=biology]:checked').val();
        if (userAnswer === "correct"){
            answers.push(userAnswer)
            console.log(answers);
        }     
    })


    $('.question-2 label').on('click', function() {
        $('.question-2').addClass("hide");
        $('.question-3').removeClass("hide");

        const userAnswer = $('input[name=chemistry]:checked').val()
        if (userAnswer === "correct"){
            answers.push(userAnswer);
            console.log(answers);
        } 
    })

    $('.question-3 label').on('click', function() {
        $('.question-3').addClass("hide");
        $('.question-4').removeClass("hide");

        const userAnswer = $('input[name=earth]:checked').val()
        if (userAnswer === "correct"){
            answers.push(userAnswer);
            console.log(answers);
        } 
    })

    $('.question-4 label').on('click', function() {
        $('.question-4').addClass("hide");
        $('.question-5').removeClass("hide");

        const userAnswer = $('input[name=botany]:checked').val();
        if (userAnswer === "correct"){
            answers.push(userAnswer);
            console.log(answers);
        } 
    })

    $('.question-5 label').on('click', function() {
        const userAnswer = $('input[name=health]:checked').val()
        if (userAnswer === "correct"){
            answers.push(userAnswer)
            console.log(answers);
        } 

        const numOfCorrectAnswers = answers.length;
        
        console.log(numOfCorrectAnswers);

        if (numOfCorrectAnswers === 5) {
            $('.question-5').addClass("hide");
            $('.results-five').removeClass("hide");
            $('.score').html(`<p> ${numOfCorrectAnswers} <p>`);
        } else if (numOfCorrectAnswers === 4){
            $('.question-5').addClass("hide");
            $('.results-four').removeClass("hide");
            $('.score').html(`<p> ${numOfCorrectAnswers} <p>`);
        } else if (numOfCorrectAnswers === 3){
            $('.question-5').addClass("hide");
            $('.results-three').removeClass("hide");
            $('.score').html(`<p> ${numOfCorrectAnswers} <p>`);
        }  else if (numOfCorrectAnswers === 2) {
            $('.question-5').addClass("hide");
            $('.results-two').removeClass("hide");
            $('.score').html(`<p> ${numOfCorrectAnswers} <p>`);
        } else {
            $('.question-5').addClass("hide");
            $('.results-one').removeClass("hide");
            $('.score').html(`<p> ${numOfCorrectAnswers} <p>`);
        }
    
    })  
  

    });

