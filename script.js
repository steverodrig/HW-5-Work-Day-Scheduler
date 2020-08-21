$(document).ready(function() {
    //Current date for Header
    var currDate = moment().format("dddd, MMMM Do");
    $("#currentDay").append(currDate);

    //Grab current hour value
    var currHr = moment().hour();
    console.log(currHr);
    
    //Compare current hour to time-block value and set color 
    function colorCode() {
        if(currHr === 9) {
            $("#9").addClass("present");
            $("#10 ,#11, #12, #13, #14, #15, #16").addClass("future");
            } else if (currHr === 10) {
                $("#9").addClass("past");
                $("#10").addClass("present");
                $("#11 ,#12, #13, #14, #15, #16").addClass("future");
            } else if (currHr === 11) {
                $("#9 ,#10").addClass("past");
                $("#11").addClass("present");
                $("#12 ,#13, #14, #15, #16").addClass("future");
            } else if (currHr === 12) {
                $("#9 ,#10, #11").addClass("past");
                $("#12").addClass("present");
                $("#13 ,#14, #15, #16").addClass("future");
            } else if (currHr === 13) {
                $("#9 ,#10, #11, #12").addClass("past");
                $("#13").addClass("present");
                $("#14 ,#15, #16").addClass("future");
            } else if (currHr === 14) {
                $("#9 ,#10, #11, #12, #13").addClass("past");
                $("#14").addClass("present");
                $("#15 ,#16").addClass("future");
            } else if (currHr === 15) {
                $("#9 ,#10, #11, #12, #13, #14").addClass("past");
                $("#15").addClass("present");
                $("#16").addClass("future");
            } else if (currHr === 16) {
                $("#9 ,#10, #11, #12, #13, #14, #15").addClass("past");
                $("#16").addClass("present");
            } else if (currHr < 9) {
                $(".hour").addClass("future");
            } else {
                $(".hour").addClass("past");
            }
    }; 
    
    colorCode();
    
    //Blank array of scheduled items
    
    
    //Get save button to save input field text to loc storage
    var storText = document.getElementById("schedule");
    $("#saveBtn").click(function (e) {
        e.preventDefault();
        // Create variable to grab input text and push to array
        var schedItem = $(".toDo").get().map(function(el) {return el.value});
        console.log(schedItem);
        //var schedInput = $(".toDo").val().trim();
        //schedItem.push(schedInput);

    });
        

    
});

 /*var data = $("#schedule").serializeArray();
        console.log(data);

        $.each(data, function(i, obj) {
            console.log(i, obj);
            localStorage.setItem(obj.text);*/

        //localStorage.setItem("schedule", storText.value);