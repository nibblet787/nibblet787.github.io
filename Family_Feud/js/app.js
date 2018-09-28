

// =============================================================================
// Global variable build =================================
let $bank = 50;
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
let $currentPlayer = $('.currentPlayer').attr('id');

// challenges array =================================
const challenges = [{
        challenge: "Name something you operate by pushing a button",
        answers: [["Elevator", 37], ["Telephone", 13], ["Microwave", 10], ["TV", 8], ["Doorbell", 6]]},
      {
        challenge: "What's the first thing you do after waking up from a nap?",
        answers: [["Go To The Bathroom", 21], ["Check The Time", 18], ["Stretch", 15], ["Yawn", 9], ["Get A Drink", 8]]
      },
      {
        challenge: "Name something people run out of",
        answers: [["Milk", 26], ["Money", 22], ["Gas", 16], ["Sugar", 11], ["Toilet Paper", 10]]
      },
      {
        challenge: "Name something that puts people to sleep",
        answers: [["Medication", 22], ["Reading", 16], ["Music", 14], ["TV", 12], ["Milk", 8]]
      },
      {
        challenge: "Name something a person has to force themselves to do daily",
        answers: [["Get Up", 31], ["Shave", 16], ["Go To Work", 14], ["Exercise", 10], ["Clean", 9]]
      },
      {
        challenge: "Tell us something a mother says to her child over and over again",
        answers: [["No", 30], ["Don't", 15], ["I Love You", 10], ["Be Quiet", 8], ["Clean Your Room", 7]]
      },
      {
        challenge: "Name something in the house that is very difficult to move",
        answers: [["Refrigerator", 42], ["Piano", 14], ["Couch", 12], ["Bed", 9], ["Dresser", 5]]
      },
      {
        challenge: "Name something you put a dust cover over",
        answers: [["Blu-ray player", 31], ["Typewriter", 18], ["Toaster", 12], ["Car", 9], ["Stereo", 7]]
      }
];

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

// ================================= ROUND 3 VARIABLE SETTINGS ================================
const $round3 = () => {
    $question = challenges[2].challenge;
    $answer0 = challenges[2].answers[0][0];
    $money0 = challenges[2].answers[0][1];
    $answer1 = challenges[2].answers[1][0];
    $money1 = challenges[2].answers[1][1];
    $answer2 = challenges[2].answers[2][0];
    $money2 = challenges[2].answers[2][1];
    $answer3 = challenges[2].answers[3][0];
    $money3 = challenges[2].answers[3][1];
    $answer4 = challenges[2].answers[4][0];
    $money4 = challenges[2].answers[4][1];
$stringBuild();
};

// ================================= ROUND 4 VARIABLE SETTINGS ================================
const $round4 = () => {
    $question = challenges[3].challenge;
    $answer0 = challenges[3].answers[0][0];
    $money0 = challenges[3].answers[0][1];
    $answer1 = challenges[3].answers[1][0];
    $money1 = challenges[3].answers[1][1];
    $answer2 = challenges[3].answers[2][0];
    $money2 = challenges[3].answers[2][1];
    $answer3 = challenges[3].answers[3][0];
    $money3 = challenges[3].answers[3][1];
    $answer4 = challenges[3].answers[4][0];
    $money4 = challenges[3].answers[4][1];
$stringBuild();
};

// ================================= ROUND 5 VARIABLE SETTINGS ================================
const $round5 = () => {
    $question = challenges[4].challenge;
    $answer0 = challenges[4].answers[0][0];
    $money0 = challenges[4].answers[0][1];
    $answer1 = challenges[4].answers[1][0];
    $money1 = challenges[4].answers[1][1];
    $answer2 = challenges[4].answers[2][0];
    $money2 = challenges[4].answers[2][1];
    $answer3 = challenges[4].answers[3][0];
    $money3 = challenges[4].answers[3][1];
    $answer4 = challenges[4].answers[4][0];
    $money4 = challenges[4].answers[4][1];
$stringBuild();
};

