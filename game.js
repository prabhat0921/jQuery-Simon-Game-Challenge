var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickPattern = []



$('.btn').on('click', function(event){
    var userChosenColour = $(this).attr("id");
    userClickPattern.push(userChosenColour)
    playSound(userChosenColour);
    animatePress(userChosenColour);
  });


function nextSequence(){
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);

  
}

function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour){
  $('.btn').on('click', function(){
    $('#' + currentColour).toggleClass('pressed');
  })
}

