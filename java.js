// Borrowed the java form "Question Game" that we did in class to get started

// these are the questions. "Q" is the question, "c" are the choices, "a" is the answer
$(document).ready(function () {
  //var quiz = document.getElementById("quiz");
  var results = document.getElementById("results");
  var submi = document.getElementById("submit");
  var index = 0;
  //  Variable that will hold our setInterval that runs the stopwatch
  var intervalId;
  let win = 0;
  //prevents the clock from being sped up unnecessarily
  var clockRunning = true;
  var questions = [
    {
      q: "Which hip hop artist had the hits 'Rock the House', 'Summertime', and 'Partystarter'?",
      o: [
        "Lil Wayne",
        "Will Smith",
        "LL Cool J",
        "Vanilla Ice"
      ],
      a: "Will Smith"
    },
    {
      q: "Who was the first rap artist or group to have an endorsement deal?",
      o: [
        "Eminem",
        "Souja Boy Tell Em",
        "Run-DMC",
        "Dr. Dre"
      ],
      a: "Run-DMC"
    },
    {
      q: "A Tribe Called Quest has all but which members in their group?",
      o: [
        "Busta Rhymes",
        "Ali Shaheed",
        "Phife Dawg",
        "Q-Tip"
      ],
      a: "Busta Rhymes"
    },
    {
      q: "The hit 'Rapper's Delight' was made by which 1970s and 1980s hip hop group?",
      o: [
        "NWA",
        "Ultramagnetic MCs",
        "Audio Two",
        "Sugarhill Gang"
      ],
      a: "Sugarhill Gang"
    },
    {
      q: "Who performed the song 'Paid in Full'?",
      o: [
        "EPMD",
        "Eric B & Rakim",
        "NWA",
        "Ice Cube"
      ],
      a: "Eric B & Rakim"
    }
  ];

  $("#start").on("click", function () {
    document.getElementById("questionCard1").removeAttribute("class");
    document.getElementById("startDiv").setAttribute("class", "questionCard");
  });


  function makeCard() {
    $("#quiz").empty();
    $("#choices").empty();
    $("#results").empty();
    if(index ===5){
      endQuiz();
      index = 0;
      document.getElementById("startDiv").removeAttribute("class", "questionCard");
      win = 0;
    }
    else{

    $("#quiz").append(questions[index].q);

    for (var i = 0; i < questions[i].o.length; i++) {
      var choicevar = $("<button>");
      choicevar.attr("class", "userchoice btn btn-primary");
      choicevar.attr("usersdata", questions[index].o[i]);
      choicevar.text(questions[index].o[i]);
      $("#choices").append(choicevar);
    };
  };

    populateButtonClick();


  };
  //make sure on css style sheet you update the z-height to be on top to be able to access the onclick event
  function populateButtonClick() {
    $(".userchoice").on("click", function () {
      console.log($(this).attr("usersdata"));

      if ($(this).attr("usersdata") == questions[index].a) {
        win++;
      }
      else {
        console.log("Incorrect, sorry");
      };
  
      index++;
      makeCard();

    });


  };
  // $("#submit").on("click", function () {

  //   console.log("clicked submit");
  //   if ($(this).attr("usersdata") == questions[0].a) {
  //     console.log("you picked the right choice");
  //     win++
  //     index++;
  //     makeCard();
  //   }
  // });

  // // Our stopwatch object
  // var stopwatch =
  // {

  //   time: 10,

  //   reset: function () {
  //     stopwatch.time = 10;
  //     // DONE: Change the "display" div to "00:00."
  //     $("#timer").text("10");
  //   },

  //   start: function () {

  //     // DONE: Use setInterval to start the count here and set the clock to running.
  //     if (!clockRunning) {
  //       intervalId = setInterval(stopwatch.count, 1000);
  //       clockRunning = true;
  //     }
  //   },
  //   stop: function () {

  //     // DONE: Use clearInterval to stop the count here and set the clock to not be running.
  //     clearInterval(intervalId);
  //     clockRunning = false;
  //   },

  //   count: function () {

  //     // DONE: increment time by 1, remember we cant use "this" here.
  //     stopwatch.time--;
  //     //console.log("time: "+stopwatch.time)

  //     // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
  //     //       and save the result in a variable.


  //     // DONE: Use the variable we just created to show the converted time in the "display" div.
  //     $("#timer").text(stopwatch.time);
  //   }

  // };

  // //stopwatch.start();

function endQuiz(){
    alert("you got "+ win + " right!");
};

  makeCard();
  var timer = 60;

});