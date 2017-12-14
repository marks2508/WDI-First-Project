$(() => {

  //************************************************
  // Variables
  //************************************************

  const $horse = $('.choice');
  const $odds = $('.odds');
  const $betting = $('.bet');
  const $horseGroup = $('.horse-group');

  const $betButtons = $('.betButton');

  const $resultpopup = $('.resultpopup');
  const $resultalert = $('.resultalert');
  const $resultDisplay = $('.display');
  const $winneralert = $('.winneralert');
  const $winnerdisplay = $('.winnerdisplay');
  const $nowinalert = $('.nowinalert');
  const $nowinnerdisplay = $('.nowinnerdisplay');
  const $nocashalert = $('.nocashalert');
  const $nocashleftdisplay = $('.nocashleftdisplay');


  const $firstPlace = $('.firstPlace');
  const $secondPlace = $('.secondPlace');
  const $thirdPlace = $('.thirdPlace');

  const $cashAvailable = $('.cashAvailable');
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
  const betAmount = 0;
  let wallet = 250;
  const horseChoice = null;

  const horseNames = [null, 'Bullet-Proof', 'Emerald Fire', 'Jalapeno', 'Mischief', 'Please Baby', 'Rise to Glory', 'Tramp Time','Witch Craft'];

  //***************************************
  //functions
  //***************************************

  function alertresults() {
    $resultDisplay.text('Results are in:' + '1st: ' + winner + '\n2nd: ' + secondPlace + '\n3rd: ' + thirdPlace + '\n4th: ' + fourthPlace + '\n5th: ' + fifthPlace + '\n6th: ' + sixthPlace + '\n7th: ' + seventhPlace + '\n8nd: ' + eighthPlace);
    $resultalert.show();
    $resultalert.on('click', function(){
      $resultalert.hide();
    });
  }

  function alertwinner() {
    $winnerdisplay.text('You have a winner! Keep gambling...');
    $winneralert.show();
    $winneralert.on('click', function(){
      $winneralert.hide();
    });
  }

  function alertnowin() {
    $nowinnerdisplay.text('Unlucky. But luckily, you can still gamble...');
    $nowinalert.show();
    $nowinalert.on('click', function(){
      $nowinalert.hide();
    });
  }

  function alertnocash() {
    console.log('why oh why');
    $nocashleftdisplay.text('Sorry, you have no cash left GAME OVER');
    $nocashalert.show();
    $nocashalert.on('click', function(){
      $nocashalert.hide();
      location.reload();
    });
  }

  $resultpopup.on('click', function(){
    $resultpopup.hide();
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
      // startAgain();
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


  $('.startRace').click(function() {
    for(let i= 1; i <= 8 ; i++) {
      $('.horse'+ i ).animate( {
        left: '90%'
      }, {
        duration: Math.floor((Math.random() + 0.1) * 9000),
        step: function(now){
          $('.horse'+ i + ':gt(0)').css('left', now );
        }
      }).promise().done(function (){
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
  });

});
