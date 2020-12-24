let date = new Date();
let day = String(date.getDate()).padStart(2, "0");
let month = String(date.getMonth());

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

// Get the month name by te moth name -> 1 - 12
let currentMonth = monthNames[month];

// get first 3 characters on te current month
let monthAbbreviation = currentMonth.substring(0, 3);

document.querySelector(".day").innerHTML = day;
document.querySelector("#month").innerHTML = monthAbbreviation;
