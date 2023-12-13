// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDate = dayjs().format('MMMM DD, YYYY');
var userInput = 


$(function () {
  // Set the current date using Dayjs
  $('#current-date').text(currentDate);

  // Add click event listener to all save buttons
  $('.save-button').on('click', function() {
    // Get the time-block ID
    var timeBlock = $(this).closest('.time-block').attr('id');

    // Get the user input from the corresponding textarea
    var userInput = $(this).closest('.time-block').find('.description').val();

    // Save the user input in local storage using the time-block ID as a key
    localStorage.setItem(timeBlock, userInput);

    // Added to check if code is working- provide feedback to the user that the task has been saved
    alert('Task saved successfully!');
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour.
  

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements.
  $('.time-block').each(function() {
    var timeBlock = $(this).attr('id');
    var userInput = localStorage.getItem(timeBlock);

    if (userInput) {
      $(this).find('.description').val(userInput);
    }
  });


  // TODO: Add code to display the current date in the header of the page
  var currentDateElement = $('#current-date');
  if (currentDateElement.length) {
    currentDateElement.textContent = dayjs().format('MMMM DD, YYYY');
  }
});