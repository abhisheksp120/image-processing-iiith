
  var questions = [{
    question: "To expand the boundary of an object in binary images the appropriate operation is ?",
    choices: ['Erosion','Dilation', 'Opening','Closing'],
    correctAnswer: 1
  }, {
    question: "To eliminate the small holes in the binary images, the approriate operation is ?",
    choices: ['Erosion','Dilation', 'Opening','Closing'],
    correctAnswer: 3
  }, {
    question: "A binary image consists of disks of sizes 3,7,9,15,17 pixels. We want to remove all the disks of size less than 13 pixels. Which morphological opeartion perform the task ?",
    choices: ["Erosion with structuring element(disk) of size 15","Erosion with structuring element(disk) of size 13","Dilation with structuring element(disk) of size 15"," Dilation with structuring element(disk) of size 13"],
    correctAnswer: 1
  }, {
    question: "Which morphological operation is used for smoothing the contour of an object in grayscale image ?",
    choices: ['Erosion','Dilation', 'Closing','Opening'],
    correctAnswer: 0
  }, {
    question: "Closing is represented by ?",
    choices: ['A .B','A+B', 'A-B', 'AxB'],
    correctAnswer: 0
  },
  {
    question: "Structuring elements runs over image's ?",
    choices: ['rows','columns', 'edges','every element'],
    correctAnswer: 3
  },
  {
    question: "SE having size d/4 when eroded with image of size d, shrinks image by size ?",
    choices: ['d/2','d/3', 'd/4', 'd/8'],
    correctAnswer: 3
  },
  {
    question: "Dilation followed by erosion is called ?",
    choices: ['opening','closing', 'blurring', 'translation'],
    correctAnswer: 1
  },
  {
    question: "Reflection and translation of image objects are based on ?",
    choices: ['pixels','frames', 'structuring elements', 'coordinates'],
    correctAnswer: 2
  },
  {
    question: "Opening smooths image's  ?",
    choices: ['pixels','lines', 'contour', 'boundary'],
    correctAnswer: 2
  },
  {
    question: "Two main operations of morphology are ?",
    choices: ['erosion','dilation', 'closing', 'Both A and B'],
    correctAnswer: 3
  },
  {
    question: "Structuring elements have origins at ?",
    choices: ['top left','top right', 'center', 'bottom left'],
    correctAnswer: 2
  },
  {
    question: "Structuring element is also called ?",
    choices: ['pixels','lines', 'subimage', 'noise'],
    correctAnswer: 2
  },
  {
    question: "With dilation process images get ?",
    choices: ['thinner','shrinked', 'thickened', 'sharpened'],
    correctAnswer: 2
  },
  {
    question: "Opening and closing are each others ?",
    choices: ['neighbors','duals', 'centers', 'corners'],
    correctAnswer: 2
  },
  {
    question: "Fully containment of SE in an image is required in ?",
    choices: ['erosion','dilation', 'opening', 'closing'],
    correctAnswer: 0
  },
  {
    question: "Erosion followed by dilation is called ?",
    choices: ['opening','closing', 'blurring', 'translation'],
    correctAnswer: 0
  },
  {
    question: "Mathematical morphology is a ?",
    choices: ['set theory','logic diagram', 'graph', 'map'],
    correctAnswer: 2
  },
  {
    question: "Opening is represented by  ?",
    choices: ['A o B','A+B', 'A-B', 'AxB'],
    correctAnswer: 0
  },
  {
    question: "Closing produces ?",
    choices: ['narrow breaks','lines', 'dots', 'noise'],
    correctAnswer: 0
  },
  {
    question: "Dilation is used for ?",
    choices: ['bridging gaps','compression', 'decompression', 'translation'],
    correctAnswer: 0
  },
  {
    question: "Best removal of lines from image will be produced by SE of size ?",
    choices: ['1x1','7x7', '3x3', '5x5'],
    correctAnswer: 3
  },
  {
    question: "Sets in morphology are referred to as image's ?",
    choices: ['pixels','frames', 'objects', 'coordinates'],
    correctAnswer: 2
  },
  {
    question: "In erosion details smaller than SE are ?",
    choices: ['reflected','translated', 'compressed', 'filtered'],
    correctAnswer: 3
  },
  {
    question: "Structuring elements usually are ?",
    choices: ['square array','circular array', 'triangular array', 'rectangular array'],
    correctAnswer: 3
  },
  {
    question: "In morphological operations SE is viewed as ?",
    choices: ['correlation mask','convolution mask', 'low pass filter', 'high pass filter'],
    correctAnswer: 1
  },
  {
    question: "Opening with rolling SE ?",
    choices: ['sharps','shrinks', 'smooths', 'deletes'],
    correctAnswer: 2
  },
  {
    question: "To make SE rectangular array approach that is used is called ?",
    choices: ['padding','logic diagram', 'set theory', 'map'],
    correctAnswer: 0
  },
  {
    question: "Hit-or-miss transformation is used for shape ?",
    choices: ['removal','detection', 'compression', 'decompression'],
    correctAnswer: 1
  },{
    question: "Duality principle is valid to involved ?",
    choices: ["one equation", "both equations", "any equation", "Both A and B"],
    correctAnswer: 1
  }];
  
  var questionCounter = 0; //Tracks question number
  var selections = []; //Array containing user choices
  var quiz = $('#quiz'); //Quiz div object
  var check1=0;
  var w=0;
  var w1=0;
  // Display initial question
  displayNext(check1);

   $('#Sub').on('click', function (e) {
    e.preventDefault();
    questionCounter=questions.length;
    w=1;
    w1=1;
    displayNext();
  });
   function cl(){
    if(w==1)
      return 1;
    else
      return 0;
   }
   function cl1(){
    if(w1==1)
      return 1;
    else
      return 0;
   }
  // Click it to skip the current question
      $('#skip').on('click', function (e) {
    e.preventDefault();
    selections[questionCounter] =" ";
     questionCounter++;
     $("[id="+questionCounter+"]").css("background-color", "yellow");
    if(questionCounter===questions.length)
       questionCounter=0;
    displayNext();
  });
    
  // Click handler for the 'next' button
  $('#next').on('click', function (e) {
    e.preventDefault();
    
    // Suspend click listener during fade animation
    if(quiz.is(':animated')) {        
      return false;
    }
    choose();
    
    // If no user selection, progress is stopped
    if (isNaN(selections[questionCounter])) {
      alert('Please make a selection!');
    } else {
      questionCounter++;
      $("[id="+questionCounter+"]").css("background-color", "lightGreen");
      if(questionCounter===questions.length)
       questionCounter=0;
      displayNext();
    }
  });
  
  // Click handler for the 'prev' button
  $('#prev').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    choose();
    if(!(isNaN(selections[questionCounter]))){
      questionCounter+=1;
      $("[id="+questionCounter+"]").css("background-color", "lightGreen");
      questionCounter-=1;
    }
    questionCounter-=1;
    displayNext();
  });
  
  // Click handler for the 'Start Over' button
  $('#start').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    questionCounter = 0;
    selections = [];
    displayNext();
    $('#start').hide();
  });
  
  // Animates buttons on hover
  $('.button').on('mouseenter', function () {
    $(this).addClass('active');
  });
  $('.button').on('mouseleave', function () {
    $(this).removeClass('active');
  });
  
  function tab(val){
  
    questionCounter=val-1;
    displayNext(0);
  }
  // Creates and returns the div that contains the questions and 
  // the answer selections
  function createQuestionElement(index) {
    var qElement = $('<div>', {
      id: 'question'
    });
    
    var header = $('<h2>Question ' + (index + 1) + ':</h2>');
    qElement.append(header);
    
    var question = $('<p>').append(questions[index].question);
    qElement.append(question);
    
    var radioButtons = createRadios(index);
    qElement.append(radioButtons);
    
    return qElement;
  }
  
  // Creates a list of the answer choices as radio inputs
  function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }
  
  // Reads the user selection and pushes the value to an array
  function choose() {
    selections[questionCounter] = +$('input[name="answer"]:checked').val();
  }
  
  // Displays next requested element
  function displayNext(check1) {
    quiz.fadeOut(function() {
      $('#question').remove();
      if(check1===1){
        questionCounter=questions.length;
      }
          if(questionCounter < questions.length){
            if(questionCounter>1)
              $('#prev').show();
            if(isNaN(selections[questionCounter])){
              questionCounter+=1;
            $("[id="+questionCounter+"]").css("background-color", "yellow");
            questionCounter-=1;
            }
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value='+selections[questionCounter]+']').prop('checked', true);
        }
        // Controls display of 'prev' button
        if(questionCounter === 1){
          $('#prev').show();
        } else if(questionCounter === 0){
          
          $('#prev').hide();
          $('#next').show();
        }
      }else {

        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
         document.getElementById("quiz").style.marginTop = "5%";
        document.getElementById("quiz").style.marginLeft = "5%";
        $('#head').show();
        $('#timer').hide();
        $('#next').hide();
        $('#prev').hide();
        $('#skip').hide();
        $('#Sub').hide();
        $('#start').show();
        $('#q1').hide();
        document.getElementById("quiz").style.textAlign = "center";
        document.getElementById("start").style.cssFloat = "none";
        document.getElementById("start").style.marginLeft = "45%";
      }
         
    });
  }
  
  // Computes score and returns a paragraph element to be displayed
  function displayScore() {
    var score = $('<p>',{id: 'question'});
    
    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect++;
      }
    }
    if(numCorrect===questions.length){
      score.append('Congratulations you got them all ' + numCorrect + ' out of ' +
                 questions.length + '');
       return score;
    }
    else{
      if(numCorrect===0){
        score.append('Very sorry to say but you got ' + numCorrect + ' out of ' +
                 questions.length + ' Please go through the theory section of the experiment (Best of luck) ');
         return score;
      }else{
        score.append('You got ' + numCorrect + ' questions out of ' +
                 questions.length + ' right!!!');
         return score;
      }
      
    }
    
    
  }


