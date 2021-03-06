$(() => {

  //************************************************
  // Variables
  //************************************************

  const $betting = $('.bet');
  const $horse = $('.choice');
  const $horseGroup = $('.horse-group');
  const $odds = $('.odds');

  const $betButtons = $('.betButton');
  const $lose = $('.losing').get(0);
  const $naying = $('.nay').get(0);
  const $nowinalert = $('.nowinalert');
  const $nowinnerdisplay = $('.nowinnerdisplay');
  const $nocashalert = $('.nocashalert');
  const $nocashleftdisplay = $('.nocashleftdisplay');
  const $playButton = $('.playButton');
  const $placebetalert = $('.placebetalert');
  const $resultpopup = $('.resultpopup');
  const $resultalert = $('.resultalert');
  const $resultDisplay = $('.display');
  const $sound = $('.audio').get(0);
  const $win = $('.win').get(0);
  const $winneralert = $('.winneralert');
  const $winnerdisplay = $('.winnerdisplay');


  const $firstPlace = $('.firstPlace');
  const $secondPlace = $('.secondPlace');
  const $thirdPlace = $('.thirdPlace');

  const $cash = $('.cash').get(0);
  const $cashAvailable = $('.cashAvailable');
  const $placeBet = $('.placeBet');
  const $potentialReturn = $('.potentialReturn');

  let winner = null;
  let secondPlace = null;
  let thirdPlace = null;
  let fourthPlace = null;
  let fifthPlace = null;
  let sixthPlace = null;
  let seventhPlace = null;
  let eighthPlace = null;


  const $playerWallet = $('.playerWallet');
  const $finalBet = $('.finalBet');
  let betAmount = 0;
  let wallet = 250;
  let horseChoice = null;

  const horseNames = [null, 'Bullet-Proof', 'Emerald Fire', 'Jalapeno', 'Mischief', 'Please Baby', 'Rise to Glory', 'Tramp Time','Witch Craft'];

  //***************************************
  //functions
  //**************************************

  function alertresults() {
    $resultDisplay.text('Results are in:' + '1st: ' + winner + '\n2nd: ' + secondPlace + '\n3rd: ' + thirdPlace + '\n4th: ' + fourthPlace + '\n5th: ' + fifthPlace + '\n6th: ' + sixthPlace + '\n7th: ' + seventhPlace + '\n8nd: ' + eighthPlace);
    $resultalert.show();
    $resultalert.on('click', function(){
      $resultalert.hide();
      startAgain();
    });
  }

  function alertwinner() {
    $win.play();
    $winnerdisplay.html('You have a winner! Keep gambling...<br>Click to continue');
    $winneralert.show();
    $winneralert.on('click', function(){
      $winneralert.hide();
    });
  }

  function alertnowin() {
    $lose.play();
    $nowinnerdisplay.html('Your horse did not finish first, unlucky<br>Click to continue');
    $nowinalert.show();
    $nowinalert.on('click', function(){
      $nowinalert.hide();
    });
  }

  function alertnocash() {
    console.log('game-over');
    $nocashleftdisplay.text('Sorry, you have no cash left GAME OVER! Click here to play again');
    $nocashalert.show();
    $nocashalert.on('click', function(){
      $nocashalert.hide();
      location.reload();
    });
  }
  $playButton.on('click', function(){
    $playButton.hide();
  });

  $resultpopup.on('click', function(){
    $naying.play();
    $resultpopup.hide();
  });

  $cashAvailable.text(wallet);

  $horse.on('click', (e) => {
    if ($playButton.is(':hidden'))
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

  $betButtons.on('click', (e)  => {
    const amount = $(e.target).val(); // £1
    const amountWithoutCurrency = amount.replace('£', '');
    const amountAsInteger = parseInt(amountWithoutCurrency);
    betAmount = amountAsInteger;
    $playerWallet.text('£' + betAmount);
  });

  $placeBet.on('click', function() {
    $cash.play();
    const horse = $betting.text();
    if (horse === 'Bullet-Proof: 3/1') {
      horseChoice = 'Bullet-Proof';
      $finalBet.text(horseChoice);
      $cashAvailable.text(wallet - betAmount);
      $potentialReturn.text(betAmount * 3);
    } else if (horse === 'Emerald Fire: 5/1') {
      horseChoice = 'Emerald Fire';
      $finalBet.text(horseChoice);
      $cashAvailable.text(wallet - betAmount);
      $potentialReturn.html(betAmount * 5);
    } else if (horse === 'Jalapeno: 1/2') {
      horseChoice = 'Jalapeno';
      $finalBet.text(horseChoice);
      $cashAvailable.text(wallet - betAmount);
      $potentialReturn.html(betAmount * .5);
    } else if (horse === 'Mischief: 7/1') {
      horseChoice = 'Mischief';
      $finalBet.text(horseChoice);
      $cashAvailable.text(wallet - betAmount);
      $potentialReturn.html(betAmount * 7);
    } else if (horse === 'Please Baby: 10/1') {
      horseChoice = 'Please Baby';
      $finalBet.text(horseChoice);
      $cashAvailable.text(wallet - betAmount);
      $potentialReturn.html(betAmount * 10);
    } else if (horse === 'Rise to Glory: 4/1') {
      horseChoice = 'Rise to Glory';
      $finalBet.text(horseChoice);
      $cashAvailable.text(wallet - betAmount);
      $potentialReturn.html(betAmount * 4);
    } else if (horse === 'Time Tramp: 20/1') {
      horseChoice = 'Tramp Time';
      $finalBet.text(horseChoice);
      $cashAvailable.text(wallet - betAmount);
      $potentialReturn.html(betAmount * 20);
    } else if (horse === 'Witch Craft: 9/1') {
      horseChoice = 'Witch Craft';
      $finalBet.text(horseChoice);
      $cashAvailable.text(wallet - betAmount);
      $potentialReturn.html(betAmount * 9);
    }
  });

  function checkWinner() {
    if (horseChoice === winner) {
      alertwinner();
      wallet = wallet + parseInt($potentialReturn.text());
      $cashAvailable.text(wallet);
      $betting.text('To bet on a horse, click on its name');
      $potentialReturn.text('');
      $playerWallet.text('');
      $odds.text('The odds: ');
    } else {
      alertnowin();
      wallet = wallet - parseInt(betAmount);
      $cashAvailable.text(wallet);
      $betting.text('To bet on a horse, click on its name');
      $potentialReturn.text('');
      $playerWallet.text('');
      $odds.text('The odds: ');
    }
  }

  function startAgain () {
    console.log('wallet: ',wallet);
    if (wallet > 0) {
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
      fourthPlace = null;
      fifthPlace = null;
      sixthPlace = null;
      seventhPlace = null;
      eighthPlace = null;
      betAmount = 0;
      $placebetalert.hide();
    } else {
      alertnocash();
    }
  }

  function resultDisplay() {
    checkWinner();
  }

  function restartTheRace(){
    alertresults();
    startAgain();
  }

  function race() {
    for(let i= 1; i <= 8 ; i++) {
      $('.horse'+ i ).animate( {
        left: '5%'
      }, {
        duration: Math.floor((Math.random() + 0.1) * 2000),
        step: function(now){
          $('.horse'+ i + ':gt(0)').css('left', now );
        }
      }).animate( {
        left: '10%'
      }, {
        duration: Math.floor((Math.random() + 0.1) * 2000),
        step: function(now){
          $('.horse'+ i + ':gt(0)').css('left', now );
        }
      }).animate( {
        left: '15%'
      }, {
        duration: Math.floor((Math.random() + 0.1) * 1500),
        step: function(now){
          $('.horse'+ i + ':gt(0)').css('left', now );
        }
      }).animate( {
        left: '20%'
      }, {
        duration: Math.floor((Math.random() + 0.1) * 1500),
        step: function(now){
          $('.horse'+ i + ':gt(0)').css('left', now );
        }
      }).animate( {
        left: '25%'
      }, {
        duration: Math.floor((Math.random() + 0.1) * 1500),
        step: function(now){
          $('.horse'+ i + ':gt(0)').css('left', now );
        }
      }).animate( {
        left: '30%'
      }, {
        duration: Math.floor((Math.random() + 0.1) * 1500),
        step: function(now){
          $('.horse'+ i + ':gt(0)').css('left', now );
        }
      }).animate( {
        left: '35%'
      }, {
        duration: Math.floor((Math.random() + 0.1) * 1500),
        step: function(now){
          $('.horse'+ i + ':gt(0)').css('left', now );
        }
      }).animate( {
        left: '40%'
      }, {
        duration: Math.floor((Math.random() + 0.1) * 1500),
        step: function(now){
          $('.horse'+ i + ':gt(0)').css('left', now );
        }
      }).animate( {
        left: '45%'
      }, {
        duration: Math.floor((Math.random() + 0.1) * 1500),
        step: function(now){
          $('.horse'+ i + ':gt(0)').css('left', now );
        }
      });
      $('.horse'+ i ).animate( {
        left: '50%'
      }, {
        duration: Math.floor((Math.random() + 0.1) * 1500),
        step: function(now){
          $('.horse'+ i + ':gt(0)').css('left', now );
        }
      }).animate( {
        left: '55%'
      }, {
        duration: Math.floor((Math.random() + 0.1) * 1500),
        step: function(now){
          $('.horse'+ i + ':gt(0)').css('left', now );
        }
      }).animate( {
        left: '60%'
      }, {
        duration: Math.floor((Math.random() + 0.1) * 1500),
        step: function(now){
          $('.horse'+ i + ':gt(0)').css('left', now );
        }
      }).animate( {
        left: '65%'
      }, {
        duration: Math.floor((Math.random() + 0.1) * 1500),
        step: function(now){
          $('.horse'+ i + ':gt(0)').css('left', now );
        }
      }).animate( {
        left: '70%'
      }, {
        duration: Math.floor((Math.random() + 0.1) * 1500),
        step: function(now){
          $('.horse'+ i + ':gt(0)').css('left', now );
        }
      }).animate( {
        left: '75%'
      }, {
        duration: Math.floor((Math.random() + 0.1) * 1500),
        step: function(now){
          $('.horse'+ i + ':gt(0)').css('left', now );
        }
      }).animate( {
        left: '80%'
      }, {
        duration: Math.floor((Math.random() + 0.1) * 1500),
        step: function(now){
          $('.horse'+ i + ':gt(0)').css('left', now );
        }
      }).animate( {
        left: '85%'
      }, {
        duration: Math.floor((Math.random() + 0.1) * 1500),
        step: function(now){
          $('.horse'+ i + ':gt(0)').css('left', now );
        }
      }).animate( {
        left: '90%'
      }, {
        duration: Math.floor((Math.random() + 0.1) * 1500),
        step: function(now){
          $('.horse'+ i + ':gt(0)').css('left', now );
        }
      })
      .promise().done(function (){
        if (winner === null) {
          winner = horseNames[i];
          $firstPlace.text('1st: ' + horseNames[i]);
        } else if (secondPlace === null)  {
          secondPlace = horseNames[i];
          $secondPlace.text('2nd: ' + horseNames[i]);
        } else if (thirdPlace === null) {
          thirdPlace = horseNames[i];
          $thirdPlace.text('3rd: ' + horseNames[i]);
        } else if (fourthPlace === null) {
          fourthPlace = horseNames[i];
        } else if (fifthPlace === null) {
          fifthPlace = horseNames[i];
        } else if (sixthPlace === null) {
          sixthPlace = horseNames[i];
        } else if (seventhPlace === null) {
          seventhPlace = horseNames[i];
        } else if (eighthPlace === null) {
          eighthPlace = horseNames[i];
          resultDisplay();
          restartTheRace();
        }
      });
    }
  }

  $('.startRace').click(function() {
    if ($playButton.is(':hidden') && horseChoice !== null && betAmount !== 0) {
      $sound.play();
      race();
    } else {
      $placebetalert.show();
      $placebetalert.html('Please choice a horse and place a bet<br /><br />Click here to continue');
      $placebetalert.on('click', function() {
        $placebetalert.hide();
      });
    }
  });


});
