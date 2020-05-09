$(document).ready(function(){
    // current time variables
    var currentDateAndTime = Date(Date.now());
    $("#currentDay").text(currentDateAndTime);
   
    // timer function
    function startTimer() {
    var currentHour = new Date().getHours();
    $(".description").each(function () {
        // setting the past, present, and future classes
        if($(this).attr("data-hour") < currentHour) {
            $(this).addClass("past");
        } else if($(this).attr("data-hour") > currentHour) {
            $(this).removeClass("past");
            $(this).addClass("future");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("current");
        }

    })
    }
startTimer();
setInterval(startTimer, 60000);

// setting up local storage for save button
$(".saveBtn").click(function(){
var timeKey = $(this).parent().attr("id");
var valueText = $(this).siblings(".description").val();
// sending the value to local storage
localStorage.setItem(timeKey, valueText);
})



})