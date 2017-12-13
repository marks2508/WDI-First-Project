console.log('JS loaded - fine');
$(() => {

  // Variables

  const $horse = $('.choice');
  const $odds = $('.odds');
  let $betting = $('.bet');
  const $horseGroup = $('.horse-group');

  const $betButtons = $('.betButton');
  const $startRace = $('.startRace');
  const $startAgain = $('.startAgain');
  const $reset = $('.resetBet');

  const $firstPlace = $('.firstPlace');
  const $secondPlace = $('.secondPlace');
  const $thirdPlace = $('.thirdPlace');

  let $cashAvailable = $('.cashAvailable');
  const $placeBet = $('.placeBet');
  let $potentialReturn = $('.potentialReturn');

  let winner = null;
  let firstPlace = null;
  let secondPlace = null;
  let thirdPlace = null;

  const $playerWallet = $('.playerWallet');
  let $finalBet = $('.finalBet');
  let betAmount = 0;
  let finalBet = '';
  let wallet = 250;
  let horseChoice = null;
  let moneyLeft = $cashAvailable - betAmount;

  // Choosing a horse
  $cashAvailable.text(wallet);

  $horse.on('click', (e) => {
    horseChoice = $(e.target).html();
    $betting.text(horseChoice);
    if (horseChoice === '1. Bullet-Proof: 3/1') {
      $odds.text('3/1');
    } else if (horseChoice === '2. Emerald Fire: 5/1') {
      $odds.text('5/1');
    } else if (horseChoice === '3. Jalapeno: 1/2') {
      $odds.text('1/2');
    } else if (horseChoice === '4. Mischief: 7/1') {
      $odds.text('7/1');
    } else if (horseChoice === '5. Please Baby: 10/1') {
      $odds.text('10/1');
    } else if (horseChoice === '6. Rise to Glory: 4/1') {
      $odds.text('4/1');
    } else if (horseChoice === '7. Tramp Time: 20/1') {
      $odds.text('20/1');
    } else if (horseChoice === '8. Witch Craft: 9/1') {
      $odds.text('9/1');
    }
  });

  // Select the betting value



  $betButtons.on('click', (e)  => {
    const amount = $(e.target).val(); // £1
    const amountWithoutCurrency = amount.replace('£', '');
    const amountAsInteger = parseInt(amountWithoutCurrency);

    betAmount = amountAsInteger;
    $playerWallet.text('£' + betAmount);
  });

  // $reset.on('click', (e) => {
  //   console.log('reset');
  //   $playerWallet.html('Your bet: ');
  //   $cashAvailable.html(250);
  //   $betting.text('To bet on a horse, click on its name');
  //   $finalBet.text = '';
  // });

  $placeBet.on('click', (e) => {
    console.log('bet placed');
    const horse = $betting.text();
    if (horse === '1. Bullet-Proof: 3/1') {
      horseChoice = 'Bullet-Proof';
      $finalBet.text('Bullet-Proof');
      $cashAvailable.text(wallet - betAmount);
      $potentialReturn.text(betAmount * 3);
    } else if (horse === '2. Emerald Fire: 5/1') {
      horseChoice = 'Emerald Fire';
      $finalBet.text('Emerald Fire');
      $cashAvailable.text(wallet - betAmount);
      $potentialReturn.html(betAmount * 5);
    } else if (horse === '3. Jalapeno: 1/2') {
      horseChoice = 'Jalapeno';
      $finalBet.text('Jalapeno');
      $cashAvailable.text(wallet - betAmount);
      $potentialReturn.html(betAmount * .5);
    } else if (horse === '4. Mischief: 7/1') {
      horseChoice = 'Mischief';
      $finalBet.text('Mischief');
      $cashAvailable.text(wallet - betAmount);
      $potentialReturn.html(betAmount * 7);
    } else if (horse === '5. Please Baby: 10/1') {
      horseChoice = 'Please Baby';
      $finalBet.text('Please Baby');
      $cashAvailable.text(wallet - betAmount);
      $potentialReturn.html(betAmount * 10);
    } else if (horse === '6. Rise to Glory: 4/1') {
      horseChoice = 'Rise to Glory';
      $finalBet.text('Rise to Glory');
      $cashAvailable.text(wallet - betAmount);
      $potentialReturn.html(betAmount * 4);
    } else if (horse === '7. Tramp Time: 20/1') {
      horseChoice = 'Tramp Time';
      $finalBet.text('Tramp Time');
      $cashAvailable.text(wallet - betAmount);
      $potentialReturn.html(betAmount * 20);
    } else if (horse === '8. Witch Craft: 9/1') {
      horseChoice = 'Witch Craft';
      $finalBet.text('Witch Craft');
      $cashAvailable.text(wallet - betAmount);
      $potentialReturn.html(betAmount * 9);
    }
  });

  function checkWinner() {
    if (horseChoice === winner) {
      alert('You have a winner! Keep gambling...');
      wallet = wallet + parseInt($potentialReturn.text());
      $cashAvailable.text(wallet);
      $betting.text('To bet on a horse, click on its name');
      $potentialReturn.text('');
      $playerWallet.text('');
      $odds.text('The odds: ');
      startAgain();
    } else {
      alert('Unlucky. But luckily, you can still gamble...');
      wallet = wallet - parseInt(betAmount);
      $cashAvailable.text(wallet);
      $betting.text('To bet on a horse, click on its name');
      $potentialReturn.text('');
      $playerWallet.text('');
      $odds.text('The odds: ');
      console.log("test")
      startAgain();
    }
  }

  function startAgain () {
    if (wallet > 0){
      $horseGroup.attr('style', '');
      $betting.text('To bet on a horse, click on its name');
      $potentialReturn.text('');
      $playerWallet.text('');
      $odds.text('The odds: ');
      $firstPlace.text('1st: ');
      secondPlace = null;
      $secondPlace.text('2nd: ');
      $thirdPlace.text('3rd: ');
      thirdPlace = null;
      $finalBet.text('Your bet: ');
      winner = null;
    } else {
      alert('Sorry, you have no cash left \nGAME OVER');
      window.location = 'index.html';
    }
  }

  // Animation
  $('.startRace').click(function() {
    $('.horse1').animate({
      left: '90%'
    }, {
      duration: Math.floor(Math.random() * 9000),
      step: function(now){
        $('.horse1:gt(0)').css('left', now );
      }
    }).promise().done(function (){
      if(winner === null) {
        winner = 'Bullet-Proof';
        $firstPlace.text('1st: Bullet-Proof !');
      } else if (secondPlace === null) {
        secondPlace = 'horse1';
        $secondPlace.text('2nd: Bullet-Proof !');
      } else if (thirdPlace === null) {
        thirdPlace = 'horse1';
        $thirdPlace.text('3rd: Bullet-Proof !');
        console.log(1)
        checkWinner();
      }
    });
  });



  $('.startRace').click(function() {
    $('.horse2').animate({
      left: '90%'
    }, {
      duration: Math.floor(Math.random() * 9000),
      step: function(now){
        $('.horse2:gt(0)').css('left', now );
      }
    }).promise().done(function (){
      if (winner === null) {
        winner = 'Emerald Fire';
        $firstPlace.text('1st: Emerald Fire !');
      } else if (secondPlace === null)  {
        secondPlace = 'horse2';
        $secondPlace.text('2nd: Emerald Fire !');
      } else if (thirdPlace === null) {
        thirdPlace = 'horse2';
        $thirdPlace.text('3rd: Emerald Fire !');
        console.log(2)
        checkWinner();
      }
    });
  });

  $('.startRace').click(function() {
    $('.horse2').animate({
      left: '90%'
    }, {
      duration: Math.floor(Math.random() * 9000),
      step: function(now){
        $('.horse2:gt(0)').css('left', now );
      }
    }).promise().done(function (){
      if (winner === null) {
        winner = 'Emerald Fire';
        $firstPlace.text('1st: Emerald Fire !');
      } else if (secondPlace === null)  {
        secondPlace = 'horse2';
        $secondPlace.text('2nd: Emerald Fire !');
      } else if (thirdPlace === null) {
        thirdPlace = 'horse2';
        $thirdPlace.text('3rd: Emerald Fire !');
        console.log(2)
        checkWinner();
      }
    });
  });


  $('.startRace').click(function() {
    $('.horse3').animate({
      left: '90%'
    }, {
      duration: Math.floor(Math.random() * 9000),
      step: function(now){
        $('.horse3:gt(0)').css('left', now );
      }
    }).promise().done(function (){
      if (winner === null) {
        winner = 'Jalapeno';
        $firstPlace.text('1st: Jalapeno !');
      } else if (secondPlace === null)  {
        secondPlace = 'horse3';
        $secondPlace.text('2nd: Jalapeno !');
      } else if (thirdPlace === null) {
        thirdPlace = 'horse3';
        $thirdPlace.text('3rd: Jalapeno !');
        console.log(3)
        checkWinner();
      }
    });
  });

  $('.startRace').click(function() {
    $('.horse4').animate({
      left: '90%'
    }, {
      duration: Math.floor(Math.random() * 9000),
      step: function(now){
        $('.horse4:gt(0)').css('left', now );
      }
    }).promise().done(function (){
      if (winner === null) {
        winner = 'Mischief';
        $firstPlace.text('1st: Mischief !');
      } else if (secondPlace === null) {
        secondPlace = 'horse4';
        $secondPlace.text('2nd: Mischief !');
      } else if (thirdPlace === null) {
        thirdPlace = 'horse4';
        $thirdPlace.text('3rd: Mischief !');
        console.log(4)
        checkWinner();
      }
    });
  });

  $('.startRace').click(function() {
    $('.horse5').animate({
      left: '90%'
    }, {
      duration: Math.floor(Math.random() * 9000),
      step: function(now){
        $('.horse5:gt(0)').css('left', now );
      }
    }).promise().done(function (){
      if (winner === null) {
        winner = 'Please Baby';
        $firstPlace.text('1st: Please Baby !');
      } else if (secondPlace === null) {
        secondPlace = 'horse5';
        $secondPlace.text('2nd: Please Baby !');
      } else if (thirdPlace === null) {
        thirdPlace = 'horse5';
        $thirdPlace.text('3rd: Please Baby !');
        console.log(5)
        checkWinner();
      }
    });
  });


  $('.startRace').click(function() {
    $('.horse6').animate({
      left: '90%'
    }, {
      duration: Math.floor(Math.random() * 9000),
      step: function(now){
        $('.horse6:gt(0)').css('left', now );
      }
    }).promise().done(function (){
      if (winner === null) {
        winner = 'Rise to Glory';
        $firstPlace.text('1st: Rise to Glory !');
      } else if (secondPlace === null) {
        secondPlace = '';
        $secondPlace.text('2nd: Rise to Glory !');
      } else if (thirdPlace === null) {
        thirdPlace = 'horse6';
        $thirdPlace.text('3rd: Rise to Glory !');
        console.log(6)
        checkWinner();
      }
    });
  });

  $('.startRace').click(function() {
    $('.horse7').animate({
      left: '90%'
    }, {
      duration: Math.floor(Math.random() * 9000),
      step: function(now){
        $('.horse7:gt(0)').css('left', now );
      }
    }).promise().done(function (){
      if (winner === null) {
        winner = 'Time Tramp';
        $firstPlace.text('1st: Tramp Time !');
      } else if (secondPlace === null) {
        secondPlace = 'horse7';
        $secondPlace.text('2nd: Time Tramp !');
      } else if (thirdPlace === null) {
        thirdPlace = 'horse7';
        $thirdPlace.text('3rd: Time Tramp !');
        console.log(7)
        checkWinner();
      }
    });
  });


  $('.startRace').click(function() {
    $('.horse8').animate({
      left: '90%'
    }, {
      duration: Math.floor(Math.random() * 9000),
      step: function(now){
        $('.horse8:gt(0)').css('left', now );
      }
    }).promise().done(function (){
      if (winner === null) {
        winner = 'Witch Craft';
        $firstPlace.text('1st: Witch Craft !');
      } else if (secondPlace === null) {
        secondPlace = 'horse8';
        $secondPlace.text('2nd: Witch Craft !');
      } else if (thirdPlace === null) {
        thirdPlace = 'horse8';
        $thirdPlace.text('3rd: Witch Craft !');
        console.log(8)
        checkWinner();
      }
    });
  });


  // Restart buttons




});
