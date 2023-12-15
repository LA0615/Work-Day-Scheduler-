// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // Set the current date using Dayjs
  var currentDate = dayjs().format('MMMM DD, YYYY');
  $('#currentDate').text(currentDate);

  // Add click event listener to all save buttons
  $('.saveBtn').on('click', function () {
    // Get the time-block ID
    var timeBlockId = $(this).closest('.time-block').attr('id');

    // Get the user input from the corresponding textarea
    var userInput = $(this).closest('.time-block').find('textarea').val();

    // Save the user input in local storage using the time-block ID as a key
    localStorage.setItem(timeBlockId, userInput);
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour.
  var currentHour = dayjs().hour(); // Get the current hour once

  $('.time-block').each(function () {
    var timeBlockHour = parseInt($(this).attr('id'), 10);

    // Log the time block ID and its relation to the current hour
    console.log(`Time block ID: ${timeBlockHour}, Current hour: ${currentHour}`);

    if (timeBlockHour < currentHour) {
      $(this).removeClass('future present').addClass('past');
      console.log('Past');
    } else if (timeBlockHour === currentHour) {
      $(this).removeClass('past future').addClass('present');
      console.log('Present');
    } else {
      $(this).removeClass('past present').addClass('future');
      console.log('Future');
    }

    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements.
    var userInput = localStorage.getItem(timeBlockHour.toString());
    if (userInput) {
      $(this).find('.description').val(userInput);
    }
  });
});



