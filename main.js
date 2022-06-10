$(document).ready(function () {
    var magic8ball = {};
    magic8ball.listOfAnswer = ['No', 'Yes', 'You can do it', "I Don't think so", "Of course!", "Indubitably", "In your dreams."];

    $("#answer").hide();

    magic8ball.askQuestion = function (question) {
        $("#8ball").effect("shake");

        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");

        $("#8ball").fadeIn(3000);

        var randonNumberForListAns = Math.random() * this.listOfAnswer.length;

        var randomIndex = Math.floor(randonNumberForListAns);

        var answer = this.listOfAnswer[randomIndex];

        $("#answer").text(answer);

        console.log(question);
        console.log(answer);
        $("#answer").show(answer);
    };

    var onclick = function(){
        $("#answer").hide();
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
    

        setTimeout(function(){
            var que = prompt("ASK A YES/NO QUESTION!");
            magic8ball.askQuestion(que);
        },500)

    };

    $('#quesButton').click(onclick);
});