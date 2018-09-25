// console.log('this is app.js');


// $(() => {


// $('.survey-says').on('click', ()=> {
//   $('.tile5').stop().animate(
//   {rotation: 720},
//   {
//     duration: 1000,
//     step: function(now, fx) {
//       $(this).css({"transform": "rotatex("+now+"deg)"}, {"transition-timing-function": "easeOutCirc"}, {"visibility": "hidden"});
//       $(this).css('visibility', 'hidden');
//     }
//   }
// );
$('.survey-says').on('click', ()=> {
  $('.tile5').attr('id', 'spin');
  $dark();
});

const $dark = () => {
  $('.tile5').css('visibility', 'hidden');
};





























// });
