console.log('JS loaded - fine');
$(() => {

  const $horse = $('.choice');
  const $odds = $('.odds');
  const $betting = $('.bet');
  const $playerWallet = $('.playerWallet');
  const $onePound = $('.onePound');
  const $fivePound = $('.fivePound');
  const $tenPound = $('.tenPound');
  const $twentyPound = $('.twentyPound');
  const $fiftyPound = $('.fiftyPound');
  const $hundredPound = $('.hundredPound');
  const $reset = $('.resetBet');
  const $secondPlace = $('.secondPlace');
  const $thirdPlace = $('.thirdPlace');
  const $cashAvailable = $('.cashAvailable');
  const $placeBet = $('.placeBet');
  const $resultDisplayArea = $('.result');
  const $resultArray = $('.results');
  let winner = null;
  let secondPlace = null;
  let thirdPlace = null;
  const $finalBet = $('.finalBet');
  let betAmount = 0;

  $horse.on('click', (e) => {
    console.log('hello');
    const horseChoice = $(e.target).html();
    $betting.text(horseChoice);
  });

  $cashAvailable.text(250);

  $onePound.on('click', (e)  => {
    console.log('one');
    betAmount = $(e.target).val();
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
    $betting.text('To bet on a horse, click on its name');
    $finalBet.text = '';
  });

  $placeBet.on('click', (e) => {
    console.log('bet placed');
    const moneyLeft = $cashAvailable.html() - $playerWallet.html();
    // const bet = $playerWallet.html();
    $cashAvailable.html(moneyLeft);
    const horse = $betting.text();
    $finalBet.text(horse);
  });

  if ($resultArray === $finalBet) {
    console.log('peace');
  }

  $('#go').click(function() {
    $('.horse1').animate({
      left: 1000
    }, {
      duration: Math.floor(Math.random() * 9000) + 1,
      step: function(now){
        $( '.horse1:gt(0)').css('left', now );
      }
    }).promise().done(function (){
      if(winner === null) {
        winner = 'horse1';
        $resultArray.text('1st: Bullet-Proof !');
      } else if (secondPlace === null) {
        secondPlace = 'horse1';
        $secondPlace.text('2nd: Bullet-Proof !');
      } else if (thirdPlace === null) {
        thirdPlace = 'horse1';
        $thirdPlace.text('3rd: Bullet-Proof !');
      }
    });
  });

  $('#go').click(function() {
    $('.horse2').animate({
      left: 1000
    }, {
      duration: Math.floor(Math.random() * 9000) + 1,
      step: function(now){
        $( '.horse2:gt(0)').css('left', now );
      }
    }).promise().done(function (){
      if(winner === null) {
        winner = 'horse2';
        $resultArray.text('1st: Emerald Fire !');
      } else if (secondPlace === null)  {
        secondPlace = 'horse2';
        $secondPlace.text('2nd: Emerald Fire !');
      } else if (thirdPlace === null) {
        thirdPlace = 'horse2';
        $thirdPlace.text('3rd: Emerald Fire !');
      }
    });
  });


  $('#go').click(function() {
    $('.horse3').animate({
      left: 1000
    }, {
      duration: Math.floor(Math.random() * 9000) + 1,
      step: function(now){
        $( '.horse3:gt(0)').css('left', now );
      }
    }).promise().done(function (){
      if(winner === null) {
        winner = 'horse3';
        $resultArray.text('1st: Jalapeno !');
      } else if (secondPlace === null)  {
        secondPlace = 'horse3';
        $secondPlace.text('2nd: Jalapeno !');
      } else if (thirdPlace === null) {
        thirdPlace = 'horse3';
        $thirdPlace.text('3rd: Jalapeno !');
      }
    });
  });

  $('#go').click(function() {
    $('.horse4').animate({
      left: 1000
    }, {
      duration: Math.floor(Math.random() * 9000) + 1,
      step: function(now){
        $( '.horse4:gt(0)').css('left', now );
      }
    }).promise().done(function (){
      if(winner === null) {
        winner = 'horse4';
        $resultArray.text('1st: Mischief !');
      } else if (secondPlace === null) {
        secondPlace = 'horse4';
        $secondPlace.text('2nd: Mischief !');
      } else if (thirdPlace === null) {
        thirdPlace = 'horse4';
        $thirdPlace.text('3rd: Mischief !');
      }
    });
  });

  $('#go').click(function() {
    $('.horse5').animate({
      left: 1000
    }, {
      duration: Math.floor(Math.random() * 9000) + 1,
      step: function(now){
        $( '.horse5:gt(0)').css('left', now );
      }
    }).promise().done(function (){
      if(winner === null) {
        winner = 'horse5';
        $resultArray.text('1st: Please Baby !');
      } else if (secondPlace === null) {
        secondPlace = 'horse5';
        $secondPlace.text('2nd: Please Baby !');
      } else if (thirdPlace === null) {
        thirdPlace = 'horse5';
        $thirdPlace.text('3rd: Please Baby !');
      }
    });
  });

  $('#go').click(function() {
    $('.horse6').animate({
      left: 1000
    }, {
      duration: Math.floor(Math.random() * 9000) + 1,
      step: function(now){
        $( '.horse6:gt(0)').css('left', now );
      }
    }).promise().done(function (){
      if(winner === null) {
        winner = 'horse6';
        $resultArray.text('1st: Rise to Glory !');
      } else if (secondPlace === null) {
        secondPlace = 'horse6';
        $secondPlace.text('2nd: Rise to Glory !');
      } else if (thirdPlace === null) {
        thirdPlace = 'horse6';
        $thirdPlace.text('3rd: Rise to Glory !');
      }
    });
  });

  $('#go').click(function() {
    $('.horse7').animate({
      left: 1000
    }, {
      duration: Math.floor(Math.random() * 9000) + 1,
      step: function(now){
        $( '.horse6:gt(0)').css('left', now );
      }
    }).promise().done(function (){
      if(winner === null) {
        winner = 'horse7';
        $resultArray.text('1st: Tramp Time !');
      } else if (secondPlace === null) {
        secondPlace = 'horse7';
        $secondPlace.text('2nd: Time Tramp !');
      } else if (thirdPlace === null) {
        thirdPlace = 'horse7';
        $thirdPlace.text('3rd: Time Tramp !');
      }
    });
  });

  $('#go').click(function() {
    $('.horse8').animate({
      left: 1000
    }, {
      duration: Math.floor(Math.random() * 9000) + 1,
      step: function(now){
        $( '.horse6:gt(0)').css('left', now );
      }
    }).promise().done(function (){
      if(winner === null) {
        winner = 'horse8';
        $resultArray.text('1st: Witch Craft !');
      } else if (secondPlace === null) {
        secondPlace = 'horse8';
        $secondPlace.text('2nd: Witch Craft !');
      } else if (thirdPlace === null) {
        thirdPlace = 'horse8';
        $thirdPlace.text('3rd: Witch Craft !');
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