// ================================= ROUND 6 VARIABLE SETTINGS ================================
const $round6 = () => {
    $question = challenges[5].challenge;
    $answer0 = challenges[5].answers[0][0];
    $money0 = challenges[5].answers[0][1];
    $answer1 = challenges[5].answers[1][0];
    $money1 = challenges[5].answers[1][1];
    $answer2 = challenges[5].answers[2][0];
    $money2 = challenges[5].answers[2][1];
    $answer3 = challenges[5].answers[3][0];
    $money3 = challenges[5].answers[3][1];
    $answer4 = challenges[5].answers[4][0];
    $money4 = challenges[5].answers[4][1];
$stringBuild();
};

// ================================= ROUND 7 VARIABLE SETTINGS ================================
const $round7 = () => {
    $question = challenges[6].challenge;
    $answer0 = challenges[6].answers[0][0];
    $money0 = challenges[6].answers[0][1];
    $answer1 = challenges[6].answers[1][0];
    $money1 = challenges[6].answers[1][1];
    $answer2 = challenges[6].answers[2][0];
    $money2 = challenges[6].answers[2][1];
    $answer3 = challenges[6].answers[3][0];
    $money3 = challenges[6].answers[3][1];
    $answer4 = challenges[6].answers[4][0];
    $money4 = challenges[6].answers[4][1];
$stringBuild();
};

