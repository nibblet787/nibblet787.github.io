// console.log('this is app.js');


// $(() => {
let bank = 50;
let newBank = 0;


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
const challenges = {
                  challenge: "Name something you operate by pushing a button",
                  answers: [["Elevator", 37], ["Telephone",13], ["Microwave",10], ["TV",8], ["Doorbell",6]]
};

let $question = challenges.challenge;
let $answer1 = challenges.answers[0][0];
let $money1 = challenges.answers[0][1];
let $answer2 = challenges.answers[1][0];
let $money2 = challenges.answers[1][1];
let $answer3 = challenges.answers[2][0];
let $money3 = challenges.answers[2][1];
let $answer4 = challenges.answers[3][0];
let $money4 = challenges.answers[3][1];
let $answer5 = challenges.answers[4][0];
let $money5 = challenges.answers[4][1];

$('.question').text(challenges.challenge);
$('#answer1').text(challenges.answers[0][0]);
$('#answer2').text(challenges.answers[1][0]);
$('#answer3').text(challenges.answers[2][0]);
$('#answer4').text(challenges.answers[3][0]);
// $('#answer5').text(challenges.answers[4][0] + challenges.answers[0][1]);
$('#answer5').text($answer1 + " $" + $money1);

console.log($answer1);


$('.survey-says').on('click', ()=> {
    const $input = $('#input-box').val();
    const $inputLowercase = $input.toLowerCase();
    if ($inputLowercase === $answer1.toLowerCase()) {
      $('.tile5').attr('id', 'spin');
      $dark();
      $('#input-box').val('');
    } else {
      console.log('nope');
      $('#input-box').val('');
    }

    // $('.tile5').attr('id', 'spin');
    // $dark();

});

const $dark = () => {
  $('.tile5').css('visibility', 'hidden');
};



// ["Doorbell",6], ["Blender",4], ["Washer",4], ["Computer",3], ["Dishwasher",3] , ["Garage Door Opener",3]

























// });
