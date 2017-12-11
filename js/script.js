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
      alert(1);
    });
  });

});
