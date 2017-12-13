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
  let fourthPlace = null;
  let fifthPlace = null;
  let sixthPlace = null;
  let seventhPlace = null;
  let eighthPlace = null;

  let $playerWallet = $('.playerWallet');
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
      console.log('test1');
      // startAgain();
    } else {
      alert('Unlucky. But luckily, you can still gamble...');
      wallet = wallet - parseInt(betAmount);
      $cashAvailable.text(wallet);
      $betting.text('To bet on a horse, click on its name');
      $potentialReturn.text('');
      $playerWallet.text('');
      $odds.text('The odds: ');
      console.log('test2');
    }
  }

  function startAgain () {
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
      console.log('test3');
    } else {
      alert('Sorry, you have no cash left \nGAME OVER');
      console.log('test4');
      window.location = 'index.html';
    }
  }
  function resultDisplay() {
    setTimeout(function() {
      alert('Results are in:\n\n1st: ' + firstPlace + '\n2nd: ' + secondPlace + '\n3rd: ' + thirdPlace + '\n4th: ' + fourthPlace + '\n5th: ' + fifthPlace + '\n6th: ' + sixthPlace + '\n7th: ' + seventhPlace + '\n8nd: ' + eighthPlace);
      checkWinner();
      startAgain();
    }, 5432);
  }

  const horseNames = ['cliff', 'Mark', 'Gerry', 'Ben', 'steve', 'john', 'bill','bob'];
  $('.startRace').click(function() {
    for(let i= 1; i <=8 ; i++) {
      $('.horse'+ i ).animate( {
        left: '90%'
      }, {
        duration: Math.floor(Math.random() * 9000),
        step: function(now){
          $('.horse'+ i + ':gt(0)').css('left', now );
        }
      }).promise().done(function (){
        if (winner === null) {
          winner = horseNames[i];
          $firstPlace.text('1st: ' + horseNames[i] + ' !');
        } else if (secondPlace === null)  {
          secondPlace = 'horse'+i;
          $secondPlace.text('2nd: ' + horseNames[i] + ' !');
        } else if (thirdPlace === null) {
          thirdPlace = 'horse'+i;
          $thirdPlace.text('3rd: ' + horseNames[i] + ' !');
        } else if (fourthPlace === null) {
          fourthPlace = 'hourse'+i;
        } else if (fifthPlace === null) {
          fifthPlace = 'hourse'+i;
        } else if (sixthPlace === null) {
          sixthPlace = 'horse'+i;
        } else if (seventhPlace === null) {
          seventhPlace = 'horse'+i;
        } else if (eighthPlace === null) {
          eighthPlace = 'horse'+i;
          resultDisplay();
        }
      });
    }
  });



});
