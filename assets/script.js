//global variables
var currentDay = $("#currentDay");
var currentTime = $("#currentTime");
var isPresent = dayjs().format("H");
var saveBtn = $("#save").text();
//function - updates the time to work on page, brings up the date format via dayjs.
$(function () {
    function updateTime() {
        var isPresent = dayjs();
        currentTime.text(isPresent.format("MMM D, YYYY h:mm:ss a"));
    }
    updateTime();
    setInterval(updateTime, 1000)
})

//save button function to work on click
$(".saveBtn").on("click", function () {
    var timeBlockId = $(this).parent().attr("id");
    var textValue = $(this).siblings("textarea").val();
    localStorage.setItem(timeBlockId, textValue);
});



// function to loop through each time block, and adds classes to define past present and future
$(".time-block").each(function () {
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



$('.time-block').each(function () {
    var timeBlock = $(this).attr('id');
    var meetings = localStorage.getItem(timeBlock);

    if (meetings) {
        $(this).find("textarea").val(meetings);
    }
});
