$(document).ready(function() {
    //Current date for Header
    
    var currDate = moment().format("dddd, MMMM Do");
    $("#currentDay").append(currDate);
   
    // Grab current hour value
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
    
   
    //Get save button to save input field text to loc storage
    $("#saveBtn9").click(function (e) {
        e.preventDefault();
        // Create variable to grab input text and push to array
        var schedItem = $("#nueve").get().map(function(el) {return el.value});
        //console.log(schedItem)
        // Save text to local storage
        localStorage.setItem(schedule, JSON.stringify(schedItem));
    });
    // Retrieve from local storage
    function retrieve9(schedLog) {
        var schedLog = JSON.parse(localStorage.getItem(schedule));
        $.each(schedLog, function (index, value) {
           // console.log(schedLog)
        $("#nin").append(value);
        });
    };
    $("#saveBtn10").click(function (e) {
        e.preventDefault();
        // Create variable to grab input text and push to array
        var schedItem = $("#diez").get().map(function(el) {return el.value});
        //console.log(schedItem);
        // Save text to local storage
        localStorage.setItem("#diez", JSON.stringify(schedItem));
    });
    // Retrieve from local storage
    function retrieve10(schedLog10) {
        var schedLog10 = JSON.parse(localStorage.getItem("#diez"));
        $.each(schedLog10, function (index, value) {
            console.log(schedLog10)
        $("#ten").append(value);
        });
    };
    $("#saveBtn11").click(function (e) {
        e.preventDefault();
        // Create variable to grab input text and push to array
        var schedItem = $("#once").get().map(function(el) {return el.value});
        // Save text to local storage
        localStorage.setItem("#once", JSON.stringify(schedItem));
    });
    // Retrieve from local storage
    function retrieve11(schedLog11) {
        var schedLog11 = JSON.parse(localStorage.getItem("#once"));
        $.each(schedLog11, function (index, value) {
        $("#ele").append(value);
        });
    };
    $("#saveBtn12").click(function (e) {
        e.preventDefault();
        // Create variable to grab input text and push to array
        var schedItem = $("#doce").get().map(function(el) {return el.value});
        // Save text to local storage
        localStorage.setItem("#doce", JSON.stringify(schedItem));
    });
    // Retrieve from local storage
    function retrieve12(schedLog12) {
        var schedLog12 = JSON.parse(localStorage.getItem("#doce"));
        $.each(schedLog12, function (index, value) {
        $("#twe").append(value);
        });
    };
    $("#saveBtn13").click(function (e) {
        e.preventDefault();
        // Create variable to grab input text and push to array
        var schedItem = $("#trece").get().map(function(el) {return el.value});
        // Save text to local storage
        localStorage.setItem("#trece", JSON.stringify(schedItem));
    });
    // Retrieve from local storage
    function retrieve13(schedLog13) {
        var schedLog13 = JSON.parse(localStorage.getItem("#trece"));
        $.each(schedLog13, function (index, value) {
        $("#thi").append(value);
        });
    };
    $("#saveBtn14").click(function (e) {
        e.preventDefault();
        // Create variable to grab input text and push to array
        var schedItem = $("#catorce").get().map(function(el) {return el.value});
        
        // Save text to local storage
        localStorage.setItem("#catorce", JSON.stringify(schedItem));
    });
    // Retrieve from local storage
    function retrieve14(schedLog14) {
        var schedLog14 = JSON.parse(localStorage.getItem("#catorce"));
        $.each(schedLog14, function (index, value) {
        $("#fou").append(value);
        });
    };
    $("#saveBtn15").click(function (e) {
        e.preventDefault();
        // Create variable to grab input text and push to array
        var schedItem = $("#quince").get().map(function(el) {return el.value});
        // Save text to local storage
        localStorage.setItem("#quince", JSON.stringify(schedItem));
    });
    // Retrieve from local storage
    function retrieve15(schedLog15) {
        var schedLog15 = JSON.parse(localStorage.getItem("#quince"));
        $.each(schedLog15, function (index, value) {
        $("#fif").append(value);
        });
    };
    $("#saveBtn16").click(function (e) {
        e.preventDefault();
        // Create variable to grab input text and push to array
        var schedItem = $("#diezyseis").get().map(function(el) {return el.value});
        // Save text to local storage
        localStorage.setItem("#diezyseis", JSON.stringify(schedItem));
    });
    // Retrieve from local storage
    function retrieve16(schedLog16) {
        var schedLog16 = JSON.parse(localStorage.getItem("#diezyseis"));
        $.each(schedLog16, function (index, value) {
        $("#six").append(value);
        });
    };
    retrieve9();
    retrieve10();
    retrieve11();
    retrieve12();
    retrieve13();
    retrieve14();
    retrieve15();
    retrieve16();

    
});


