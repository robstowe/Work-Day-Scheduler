//global variables
var currentDay = $("#currentDay");
var currentTime = $("#currentTime");
var isPresent = dayjs().format("H");
var saveBtn = $("#save").text();
//function - updates the time to work on page, brings up the date format via dayjs.
$(function() {
    function updateTime() {
        var isPresent = dayjs();
        currentTime.text(isPresent.format("MMM D, YYYY h:mm:ss a"));
    }
    updateTime();
    setInterval(updateTime, 1000)
})

//work our variables to define each hour
var workHours = [
    (hour9El = $("#hour-9")),
    (hour10El = $("#hour-10")),
    (hour11El = $("#hour-11")),
    (hour12El = $("#hour-12")),
    (hour13El = $("#hour-13")),
    (hour14El = $("#hour-14")),
    (hour15El = $("#hour-15")),
    (hour16El = $("#hour-16")),
    (hour17El = $("#hour-17")),
];
//save button function to work on click
$(".saveBtn").on("click", function() {
    var timeBlockId = $(this).parent().attr("id");
    var textValue = $(this).siblings("textarea").val();
    localStorage.setItem(timeBlockId, textValue);
});    


  
// function to loop through each time block, and adds classes to define past present and future
$(".time-block").each(function() {
    var timeBlock = $(this).attr("id");
    var timeBlockHour = timeBlock.split("-")[1];
    
    if (timeBlockHour < isPresent) {
        $(this).removeClass("present future").addClass("past");
    } else if (timeBlockHour === isPresent) {
        $(this).removeClass("past future").addClass("present");
    } else {
        $(this).removeClass("past present").addClass("future");
    }
});

