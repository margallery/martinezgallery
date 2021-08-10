var mq = window.matchMedia( "(max-width: 800px)" );
if (mq.matches) {
    // window width is at less than 570px

  // whenever we load the page, we always want to display the first slide

var currentSlide = 0

// here we set how many slides we have
// this is useful because we can use it as our max slide value
var totalSlides = $('.holder div').length


// 1. a function that deals with taking us to the next slide
// here we assign a function to the nextSlide variable
var nextSlide = function() {
console.log('nextSlide')

//  1. we are going to increment our current slide value by reassigning it and making it increase by 1 each time
currentSlide = currentSlide + 1

// here we test to check whether the current slide number is greater than or equal to the number of slides
// if it is, we are going to set the current slide back to 0, it's initial state

if (currentSlide >= totalSlides) {
    currentSlide = 0
}

//  2. we are going to turn our current slide value into a VW unit
var leftPosition = (-currentSlide * 100) + 'vw'
//  3. we are going to pass our VW unit into our CSS method below
//   here we grab the holder and change it to the next slide
$('.holder').css('left', leftPosition)

var slideNumber = currentSlide + 1
// here we set the text for the steps using currenSlide and totalSlides
$('.steps').text(slideNumber + ' / ' + totalSlides)

}

// 2. a function that deals with taking us to the prev slide
var prevSlide = function() {
// this is identical to our nextSlide function apart from the fact we are decrementing the current slide value, taking us back rather than forward
  currentSlide = currentSlide - 1

//   if our current slide is less than 0, we want to set our currentSlide to the last one

if (currentSlide < 0) {
//   we subtract 1 from our currentSlide as we are using the array index
  currentSlide = totalSlides - 1
}


  var leftPosition = (-currentSlide * 100) + 'vw'
  $('.holder').css('left', leftPosition)

var slideNumber = currentSlide + 1
// here we set the text for the steps using currenSlide and totalSlides
$('.steps').text(slideNumber + ' / ' + totalSlides)

}


// using setInterval runs a function after a certain amount of time, on loop
var autoSlide = setInterval(function() {
//   here the nextSlide function will be run
  nextSlide()
// runs every 3 seconds
}, 100000000)
// using setTimeout runs a function after a certain amount of time, only once

$('.next').on('click', function() {
//   this is going to cancel our autoSlide function as we interact with the buttons
  clearInterval(autoSlide)
//   this runs the next slide function
  nextSlide()
  return false
})

$('.prev').on('click', function() {
  clearInterval(autoSlide)
  prevSlide()
  return false
})

// here we set a slideNumber variable that increments by 1
// our array starts at 0
var slideNumber = currentSlide + 1
// here we set the text for the steps using currenSlide and totalSlides
$('.steps').text(slideNumber + ' / ' + totalSlides)

// whenever an event occurs in javascript we can also capture data that comes with it
$('body').on('keydown', function(event) {

// here we are grabbing the keyCode of the key that we have just pressed
  var keyCode = event.keyCode

//   if the keyCode is equal to our left arrow (keyCode 37) then previous
  if (keyCode == 37) {
    clearInterval(autoSlide)
    prevSlide()
    return false
  }

//  if the keyCode is equal to our right arrow (keyCode 39) then next
  if (keyCode == 39) {
    clearInterval(autoSlide)
    nextSlide()
    return false
  }

})

}


else {
    // window width is greater than 570px
    //
   // whenever we load the page, we always want to display the first slide

var currentSlide = 0

// here we set how many slides we have
// this is useful because we can use it as our max slide value
var totalSlides = $('.holder div').length


// 1. a function that deals with taking us to the next slide
// here we assign a function to the nextSlide variable
var nextSlide = function() {
console.log('nextSlide')

//  1. we are going to increment our current slide value by reassigning it and making it increase by 1 each time
currentSlide = currentSlide + 1

// here we test to check whether the current slide number is greater than or equal to the number of slides
// if it is, we are going to set the current slide back to 0, it's initial state

if (currentSlide >= totalSlides) {
    currentSlide = 0
}

//  2. we are going to turn our current slide value into a VW unit
var leftPosition = (-currentSlide * 50) + 'vw'
//  3. we are going to pass our VW unit into our CSS method below
//   here we grab the holder and change it to the next slide
$('.holder').css('left', leftPosition)

var slideNumber = currentSlide + 1
// here we set the text for the steps using currenSlide and totalSlides
$('.steps').text(slideNumber + ' / ' + totalSlides)

}

// 2. a function that deals with taking us to the prev slide
var prevSlide = function() {
// this is identical to our nextSlide function apart from the fact we are decrementing the current slide value, taking us back rather than forward
  currentSlide = currentSlide - 1

//   if our current slide is less than 0, we want to set our currentSlide to the last one

if (currentSlide < 0) {
//   we subtract 1 from our currentSlide as we are using the array index
  currentSlide = totalSlides - 1
}


  var leftPosition = (-currentSlide * 50) + 'vw'
  $('.holder').css('left', leftPosition)

var slideNumber = currentSlide + 1
// here we set the text for the steps using currenSlide and totalSlides
$('.steps').text(slideNumber + ' / ' + totalSlides)

}


// using setInterval runs a function after a certain amount of time, on loop
var autoSlide = setInterval(function() {
//   here the nextSlide function will be run
  nextSlide()
// runs every 3 seconds
}, 100000000)
// using setTimeout runs a function after a certain amount of time, only once

$('.next').on('click', function() {
//   this is going to cancel our autoSlide function as we interact with the buttons
  clearInterval(autoSlide)
//   this runs the next slide function
  nextSlide()
  return false
})

$('.prev').on('click', function() {
  clearInterval(autoSlide)
  prevSlide()
  return false
})

// here we set a slideNumber variable that increments by 1
// our array starts at 0
var slideNumber = currentSlide + 1
// here we set the text for the steps using currenSlide and totalSlides
$('.steps').text(slideNumber + ' / ' + totalSlides)

// whenever an event occurs in javascript we can also capture data that comes with it
$('body').on('keydown', function(event) {

// here we are grabbing the keyCode of the key that we have just pressed
  var keyCode = event.keyCode

//   if the keyCode is equal to our left arrow (keyCode 37) then previous
  if (keyCode == 37) {
    clearInterval(autoSlide)
    prevSlide()
    return false
  }

//  if the keyCode is equal to our right arrow (keyCode 39) then next
  if (keyCode == 39) {
    clearInterval(autoSlide)
    nextSlide()
    return false
  }

})

}
