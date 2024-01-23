
  // Wait for the DOM to be ready before executing the JavaScript code
  document.addEventListener("DOMContentLoaded", function () {
    // Get the current date using dayjs
    var currentDate = dayjs().format("dddd, MMMM D, YYYY");

    // Update the content of the #currentDay element
    document.getElementById("currentDay").textContent = "Today is " + currentDate;

    // Loop through each time block
    document.querySelectorAll(".time-block").forEach(function (timeBlock) {
      // Get the hour represented by the time block
      var blockHour = parseInt(timeBlock.id);

      // Add or remove classes based on past, present, or future
      if (blockHour < currentHour) {
        timeBlock.classList.add("past");
      } else if (blockHour === currentHour) {
        timeBlock.classList.add("present");
      } else {
        timeBlock.classList.add("future");
      }
    });

    // Add event listeners to each time block
 document.querySelectorAll(".time-block").forEach(function (timeBlock) {
  // Get the textarea element within the time block
  var textarea = timeBlock.querySelector("textarea");

  // Check if textarea exists
  if (textarea) {
    // Add a click event listener to each time block
    timeBlock.addEventListener("click", function () {
      // Prompt the user to enter an event
      var userEvent = prompt("Enter your event:");

      // Update the textarea with the user's input
      if (userEvent !== null) {
        textarea.value = userEvent;

        // Save the event to local storage when the save button is clicked
        var saveButton = timeBlock.querySelector(".saveBtn");
        saveButton.addEventListener("click", function () {
          // Get the ID of the time block (e.g., 9, 10, 11, etc.)
          var blockId = timeBlock.id;

          // Save the event to local storage using the time block ID as the key
          localStorage.setItem("event_" + blockId, userEvent);
        });
      }
    });

    // Load saved event from local storage on page load
    var savedEvent = localStorage.getItem("event_" + timeBlock.id);
    if (savedEvent) {
      textarea.value = savedEvent;
    }
  }
});
  });

  
 

 
