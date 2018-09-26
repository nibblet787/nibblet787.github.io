// console.log('this is app.js');




// $(() => {


// const challenges = [{
//                     challenge: "Name something you operate by pushing a button",
//                     answers: [["Elevator",37], ["Telephone",13], ["Microwave",10], ["TV",8], ["Doorbell",6]
//                   ]},
                    // {challenge: "What's the first thing you do after waking up from a nap?",
                    // answers: [["Go To Bathroom",21], ["Check The Time",18], ["Stretch",15], ["Yawn",9], ["Get A Drink",8]]},
//                     {challenge: "Name something people run out of", answers: [["Milk",26], ["Money",22], ["Gas",16], ["Sugar",11], ["Toilet Paper",10]]
//                   },
//                   {challenge: "Name something that puts people to sleep", answers: [["Medication",22],["Reading",16],["Music",14],["TV",12],["Milk",8]]
//                 }];
// "Name something a man has to force himself to do daily":[["Get Up",31],["Shave",16],["Go To Work",14],["Exercise",10],["Clean",9],["Brush Teeth",6]],
// "Tell us something a mother says to her child over and over again":[["No",30],["Don't",15],["I Love You",10],["Be Quiet",8],["Clean Your Room",7],["Don't Touch",7],["Brush Teeth",3],["Wash Hand",2]],
// "Name something in the house that is very difficult to move":[["Refrigerator",42],["Piano",14],["Couch",12],["Bed",9],["Dresser",5],["TV",5],["Stove",3]],
// "Name something you put a dust cover over":[["VCR",31],["Typewriter",18],["Toaster",12],["Car",9],["Stereo",7],["Couch",4],["Chair",3],["Computer",3]]]
// console.log(challenges[3].answers[1][0]);

// for (i = 0; i < challenges.length; i++) {
// let test = Math.floor(Math.random * challenges.length -1)[i];
// console.log(test.challenge);
// // let randomChallenges =
// };




// =============================================================================
// Global variable build =================================
let bank = 50;
let $question;
let $answer0;
let $money0;
let $answer1;
let $money1;
let $answer2;
let $money2;
let $answer3;
let $money3;
let $answer4;
let $money4;

// challenges array =================================
const challenges = [{
                  challenge: "Name something you operate by pushing a button",
                  answers: [["Elevator", 37], ["Telephone", 13], ["Microwave", 10], ["TV", 8], ["Doorbell", 6]]},
                  {
                  challenge: "What's the first thing you do after waking up from a nap?",
                  answers: [["Go To The Bathroom", 21], ["Check The Time", 18], ["Stretch", 15], ["Yawn", 9], ["Get A Drink", 8]]
                }];

// ================================= ROUND 1 VARIABLE SETTINGS =================================
const $round1 = () => {
              $question = challenges[0].challenge;
              $answer0 = challenges[0].answers[0][0];
              $money0 = challenges[0].answers[0][1];
              $answer1 = challenges[0].answers[1][0];
              $money1 = challenges[0].answers[1][1];
              $answer2 = challenges[0].answers[2][0];
              $money2 = challenges[0].answers[2][1];
              $answer3 = challenges[0].answers[3][0];
              $money3 = challenges[0].answers[3][1];
              $answer4 = challenges[0].answers[4][0];
              $money4 = challenges[0].answers[4][1];
$stringBuild();
};

// ================================= ROUND 2 VARIABLE SETTINGS =================================
const $round2 = () => {
              $question = challenges[1].challenge;
              $answer0 = challenges[1].answers[0][0];
              $money0 = challenges[1].answers[0][1];
              $answer1 = challenges[1].answers[1][0];
              $money1 = challenges[1].answers[1][1];
              $answer2 = challenges[1].answers[2][0];
              $money2 = challenges[1].answers[2][1];
              $answer3 = challenges[1].answers[3][0];
              $money3 = challenges[1].answers[3][1];
              $answer4 = challenges[1].answers[4][0];
              $money4 = challenges[1].answers[4][1];
$stringBuild();
};

// Constructing the string for display on the game board =================================
const $stringBuild = () => {
                  $('.question').text($question);
                  $('#answer0').text($answer0 + " $" + $money0);
                  $('#answer1').text($answer1 + " $" + $money1);
                  $('#answer2').text($answer2 + " $" + $money2);
                  $('#answer3').text($answer3 + " $" + $money3);
                  $('#answer4').text($answer4 + " $" + $money4);
};

