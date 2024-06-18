var allQuizQuestions = [
        {
            question: 'What does HTML stand for?',
            options:['Hyperlinks and Text Markup Language',
                    'Hypertext Markup Language',
                    'Home Tool Markup Language',
            ], 
            correctOption: "Hypertext Markup Language",
        },
      
        {
            question: 'Who is making the Web standards?',
            options: ['Google',
            'The World Wide Web Consortium',
            'Microsoft',
        ],
            correctOption: "The World Wide Web Consortium",
        },
        {
            question: 'Choose the correct HTML element for the largest heading:',
            options:[ '<heading>',
            '<h6>',
             '<h1>',
        ],
            correctOption: "<h1>"
        },
        {
            question: 'What is the correct HTML element for inserting a line break?',
            options:['<linebreak>',
             '<br>',
             '<break>',
        ],
            correctOption: "<br>",
        },
        {
            question: 'What is the correct HTML for adding a background color?',
            options:['<body bg="yellow">',
             '<background>yellow</background>',
             '<body style="background-color:yellow;">',
        ],
            correctOption: '<body style="background-color:yellow;">',
        },
        {
            question: 'Choose the correct HTML element to define important text:',
            options: ['<strong>',
                     '<b>',
                    '<i>',
        ],
            correctOption: '<strong>',
        },
        {
            question: 'Choose the correct HTML element to define emphasized text:',
            options: ['<italic>',
             '<i>',
             '<em>',
        ],
            correctOption: "<em>",
        },
        {
            question: 'What is the correct HTML for creating a hyperlink?',
            options: ['<a>http://www.w3schools.com</a>',
             '<a href="http://www.w3schools.com">W3Schools</a>',
             '<a url="http://www.w3schools.com">W3Schools.com</a>',
        ],
            correctOption: '<a href="http://www.w3schools.com">W3Schools</a>',
        },
        {
            question: 'Which character is used to indicate an end tag?',
            options: ['*',
            '/',
            '<',
        ],
            correctOption: "/",
        },
        {
            question: 'How can you open a link in a new tab/browser window?',
            options: ['<a href="url" target="new">',
             '<a href="url" new>',
             '<a href="url" target="_blank">',
        ],
            correctOption: '<a href="url" target="_blank">',
        },
        {
            question: 'Which of these elements are all <table> elements?',
            options: ['<table> <tr> <td>',
             '<table> <head> <tfoot>',
             '<table> <tr> <tt>',
        ],
            correctOption: "<table> <tr> <td>",
        },
        {
            question: 'Inline elements are normally displayed without starting a new line.',
            options: ['True',
                 'False',
        ],
            correctOption: "True",
        },
        {
            question: "How can you make a numbered list?",
            options: ['<dl>',
                 '<ul>',
                 '<ol>',
                 '<list>',
        ],  
            correctOption: "<ol>",
        },
        {
            question: 'How can you make a bulleted list?',
            options: ['<ol>',
                '<list>',
                 '<ul>',
                 '<dl>',
        ],    
            correctOption: "<ul>",
        },
        {
            question: 'What is the correct HTML for inserting an image?',
            options: [
            '<img alt="MyImage">image.gif</img>',
             '<img href="image.gif" alt="MyImage">',
             '<img src="image.gif" alt="MyImage">',
             '<image src="image.gif" alt="MyImage">',
        ],
            correctOption: '<img src="image.gif" alt="MyImage">',
        },
        {
            question: 'What is the correct HTML for making a checkbox?',
            options: ['<iput type="check">',
            '<check>',
            '<checkbox>',
             '<input type="checkbox">',
        ],
            correctOption: '<input type="checkbox">',
        },
        {
            question: "What is the correct HTML for making a text input field?",
            options: ['<input type="textfield">',
                '<input type="text">',
                 '<textfield>',
                 '<textinput type="textfield">',
        ],
            correctOption: '<input type="text">'
        },
        {
            question: 'What is the correct HTML for making a drop-down list?',
            options: ['<input type="list">',
             '<list>',
             '<input type="dropdown">',
             '<select>',
        ],
            correctOption: '<select>',
        },
        {
            question: 'What is the correct HTML for making a text area?',
            options: ['<input type="textbox">',
             '<input type="textarea">',
            '<textarea>',
        ],
            correctOption: '<textarea>',
        },
        {
            question: 'What is the correct HTML for inserting a background image?',
            options: ['<background img="background.gif">',
             '<body bg="background.gif">',
             '<body style="background-image:url(background.gif)">',
        ],
            correctOption: '<body style="background-image:url(background.gif)">',
        },
    ]


var currentQuestionNo = document.getElementById("currentQuestionNo");
var totalQuestionNo = document.getElementById("totalQuestionNo");
var question = document.getElementById("question");
var options = document.getElementById("options");


var currentIndex = 0;
var marks = 0;


function nextQuestion() {
    if(currentIndex + 1 ==  allQuizQuestions.length){
        Swal.fire({
            title: (`Question is completed and your marks are ${marks}`),
            text: "You clicked the button!",
            icon: "success"
          });
        currentIndex = 0;
        marks = 0;
    }
    else{
        currentIndex++;
    }
    renderQuestion();
}
function checkQuestion(a, b){
    if(a == b){
        marks++;
        console.log(marks);
    }
    nextQuestion();
}
function renderQuestion() {
    currentQuestionNo.innerHTML = currentIndex + 1;
    totalQuestionNo.innerHTML = allQuizQuestions.length;
    question.innerHTML =  allQuizQuestions[currentIndex].question;

    options.innerHTML = "";
    for (var i = 0; i < allQuizQuestions[currentIndex].options.length; i++) {
        var op = allQuizQuestions[currentIndex].options[i];
    
        // Create the div element
        var div = document.createElement('div');
        div.className = 'col-md-4 p-2';
    
        // Create the button element
        var button = document.createElement('button');
        button.className = 'btn btn-danger rounded-0 w-100';
        button.innerText = op;
        button.setAttribute('onclick', `checkQuestion('${op}', '${allQuizQuestions[currentIndex].correctOption}')`);
    
        // Append the button to the div
        div.appendChild(button);
    
        // Append the div to the options element
        options.appendChild(div);
    }
    
}
renderQuestion();
