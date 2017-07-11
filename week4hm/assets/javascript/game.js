var targetNumber;
var crystalArray = [];
var score = 0;
var win = 0;
var loss = 0;
var currentNum = 0;

function init() {
  targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
  while (crystalArray.length < 4) {
    var crystalNumber = Math.floor(Math.random() * 12) + 1;
    if (crystalArray.indexOf(crystalNumber) > -1) continue;
    crystalArray[crystalArray.length] = crystalNumber;
  }
  currentNum = 0;
  $("#wins").text("Wins: " + win);
  $("#losses").text("Losses: " + loss);
  $("#target").text("Target Number: ");
  $("#whiteboard").text("Current Number: " + currentNum)
  $("#target").text("Target Number: " + targetNumber);
  console.log("crystalArray: " + crystalArray);
  console.log("set this crystal array index to ruby" + crystalArray[0]);

}


$(document).ready(function() {
  //generate unique random numbers in an array for the crystals
  init();


  $(".crystals").click(function() {
    var crystalValue = $(this).attr('id');

      if (currentNum === targetNumber) {
        alert("you win");
        win++;
        $("#wins").text("Wins: " + win);
        init();
      }

      if (currentNum > targetNumber) {
        alert("You lose");
        loss ++;
        $("#losses").text("Losses: " + loss);
        init();
      }

      else if (crystalValue === "ruby") {
      currentNum = currentNum + crystalArray[0];
      console.log("currentNum: " + currentNum);
      $("#whiteboard").text("Current Number: " + currentNum);
    }
      else if (crystalValue === "beryl") {
      currentNum = currentNum + crystalArray[1];
      console.log("currentNum: " + currentNum);
      $("#whiteboard").text("Current Number: " + currentNum);
    }
      else if (crystalValue === "emerald") {
      currentNum = currentNum + crystalArray[2];
      console.log("currentNum: " + currentNum);
      $("#whiteboard").text("Current Number: " + currentNum);
    }
      else if (crystalValue === "sapphire") {
      currentNum = currentNum + crystalArray[3];
      console.log("currentNum: " + currentNum);
      $("#whiteboard").text("Current Number: " + currentNum);
    }

  });



});
