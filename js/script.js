console.log('JS loaded - fine');
$(() => {

  const $horse = $('.choice');
  let $odds = $('.odds');
  const $betting = $('.bet');
  const $playerWallet = $('.playerWallet');
  const $onePound = $('.onePound');
  const $fivePound = $('.fivePound');
  const $tenPound = $('.tenPound');
  const $twentyPound = $('.twentyPound');
  const $fiftyPound = $('.fiftyPound');
  const $hundredPound = $('.hundredPound');
  const $reset = $('.resetBet');
  let $cashAvailable = $('.cashAvailable');
  const $placeBet = $('.placeBet');
  let $resultDisplayArea = $('.result');
  let $resultArray = $('.results');
  let winner = null;

  $horse.on('click', (e) => {
    console.log('hello');
    const horseChoice = $(e.target).html();
    $betting.text(horseChoice);
  });

  $cashAvailable.text(250);

  $onePound.on('click', (e)  => {
    console.log('one');
    const betAmount = $(e.target).val();
    console.log(betAmount);
    $playerWallet.text(betAmount);
  });

  $fivePound.on('click', (e)  => {
    console.log('five');
    const betAmount = $(e.target).val();
    $playerWallet.html(betAmount);
  });

  $tenPound.on('click', (e)  => {
    console.log('ten');
    const betAmount = $(e.target).val();
    $playerWallet.html(betAmount);
  });

  $twentyPound.on('click', (e)  => {
    console.log('twenty');
    const betAmount = $(e.target).val();
    $playerWallet.html(betAmount);
  });

  $fiftyPound.on('click', (e)  => {
    console.log('fifty');
    const betAmount = $(e.target).val();
    $playerWallet.html(betAmount);
  });

  $hundredPound.on('click', (e)  => {
    console.log('hundred');
    const betAmount = $(e.target).val();
    $playerWallet.html(betAmount);
  });

  $reset.on('click', (e) => {
    console.log('reset');
    $playerWallet.html('Your bet: ');
    $cashAvailable.html(250);
  });

  $placeBet.on('click', (e) => {
    console.log('bet placed');
    const moneyLeft = $cashAvailable.html() - $playerWallet.html();
    $cashAvailable.html(moneyLeft);
  });



  $( '#go' ).click(function() {
    $('.horse1:first').animate({
      left: 1000
    }, {
      duration: Math.floor(Math.random() * 9000) + 1,
      step: function(now){
        $( '.horse1:gt(0)').css('left', now );
      }
    }).promise().done(function (){
      if(winner === null) {
        winner = 'horse1';
        $resultArray.text('Winner is:  Bullet-Proof !');
      }
    });
  });

  $( '#go' ).click(function() {
    $('.horse2:first').animate({
      left: 1000
    }, {
      duration: Math.floor(Math.random() * 9000) + 1,
      step: function(now){
        $( '.horse2:gt(0)').css('left', now );
      }
    }).promise().done(function (){
      if(winner === null) {
        winner = 'horse2';
        $resultArray.text('Winner is:  Emerald Fire !');
      }
    });
  });


  $( '#go' ).click(function() {
    $('.horse3:first').animate({
      left: 1000
    }, {
      duration: Math.floor(Math.random() * 9000) + 1,
      step: function(now){
        $( '.horse3:gt(0)').css('left', now );
      }
    }).promise().done(function (){
      if(winner === null) {
        winner = 'horse3';
        $resultArray.text('Winner is:  Jalapeno !');
      }
    });
  });

  $( '#go' ).click(function() {
    $('.horse4:first').animate({
      left: 1000
    }, {
      duration: Math.floor(Math.random() * 9000) + 1,
      step: function(now){
        $( '.horse4:gt(0)').css('left', now );
      }
    }).promise().done(function (){
      if(winner === null) {
        winner = 'horse4';
        $resultArray.text('Winner is:  Mischief !');
      }
    });
  });

  $( '#go' ).click(function() {
    $('.horse5:first').animate({
      left: 1000
    }, {
      duration: Math.floor(Math.random() * 9000) + 1,
      step: function(now){
        $( '.horse5:gt(0)').css('left', now );
      }
    }).promise().done(function (){
      if(winner === null) {
        winner = 'horse5';
        $resultArray.text('Winner is:  Please Baby !');
      }
    });
  });

  $( '#go' ).click(function() {
    $('.horse6:first').animate({
      left: 1000
    }, {
      duration: Math.floor(Math.random() * 9000) + 1,
      step: function(now){
        $( '.horse6:gt(0)').css('left', now );
      }
    }).promise().done(function (){
      if(winner === null) {
        winner = 'horse6';
        $resultArray.text('Winner is:  Rise to Glory !');
      }
    });
  });
  $( '#go' ).click(function() {
    $('.horse7:first').animate({
      left: 1000
    }, {
      duration: Math.floor(Math.random() * 9000) + 1,
      step: function(now){
        $( '.horse6:gt(0)').css('left', now );
      }
    }).promise().done(function (){
      if(winner === null) {
        winner = 'horse7';
        $resultArray.text('Winner is:  Tramp Time !');
      }
    });
  });
  $( '#go' ).click(function() {
    $('.horse8:first').animate({
      left: 1000
    }, {
      duration: Math.floor(Math.random() * 9000) + 1,
      step: function(now){
        $( '.horse6:gt(0)').css('left', now );
      }
    }).promise().done(function (){
      if(winner === null) {
        winner = 'horse8';
        $resultArray.text('Winner is:  Winter Warmer !');
      }
    });
  });
  // if (console.log() === 1){
  //   $result.text = '1 won';
  // } else if (console.log() === 2) {
  //   $result.text = '2 won';
  // } else if (console.log() === 3) {
  //   $result.text = '3 won';
  // } else if (console.log() ===4) {
  //   $result.text = '4 won';
  // } else if (console.log() === 5) {
  //   $result.text = '5 won';
  // }

  $('#startAgain').click(function() {
    location.reload();
  });

});
