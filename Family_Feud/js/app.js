// console.log('this is app.js');

let bank = 50;


// $(() => {


// const challenges = [{
//                     challenge: "Name something you operate by pushing a button",
//                     answers: [["Elevator",37], ["Telephone",13], ["Microwave",10], ["TV",8], ["Doorbell",6]
//                   ]},
//                     {challenge: "What's the first thing you do after waking up from a nap?",
//                     answers: [["Go To Bathroom",21], ["Check The Time",18], ["Stretch",15], ["Yawn",9], ["Get A Drink",8]]},
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

// challenges array =================================
const challenges = {
                  challenge: "Name something you operate by pushing a button",
                  answers: [["Elevator", 7], ["Telephone",13], ["Microwave",10], ["TV",8], ["Doorbell",6]]
};

// trying to shorten things down for a cleaner look =================================
let $question = challenges.challenge;
let $answer0 = challenges.answers[0][0];
let $money0 = challenges.answers[0][1];
let $answer1 = challenges.answers[1][0];
let $money1 = challenges.answers[1][1];
let $answer2 = challenges.answers[2][0];
let $money2 = challenges.answers[2][1];
let $answer3 = challenges.answers[3][0];
let $money3 = challenges.answers[3][1];
let $answer4 = challenges.answers[4][0];
let $money4 = challenges.answers[4][1];

// Constructing the string for display on the game board =================================
$('.question').text(challenges.challenge);
$('#answer0').text($answer0 + " $" + $money0);
$('#answer1').text($answer1 + " $" + $money1);
$('#answer2').text($answer2 + " $" + $money2);
$('#answer3').text($answer3 + " $" + $money3);
$('#answer4').text($answer4 + " $" + $money4);

// Checks for winner each turn =================================
const winner = () => {
  if (bank >= 99) {
    alert('You made it to $99! Congrats! YOU WIN!!!!!!!!');
    $('#money').text("$" + 99);
  } else if (bank <= 0) {
    alert('You ran out of money! YOU LOSE!!');
    $('#money').text("$" + 0);
    location.reload();
  } else{
    console.log('checked for win or lose');
  }
};

// let test = [];
//
// let blah = () => {
//   for (i=0; i < test.length; i++) {
//     let foo = test += [i];
//     console.log(foo);
//   }
// }

// Takes input box and comares it to available answers =================================
$('.survey-says').on('click', ()=> {
    const $input = $('#input-box').val();
    const $inputLowercase = $input.toLowerCase();
    if ($inputLowercase === $answer0.toLowerCase()) {
      // $test();
      $('.tile0').attr('id', 'spin');
      bank = bank += $money0;
      $('#money').text("$" + bank);
      $('#input-box').val('');
      test.push(1);
      console.log(test);
      // blah();
      winner();

    } else if ($inputLowercase === $answer1.toLowerCase()) {
      $('.tile1').attr('id', 'spin');
      bank = bank += $money1;
      $('#money').text("$" + bank);
      $('#input-box').val('');
      test.push(2);
      console.log(test);
      winner();

    } else if ($inputLowercase === $answer2.toLowerCase()) {
      $('.tile2').attr('id', 'spin');
      bank = bank += $money2;
      $('#money').text("$" + bank);
      $('#input-box').val('');
      test.push(3);
      console.log(test);
      winner();

    } else if ($inputLowercase === $answer3.toLowerCase()) {
      $('.tile3').attr('id', 'spin');
      bank = bank += $money3;
      $('#money').text("$" + bank);
      $('#input-box').val('');
      test.push(4);
      console.log(test);
      winner();

    } else if ($inputLowercase === $answer4.toLowerCase()) {
      $('.tile4').attr('id', 'spin');
      bank = bank += $money4;
      $('#money').text("$" + bank);
      $('#input-box').val('');
      test.push(5);
      console.log(test);
      // blah();
      winner();

    } else {
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
