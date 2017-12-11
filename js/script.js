console.log('JS loaded - fine');
$(() => {
  const $choice = $('.choice');
  const $betting = $('.bet');

  // function bet(e) {
  //   const horseChoice = $(e.target).text();
  //   $betting.text(horseChoice);
  // }

  $choice.on('click', (e) => {
    console.log('hello');
    const horseChoice = $(e.target).text();
    $betting.text(horseChoice);
  });

  $( '#go' ).click(function() {
    $('.horse1:first').animate({
      left: 1000
    }, {
      duration: Math.floor(Math.random() * 9000) + 1,
      step: function( now, fx ){
        $( '.horse1:gt(0)').css('left', now );
      }
    });
  });
  $( '#go' ).click(function() {
    $('.horse2:first').animate({
      left: 1000
    }, {
      duration: Math.floor(Math.random() * 9000) + 1,
      step: function( now, fx ){
        $( '.horse2:gt(0)').css('left', now );
      }
    });
  });
  $( '#go' ).click(function() {
    $('.horse3:first').animate({
      left: 1000
    }, {
      duration: Math.floor(Math.random() * 9000) + 1,
      step: function( now, fx ){
        $( '.horse3:gt(0)').css('left', now );
      }
    });
  });
  $( '#go' ).click(function() {
    $('.horse4:first').animate({
      left: 1000
    }, {
      duration: Math.floor(Math.random() * 9000) + 1,
      step: function( now, fx ){
        $( '.horse4:gt(0)').css('left', now );
      }
    });
  });
  $( '#go' ).click(function() {
    $('.horse5:first').animate({
      left: 1000
    }, {
      duration: Math.floor(Math.random() * 9000) + 1,
      step: function( now, fx ){
        $( '.horse5:gt(0)').css('left', now );
      }
    });
  });
  $( '#go' ).click(function() {
    $('.horse6:first').animate({
      left: 1000
    }, {
      duration: Math.floor(Math.random() * 9000) + 1,
      step: function( now, fx ){
        $( '.horse6:gt(0)').css('left', now );
      }
    });
  });
});
//
// const $button = $('.choice');
// const $player1textarea = $('.player1');
// $button.on('click', (e) => {
//   const player1choice = $(e.target).html();
//   $player1textarea.text(player1choice);
// const $button = $('.choice');
// const $player1textarea = $('.player1');
// $button.on('click', (e) => {
//   const player1choice = $(e.target).html();
//   $player1textarea.text(player1choice);
