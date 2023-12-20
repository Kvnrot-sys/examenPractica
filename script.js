var myQuestions = [
    {
      question: '<center><img src="imagenes/fantasmita.jpg"> <br>¿Cuál de los Cazafantasmas elige al hombre de malvavisco en la pelea con Gozer el destructor?</center>',
      answers: { 
        a: 'Peter Venkman',
        b: 'Winston Zedemore',
        c: 'Dr. Egon Spengler'

      },
      correctAnswer: 'a'
    },
    {
      question: "<center>¿Quién posee al personaje de Rick Moranis?</center>",
      answers: {
        a: 'El maestro de las llaves',
        b: 'El guardián de la puerte',
        c: 'Gozer'
      },
      correctAnswer: 'a'
    },
    {
      question: "<center>¿Cuál es el nombre del vehículo de los Cazafantasmas?</center>",
      answers: {
        a: 'El protomóvil',
        b: 'El fantasmóvil',
        c: 'El ectomóvil'
      },
      correctAnswer: 'c'
    },
    {
      question: "<center>¿Cuál es el primer fantasma que atrapan los Cazafantasmas?</center>",
      answers: {
        a: 'Una bibliotecaria',
        b: 'Moquete',
        c: 'Un fantasma del ayuntamiento'
      },
      correctAnswer: 'b'
    },
    {
      question: "<center>¿En que fecha se cree que llegara el fin del mundo segun uno de los invitados del psiquico Venkman</center>",
      answers: {
        a: '25/12/2016',
        b: '14/02/2016',
        c: '01/01/2016',
        d: '01/04/2016'
      },
      correctAnswer: 'b'
    },
    {
      question: "<center>¿Donde consiguio uno de los huespedes de Venkman la informacion acerca del fin del mundo?</center>",
      answers: {
        a: 'De un fantasma',
        b: 'De un sueño',
        c: 'De una vision',
        d: 'De un alien'
      },
      correctAnswer: 'd'
    },
    {
      question: "<center>¿Cuál es el nombre del asistente del alcalde?</center>",
      answers: {
        a: 'James',
        b: 'Peter',
        c: 'Jack',
        d: 'Mark'
      },
      correctAnswer: 'c'
    },

  ];
  
  var quizContainer = document.getElementById('quiz');
  var resultsContainer = document.getElementById('results');
  var submitButton = document.getElementById('submit');
  
  generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
  
  function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
  
    function showQuestions(questions, quizContainer){
      // we'll need a place to store the output and the answer choices
      var output = [];
      var answers;
  
      // for each question...
      for(var i=0; i<questions.length; i++){
  
        // first reset the list of answers
        answers = [];
  
        // for each available answer...
        for(letter in questions[i].answers){
  
          // ...add an html radio button
          answers.push(
            '<label>'
              + '<input type="radio" name="question'+i+'" value="'+letter+'">'
              + letter + ': '
              + questions[i].answers[letter]
            + '</label>'
          );
        }
  
        // add this question and its answers to the output
        output.push(
          '<div class="question">' + questions[i].question + '</div>'
          + '<div class="answers">' + answers.join('') + '</div>'
        );
      }
  
      // finally combine our output list into one string of html and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(questions, quizContainer, resultsContainer){
  
      // gather answer containers from our quiz
      var answerContainers = quizContainer.querySelectorAll('.answers');
  
      // keep track of user's answers
      var userAnswer = '';
      var numCorrect = 0;
  
      // for each question...
      for(var i=0; i<questions.length; i++){
  
        // find selected answer
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
  
        // if answer is correct
        if(userAnswer===questions[i].correctAnswer){
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[i].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[i].style.color = 'red';
        }
      }
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = numCorrect + ' de ' + questions.length;
    }
  
    // show questions right away
    showQuestions(questions, quizContainer);
  
    // on submit, show results
    submitButton.onclick = function(){
      showResults(questions, quizContainer, resultsContainer);
    }
  }