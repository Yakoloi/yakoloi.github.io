$(document).ready(function() {

  var questions = [{
    question: "Carmen Sandiego fled the scene across the Atlantic Ocean taking shelter in a city nearly 2000 years old known for its fog and giant ferris wheel",
    possible: ["Dublin", "Toronto", "London", "Los Angeles"],
    answer: "London",
    image: "assets/images/london.jpg"
  }, {
    question: "The thief is on the run! she was spotted in a Scandinavian country with a blue and yellow flag which you might have seen at a popular home furnishing store",
    possible: ["Sweden", "Norway", "Denmark", "Finland"],
    answer: "Sweden",
    image: "assets/images/sweden.jpg"
  }, {
    question: "The sneaky criminal continues to elude us! A grainy photograph shows her crossing a bridge connecting the continents of Europe and Asia in a city once named after a Roman Emperor",
    possible: ["Moscow", "Istanbul", "Rome", "Athens"],
    answer: "Istanbul",
    image: "assets/images/istanbul.jpg"
  }, {
    question: "We're on her tail! Carmen Sandiego seems to be hiding in an African city that was once the crown jewel of several empires and which the the three mosques of Sankoré comprise its famous university",
    possible: ["Addis Adeba", "Cape Town", "Marrakesh", "Timbuktu"],
    answer: "Timbuktu",
    image: "assets/images/timbuktu.jpg"
  }, {
    question: "We've got another lead. The sticky fingered filcher left clues indicating she's near a waterfall at the edge of the Zambeze river the locals call 'The Smoke That Thunders'. ",
    possible: ["Yosemite Falls", "Iguazu Falls", "Angel Falls", "Victoria\xa0Falls"],
    answer: "Victoria\xa0Falls",
    image: "assets/images/vf.jpg"
  }, {
    question: "The double dealing diva has been spotting trekking her way atop the summit the world's highest mountain",
    possible: ["Rushmore", "Everest", "Himalaya", "Kilamanjaro"],
    answer: "Everest",
    image: "assets/images/everest.jpeg"
  }];

  var cycle = 0;
  var answerButtons;
  var correct = 0;
  var incorrect = 0;
  var number = 30;
  var intervalId;
  var gameOver = false;

  $("#picture").html('<img class="img-responsive text-center" id="splash" src="assets/images/splash.jpg"</img>')
  if (gameOver == false) {
    setTimeout(function() {
      briefing();
    }, 5000);
  }

  function briefing() {
    $("#right").empty();
    $("#wrong").empty();
    $("#picture").html('<img class="img-responsive text-center" id="badge" src="assets/images/badge.png"</img>')
    $("#question").text("Gumshoe! The elusive world trotting criminal Carmen Sandiego has stolen the Statue of Liberty. Help us capture her and recover the beloved landmark by correctly guessing her location from the provided clues. Succesfully guess 4 or more clues to win Click on your badge to begin")
    $('#badge').click(function() {
      $('#question').empty();
      $('#badge').remove();
      setup();
      console.log("clicked on badge")
    });
  }

  function setup() {
    if (cycle < 6) {
      run();
      number = 30;
      answerButtons = "";
      $("#time").html("Time left: " + number + "s");
      $("#title").text("Where in the World?");
      $("#question").html(questions[cycle].question);
      for (var i = 0; i <= 3; i++) {
        answerButtons += '<button value=' + questions[cycle].possible[i] + ' type="button" class="btn">' + questions[cycle].possible[i] + '</button>' + "<br>";
        $("#answers").html(answerButtons);
      }


      $('button').click(function() {
        if ($(this).val() == questions[cycle].answer && gameOver == false) {
          console.log("correct")
          right();
        } else {
          console.log("incorrect")
          wrong();
        }
      });
    } else if (correct > 3) {
      win();
    } else if (correct < 4) {
      lose();
    }
  }

  function right() {
    correct++;
    clearInterval(intervalId);
    $("#time").empty();
    $("#title").empty();
    $("#question").html("Correct!");
    $("#answers").empty();
    $("#picture").append('<img src="' + questions[cycle].image + '"</img>');
    setTimeout(function() {
      $("#question").empty();
      $("#picture").empty();
      cycle++;
      setup();
    }, 1000);
  }

  function wrong() {
    incorrect++;
    clearInterval(intervalId);
    $("#time").empty();
    $("#title").empty();
    $("#question").html("Incorrect!");
    $("#answers").empty();
    $("#picture").append('<img id="escape" src="assets/images/escape.gif"</img>');
    setTimeout(function() {
      $("#question").empty();
      $("#picture").empty();
      cycle++;
      setup();
    }, 5000);
  }

  function run() {
    intervalId = setInterval(decrement, 1000);
  }

  function decrement() {
    number--;
    $("#time").html("Time left: " + number + "s");
    if (number < 1) {
      outTime();
      return;
    }
  }

  function stop() {
    clearInterval(intervalId);
  }

  function outTime() {
    clearInterval(intervalId);
    wrong();
  }

  function win() {
    $("#picture").append('<img id="win" src="assets/images/liberty.jpg"</img>');
    $("#question").text("Congratulations you've recovered the statue of Liberty. Well done Gumshoe! Click to restart");
    $("#right").text("Correct Answers: " + correct);
    $("#wrong").text("incorrect Answers: " + incorrect);
    $('#win').click(function() {
      cycle = 0;
      correct = 0;
      incorrect = 0;
      $("#question").empty();
      briefing();
      console.log("restart")
    });
  }

  function lose() {
    $("#picture").append('<img id="lose" src="assets/images/lose.png"</img>');
    $("#question").text("Better luck next time! Click to restart");
    $("#right").text("Correct Answers: " + correct);
    $("#wrong").text("incorrect Answers: " + incorrect);
    $('#lose').click(function() {
      cycle = 0;
      correct = 0;
      incorrect = 0;
      $("#question").empty();
      briefing();
      console.log("restart")
    });
  }

});
