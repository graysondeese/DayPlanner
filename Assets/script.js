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

// getting the saved info from local storage
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-1 .description").val(localStorage.getItem("hour-1"));
$("#hour-2 .description").val(localStorage.getItem("hour-2"));
$("#hour-3 .description").val(localStorage.getItem("hour-3"));
$("#hour-4 .description").val(localStorage.getItem("hour-4"));
$("#hour-5 .description").val(localStorage.getItem("hour-5"));


// setting up local storage for save button
$(".saveBtn").click(function(){
var timeKey = $(this).parent().attr("id");
var valueText = $(this).siblings(".description").val();
// sending the value to local storage
localStorage.setItem(timeKey, valueText);
})


})