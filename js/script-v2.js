console.log('JS loaded - fine');
$(() => {

  // Variables

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
  const $firstPlace = $('.firstPlace');
  const $secondPlace = $('.secondPlace');
  const $thirdPlace = $('.thirdPlace');
  const $cashAvailable = $('.cashAvailable');
  const $placeBet = $('.placeBet');
  let $potentialReturn = $('.potentialReturn');
  let winner = null;
  let firstPlace = null;
  let secondPlace = null;
  let thirdPlace = null;
  let $finalBet = $('.finalBet');
  let betAmount = 0;
  let finalBet = '';
  let wallet = '250';
  let horseChoice = null;

  // Betting area

  $horse.on('click', (e) => {
    horseChoice = $(e.target).html();
    $betting.text(horseChoice);
    if (horseChoice === '1. Bullet-Proof: 3/1') {
      $odds.text('Odds: 3/1');
    } else if (horseChoice === '2. Emerald Fire: 5/1') {
      $odds.text('Odds: 5/1');
    } else if (horseChoice === '3. Jalapeno: 1/2') {
      $odds.text('Odds: 1/2');
    } else if (horseChoice === '4. Mischief: 7/1') {
      $odds.text('Odds: 7/1');
    } else if (horseChoice === '5. Please Baby: 10/1') {
      $odds.text('Odds: 10/1');
    } else if (horseChoice === '6. Rise to Glory: 4/1') {
      $odds.text('Odds: 4/1');
    } else if (horseChoice === '7. Tramp Time: 20/1') {
      $odds.text('Odds: 20/1');
    } else if (horseChoice === '8. Witch Craft: 9/1') {
      $odds.text('Odds: 9/1');
    }
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
    $cashAvailable.html(moneyLeft);
    const horse = $betting.text();
    if (horse === '1. Bullet-Proof: 3/1') {
      $finalBet.text('Bullet-Proof');
      $potentialReturn.html('Potential return ' + '£' + ($playerWallet.html() * 3));
    } else if (horse === '2. Emerald Fire: 5/1') {
      $finalBet.text('Emerald Fire');
      $potentialReturn.html('Potential return ' + '£' + ($playerWallet.html() * 5));
    } else if (horse === '3. Jalapeno: 1/2') {
      $finalBet.text('Jalapeno');
      $potentialReturn.html('Potential return ' + '£' + ($playerWallet.html() * .5));
    } else if (horse === '4. Mischief: 7/1') {
      $finalBet.text('Mischief');
      $potentialReturn.html('Potential return ' + '£' + ($playerWallet.html() * 7));
    } else if (horse === '5. Please Baby: 10/1') {
      $finalBet.text('Please Baby');
      $potentialReturn.html('Potential return ' + '£' + ($playerWallet.html() * 10));
    } else if (horse === '6. Rise to Glory: 4/1') {
      $finalBet.text('Rise to Glory');
      $potentialReturn.html('Potential return ' + '£' + ($playerWallet.html() * 4));
    } else if (horse === '7. Tramp Time: 20/1') {
      $finalBet.text('Tramp Time');
      $potentialReturn.html('Potential return ' + '£' + ($playerWallet.html() * 20));
    } else if (horse === '8. Witch Craft: 9/1') {
      $finalBet.text('Witch Craft');
      $potentialReturn.html('Potential return ' + '£' + ($playerWallet.html() * 9));
    }
  });
  // $potentialReturn.text($playerWallet.html() *  );


  // Animation

  $('#startRace').click(function() {
    $('.horse1').animate({
      left: 1000
    }, {
      duration: Math.floor(Math.random() * 9000),
      step: function(now){
        $( '.horse1:gt(0)').css('left', now );
      }
    }).promise().done(function (){
      if(winner === null) {
        winner = 'horse1';
        $firstPlace.text('1st: Bullet-Proof !');
      } else if (secondPlace === null) {
        secondPlace = 'horse1';
        $secondPlace.text('2nd: Bullet-Proof !');
      } else if (thirdPlace === null) {
        thirdPlace = 'horse1';
        $thirdPlace.text('3rd: Bullet-Proof !');
      }
    });
  });

  $('#startRace').click(function() {
    $('.horse2').animate({
      left: 1000
    }, {
      duration: Math.floor(Math.random() * 9000),
      step: function(now){
        $( '.horse2:gt(0)').css('left', now );
      }
    }).promise().done(function (){
      if (winner === null) {
        winner = 'horse2';
        $firstPlace.text('1st: Emerald Fire !');
      } else if (secondPlace === null)  {
        secondPlace = 'horse2';
        $secondPlace.text('2nd: Emerald Fire !');
      } else if (thirdPlace === null) {
        thirdPlace = 'horse2';
        $thirdPlace.text('3rd: Emerald Fire !');
      }
    });
  });

  $('#startRace').click(function() {
    $('.horse3').animate({
      left: 1000
    }, {
      duration: Math.floor(Math.random() * 9000),
      step: function(now){
        $( '.horse3:gt(0)').css('left', now );
      }
    }).promise().done(function (){
      if (winner === null) {
        winner = 'horse3';
        $firstPlace.text('1st: Jalapeno !');
      } else if (secondPlace === null)  {
        secondPlace = 'horse3';
        $secondPlace.text('2nd: Jalapeno !');
      } else if (thirdPlace === null) {
        thirdPlace = 'horse3';
        $thirdPlace.text('3rd: Jalapeno !');
      }
    });
  });

  $('#startRace').click(function() {
    $('.horse4').animate({
      left: 1000
    }, {
      duration: Math.floor(Math.random() * 9000),
      step: function(now){
        $( '.horse4:gt(0)').css('left', now );
      }
    }).promise().done(function (){
      if (winner === null) {
        winner = 'horse4';
        $firstPlace.text('1st: Mischief !');
      } else if (secondPlace === null) {
        secondPlace = 'horse4';
        $secondPlace.text('2nd: Mischief !');
      } else if (thirdPlace === null) {
        thirdPlace = 'horse4';
        $thirdPlace.text('3rd: Mischief !');
      }
    });
  });

  $('#startRace').click(function() {
    $('.horse5').animate({
      left: 1000
    }, {
      duration: Math.floor(Math.random() * 9000),
      step: function(now){
        $( '.horse5:gt(0)').css('left', now );
      }
    }).promise().done(function (){
      if (winner === null) {
        winner = 'horse5';
        $firstPlace.text('1st: Please Baby !');
      } else if (secondPlace === null) {
        secondPlace = 'horse5';
        $secondPlace.text('2nd: Please Baby !');
      } else if (thirdPlace === null) {
        thirdPlace = 'horse5';
        $thirdPlace.text('3rd: Please Baby !');
      }
    });
  });

  $('#startRace').click(function() {
    $('.horse6').animate({
      left: 1000
    }, {
      duration: Math.floor(Math.random() * 9000),
      step: function(now){
        $( '.horse6:gt(0)').css('left', now );
      }
    }).promise().done(function (){
      if (winner === null) {
        winner = 'horse6';
        $firstPlace.text('1st: Rise to Glory !');
      } else if (secondPlace === null) {
        secondPlace = 'horse6';
        $secondPlace.text('2nd: Rise to Glory !');
      } else if (thirdPlace === null) {
        thirdPlace = 'horse6';
        $thirdPlace.text('3rd: Rise to Glory !');
      }
    });
  });

  $('#startRace').click(function() {
    $('.horse7').animate({
      left: 1000
    }, {
      duration: Math.floor(Math.random() * 9000),
      step: function(now){
        $( '.horse6:gt(0)').css('left', now );
      }
    }).promise().done(function (){
      if (winner === null) {
        winner = 'horse7';
        $firstPlace.text('1st: Tramp Time !');
      } else if (secondPlace === null) {
        secondPlace = 'horse7';
        $secondPlace.text('2nd: Time Tramp !');
      } else if (thirdPlace === null) {
        thirdPlace = 'horse7';
        $thirdPlace.text('3rd: Time Tramp !');
      }
    });
  });

  $('#startRace').click(function() {
    $('.horse8').animate({
      left: 1000
    }, {
      duration: Math.floor(Math.random() * 900),
      step: function(now){
        $( '.horse6:gt(0)').css('left', now );
      }
    }).promise().done(function (){
      if (winner === null) {
        winner = 'horse8';
        $firstPlace.text('1st: Witch Craft !');
      } else if (secondPlace === null) {
        secondPlace = 'horse8';
        $secondPlace.text('2nd: Witch Craft !');
      } else if (thirdPlace === null) {
        thirdPlace = 'horse8';
        $thirdPlace.text('3rd: Witch Craft !');
      }
    });
  });
  // Restart buttons

  $('#startAgain').click(function() {
    location.reload();
  });

});