// ================================= ROUND 8 VARIABLE SETTINGS ================================
const $round8 = () => {
    $question = challenges[7].challenge;
    $answer0 = challenges[7].answers[0][0];
    $money0 = challenges[7].answers[0][1];
    $answer1 = challenges[7].answers[1][0];
    $money1 = challenges[7].answers[1][1];
    $answer2 = challenges[7].answers[2][0];
    $money2 = challenges[7].answers[2][1];
    $answer3 = challenges[7].answers[3][0];
    $money3 = challenges[7].answers[3][1];
    $answer4 = challenges[7].answers[4][0];
    $money4 = challenges[7].answers[4][1];
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

// Randomizer for game rounds ==============================
const $rando = () => {
    let gamePicker = Math.ceil(Math.random() * 7);
    console.log(gamePicker);
    if (gamePicker === 1) {
      $round1();
    } else if (gamePicker === 2) {
      $round2();
    } else if (gamePicker === 3) {
      $round3();
    } else if (gamePicker === 4) {
      $round4();
    } else if (gamePicker === 5) {
      $round5();
    } else if (gamePicker === 6) {
      $round6();
    } else {
      $round7();
    }
};

// Restting game tiles to default setting and attributes for the next round ==================
const $resetTiles = () => {
    $('.tile0, .tile1, .tile2, .tile3, .tile4').removeAttr('id');
}

// Checks for winner each turn =================================
const winner = () => {
    if ($bank > 98) {
      $('.question').text($currentPlayer + ' made it to $99! Congrats! THEY WIN!!!!!!!! Click \'RESET\' to play again.').removeClass().addClass('no-money');
      $('.reset').removeClass().addClass('clickReset'); // Causes reset to flash
      $('.survey-says').off(); // Prevents player from continuing to play without resetting
      $('.currentPlayer').text("$" + 99);
    } else if ($bank <= 0) {
      $('.tile0, .tile1, .tile2, .tile3, .tile4').attr('id', 'spin');
      $('.question').html($currentPlayer + ' ran out of money! THEY LOSE!!<br/>Click \'RESET\' to play again.').removeClass().addClass('no-money');
      $('.reset').removeClass().addClass('clickReset'); // Causes reset to flash
      $('.survey-says').off(); // Prevents player from continuing to play without resetting
      $('.currentPlayer').text("$" + 0);
    } else{
      console.log('checked for win or lose');
    }
};

// Check after each successful guess to see if all tiles have been cleared =================
const $checkAllTiles = () => {
    if ($bank < 99 && $('.tile0').attr('id') === 'spin' && $('.tile1').attr('id') === 'spin' && $('.tile2').attr('id') === 'spin' && $('.tile3').attr('id') === 'spin' && $('.tile4').attr('id') === 'spin') {
      alert('The board has been cleared. Moving on to the next round!');
      $resetTiles();
      $round8();
    } else {
      console.log('checked all tiles');
    }
};

// Switch "Current Player" status from one to another ===================
const $playerSwitch = () => {
    const $player1 = $('#Player1')
    const $player2 = $('#Player2')
    if ($player1.attr('class') === 'currentPlayer') {
              $player1.removeClass('currentPlayer').addClass('other').css('color', 'white');
              $player2.removeClass().addClass('currentPlayer').css('color', 'blue');
    } else if ($player2.attr('class') === 'currentPlayer') {
              $player2.removeClass('currentPlayer').addClass('other').css('color', 'white');
              $player1.removeClass().addClass('currentPlayer').css('color', 'blue');
    } else {
      console.log('switching players');
    }
};

// Creates animation for when money is deducted from player bank =============
const $byeMoney = () => {
    const $byeMoney = $('<h1>').text('-10').addClass('wrongAnswer').appendTo('.currentPlayer').fadeOut(1000);
};

// Takes input box and compares it to available answers =================================
$('.survey-says').on('click', (e)=> {
    const $input = $('#input-box').val();
    const $inputLowercase = $input.toLowerCase(); // convert to lower case so no errors on input
    if ($inputLowercase === $answer0.toLowerCase()) {
          const $picked = $('.tile0').attr('id');
          if ($picked === 'spin') { // an ID of 'spin' enables the CSS animation
              alert('Pick something else');
              $('#input-box').val(''); // clears input box for next word
      }       else {
                    $('.tile0').attr('id', 'spin');
                    $currentMoney = $('.currentPlayer').text().replace('$','');
                    $parse = parseInt($currentMoney, 10);
                    bank = $parse + $money0;
                    $('.currentPlayer').text("$" + bank); //updates current bank account
                    $('#input-box').val('');
                    winner();
                    $checkAllTiles();
                    $playerSwitch();
    }
    } else if ($inputLowercase === $answer1.toLowerCase()) {
          const $picked = $('.tile1').attr('id');
          if ($picked === 'spin') {
              alert('Pick something else');
              $('#input-box').val('');
      }       else {
                    $('.tile1').attr('id', 'spin');
                    $currentMoney = $('.currentPlayer').text().replace('$','');
                    $parse = parseInt($currentMoney, 10);
                    $bank = $parse + $money1;
                    $('.currentPlayer').text("$" + $bank);
                    $('#input-box').val('');
                    winner();
                    $checkAllTiles();
                    $playerSwitch();
    }
    } else if ($inputLowercase === $answer2.toLowerCase()) {
          const $picked = $('.tile2').attr('id');
          if ($picked === 'spin') {
              alert('Pick something else');
              $('#input-box').val('');
      }       else {
                    $('.tile2').attr('id', 'spin');
                    $currentMoney = $('.currentPlayer').text().replace('$','');
                    $parse = parseInt($currentMoney, 10);
                    $bank = $parse + $money2;
                    $('.currentPlayer').text("$" + $bank);
                    $('#input-box').val('');
                    winner();
                    $checkAllTiles();
                    $playerSwitch();
    }
    } else if ($inputLowercase === $answer3.toLowerCase()) {
          const $picked = $('.tile3').attr('id');
          if ($picked === 'spin') {
              alert('Pick something else');
              $('#input-box').val('');
      }       else {
                    $('.tile3').attr('id', 'spin');
                    $currentMoney = $('.currentPlayer').text().replace('$','');
                    $parse = parseInt($currentMoney, 10);
                    bank = $parse + $money3;
                    $('.currentPlayer').text("$" + bank);
                    $('#input-box').val('');
                    winner();
                    $checkAllTiles();
                    $playerSwitch();
    }
    } else if ($inputLowercase === $answer4.toLowerCase()) {
          const $picked = $('.tile4').attr('id');
          if ($picked === 'spin') {
              alert('Pick something else');
              $('#input-box').val('');
      }       else {
                    $('.tile4').attr('id', 'spin');
                    $currentMoney = $('.currentPlayer').text().replace('$','');
                    $parse = parseInt($currentMoney, 10);
                    $bank = $parse + $money4;
                    $('.currentPlayer').text("$" + $bank);
                    $('#input-box').val('');
                    winner();
                    $checkAllTiles();
                    $playerSwitch();
    }
    } else {
            $currentMoney = $('.currentPlayer').text().replace('$','');
            $parse = parseInt($currentMoney, 10);
            $bank = $parse - 10;
            $('.currentPlayer').text("$" + $bank);
            $('#input-box').val('');
            $byeMoney();
            winner();
            $playerSwitch();
    }
});

// Game Start =========================
$rando();

// });
