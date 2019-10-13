// Borrowed the java form "Question Game" that we did in class to get started

// these are the questions. "Q" is the question, "c" are the choices, "a" is the answer

  var quiz = document.getElementById("quiz");
  var results = document.getElementById("results");
  var submi = document.getElementById("submit");
  var questions = [
    {
      q : "Which hip hop artist had the hits 'Rock the House', 'Summertime', and 'Partystarter'?",
      o : [
        "Lil Wayne",
        "Will Smith",
        "LL Cool J",
        "Vanilla Ice"
      ],
      a : 1
    },
    {
      q : "Who was the first rap artist or group to have an endorsement deal?",
      o : [
        "Eminem",
        "Souja Boy Tell Em",
        "Run-DMC",
        "Dr. Dre"
      ],
      a : 2
    },
    {
      q : "A Tribe Called Quest has all but which members in their group?",
      o : [
        "Busta Rhymes",
        "Ali Shaheed",
        "Phife Dawg",
        "Q-Tip"
      ],
      a : 0
    },
    {
      q : "The hit 'Rapper's Delight' was made by which 1970s and 1980s hip hop group?",
      o : [
        "NWA",
        "Ultramagnetic MCs",
        "Audio Two",
        "Sugarhill Gang"
      ],
      a : 3
    },
    {
      q : "Who sang the song 'Paid in Full'?",
      o : [
        "EPMD",
        "Eric B & Rakim",
        "NWA",
        "Ice Cube"
      ],
      a : 1
    }
  ];

var timer = 60

