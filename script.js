function updateCurrentDay() {
    $("#currentDay").text(dayjs().format("dddd, MMMM D"));
  }

  // Call the function to update current day
  updateCurrentDay();