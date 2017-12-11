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

});
$(function() {
  //run when the DOM is ready

  var racetime = 9.58;
  var racetimeMS = parseFloat(racetime * 1000) + 2000; // FOR JS DELAYS
  var raceTimesArray = [];

  // RESET
  reset();

  // STARTER PISTOL
  $('.pistol').click(function() {

    $(this).queue("raceQueue", function(next) {

      // SET UP TIMES AND STUFF
      $('.runner').each(function(index) {
        var randNum = (Math.floor(Math.random() * 100) / 30);
        var runnerTime = (racetime + (1 * randNum)).toFixed(2);
        var runnerID = (index + 1);
        var runnerBundle = {
          runnerNumber: runnerID,
          runTime: runnerTime
        };
        $(this).css({
          "transition-duration": (runnerTime + "s")
        });
        raceTimesArray.push(runnerBundle); // Push Times to Array

      });

      next();

    }).queue("raceQueue", function(next) {

      // RUNNING SECTION

      // SET THE RUNNERS IN MOTION
      $('#race').addClass('go');

      // HEAD TO THE FINISH LINE
      $('.runner').css({
        "left": "96.3%"
      });

      // CHANGE THE MAIN TRIGGER
      $(this).prop("disabled", true).addClass('running');

      // Delay timer before next function
      setTimeout(function() {
        next();
      }, racetimeMS);

    }).queue("raceQueue", function(next) {

      // WHEN THE RACE HAS FINISHED

      // ORDER THE ARRAY INTO FASTEST TIMES
      raceTimesArray.sort(function(a, b) {
        return parseFloat(a.runTime) - parseFloat(b.runTime);
      });

      // PARSE ARRAY TO JSON
      var raceTimesJSON = $.parseJSON(JSON.stringify(raceTimesArray));

      // INJECT ARRAY DATA into HTML
      // 1st
      $('#result-1 .name').addClass('dude' + (raceTimesJSON[0].runnerNumber));
      $('#result-1 .time').html((raceTimesJSON[0].runTime) + 's');

      // 2nd
      $('#result-2 .name').addClass('dude' + (raceTimesJSON[1].runnerNumber));
      $('#result-2 .time').html((raceTimesJSON[1].runTime) + 's');

      // 3rd
      $('#result-3 .name').addClass('dude' + (raceTimesJSON[2].runnerNumber));
      $('#result-3 .time').html((raceTimesJSON[2].runTime) + 's');

      $('.window-reset').removeClass('hide').addClass('show');
      $(this).prop("disabled", true);

      next();

    }).dequeue("raceQueue");

  });

  // RESET FUNCTION
  function reset() {

    raceTimesArray.length = 0; // Empty Array
    $('#result-list li .name').removeClass('dude1 dude2 dude3 dude4 dude5'); // remove classes
    $('#result-list li .time').empty(); // remove content
    $('.window-reset').removeClass('show').addClass('hide');
    $('.pistol').prop("disabled", false).removeClass('running'); // Make it clickable
    $('.runner').css({
      "left": "1%",
      "transition-duration": "0s"
    });
  }

  $('.reset').click(function() {
    reset();
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