// Restting game tiles to default setting and attributes ==================
const $resetTiles = () => {
  $('.tile0, .tile1, .tile2, .tile3, .tile4').removeAttr('id');
}

// Checks for winner each turn =================================
const winner = () => {
  if (bank >= 99) {
    alert('You made it to $99! Congrats! YOU WIN!!!!!!!! Resetting board...');
    $('#money').text("$" + 99);
    location.reload();
  } else if (bank <= 0) {
    alert('You ran out of money! YOU LOSE!! Resetting board...');
    $('#money').text("$" + 0);
    location.reload();
  } else{
    console.log('checked for win or lose');
  }
};

// Check after each successful guess to see if all tiles have been cleared =================
const $checkAllTiles = () => {
  if ($('.tile0').attr('id') === 'spin' && $('.tile1').attr('id') === 'spin' && $('.tile2').attr('id') === 'spin' && $('.tile3').attr('id') === 'spin' && $('.tile4').attr('id') === 'spin') {
    alert('The board has been cleared. Moving on to the next round!');
    $resetTiles();
    $round2();
  } else {
    console.log('checked all tiles');
  }
};


$round1();
// Takes input box and compares it to available answers =================================
$('.survey-says').on('click', (e)=> {
    const $input = $('#input-box').val();
    const $inputLowercase = $input.toLowerCase();
    if ($inputLowercase === $answer0.toLowerCase()) {
          const $picked = $('.tile0').attr('id');
          if ($picked === 'spin') {
              alert('Pick something else');
              $('#input-box').val('');
      }       else {
                    $('.tile0').attr('id', 'spin');
                    bank = bank += $money0;
                    $('#money').text("$" + bank);
                    $('#input-box').val('');
                    winner();
                    $checkAllTiles();
    }
    } else if ($inputLowercase === $answer1.toLowerCase()) {
          const $picked = $('.tile1').attr('id');
          if ($picked === 'spin') {
              alert('Pick something else');
              $('#input-box').val('');
      }       else {
                    $('.tile1').attr('id', 'spin');
                    bank = bank += $money1;
                    $('#money').text("$" + bank);
                    $('#input-box').val('');
                    winner();
                    $checkAllTiles();
    }
    } else if ($inputLowercase === $answer2.toLowerCase()) {
          const $picked = $('.tile2').attr('id');
          if ($picked === 'spin') {
              alert('Pick something else');
              $('#input-box').val('');
      }       else {
                    $('.tile2').attr('id', 'spin');
                    bank = bank += $money2;
                    $('#money').text("$" + bank);
                    $('#input-box').val('');
                    winner();
                    $checkAllTiles();
    }
    } else if ($inputLowercase === $answer3.toLowerCase()) {
          const $picked = $('.tile3').attr('id');
          if ($picked === 'spin') {
              alert('Pick something else');
              $('#input-box').val('');
      }       else {
                    $('.tile3').attr('id', 'spin');
                    bank = bank += $money3;
                    $('#money').text("$" + bank);
                    $('#input-box').val('');
                    winner();
                    $checkAllTiles();
    }
    } else if ($inputLowercase === $answer4.toLowerCase()) {
          const $picked = $('.tile4').attr('id');
          if ($picked === 'spin') {
              alert('Pick something else');
              $('#input-box').val('');
      }       else {
                    $('.tile4').attr('id', 'spin');
                    bank = bank += $money4;
                    $('#money').text("$" + bank);
                    $('#input-box').val('');
                    winner();
                    $checkAllTiles();
    }
    } else {
            const $byeMoney = $('<h1>').appendTo('.bank').text('-10').addClass('wrongAnswer').fadeOut(1000);
            bank = bank -= 10;
            $('#money').text("$" + bank);
            $('#input-box').val('');
            winner();
    }
});

























// ["Doorbell",6], ["Blender",4], ["Washer",4], ["Computer",3], ["Dishwasher",3] , ["Garage Door Opener",3]



// const $dark = () => {
//   $('.tile5').css('visibility', 'hidden');
//   $('#input-box').val('');
// };




// });
