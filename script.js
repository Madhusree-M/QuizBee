const questions = [
    {
        text: "Which of the following is the correct way to declare an array of 5 integers in C?",
        options: ["int arr[5];", "int arr;", "array arr[5];", "int arr(5);"],
        correctIndex: 0
    },
    {
        text: "What will be the output of this code?\n\nint a = 10, b = 3;\nprintf(\"%d\", a & b);",
        options: ["1", "2", "3", "0"],
        correctIndex: 0
    },
    {
        text: "Which of these is the correct syntax to create a pointer to an integer in C?",
        options: ["int *ptr;", "ptr int;", "int &ptr;", "pointer int;"],
        correctIndex: 0
    },
    {
        text: "What is the value of the expression '5 / 2 * 2' in C?",
        options: ["4", "5", "2", "Undefined"],
        correctIndex: 0
    },
    {
        text: "What will be the output?\n\nint x = 10;\nprintf(\"%d\", x == 10 == 1);",
        options: ["1", "0", "Compiler error", "Undefined"],
        correctIndex: 0
    },
    {
        text: "Which function can be used to dynamically allocate memory in C?",
        options: ["malloc()", "alloc()", "new()", "memalloc()"],
        correctIndex: 0
    },
    {
        text: "What will this print?\n\nchar str[] = \"Hello\";\nprintf(\"%c\", *str);",
        options: ["H", "e", "Hello", "Error"],
        correctIndex: 0
    },
    {
        text: "What is the output of the following?\n\nprintf(\"%d\", 'A');",
        options: ["65", "'A'", "0", "Error"],
        correctIndex: 0
    },
    {
        text: "Which of these is true about the 'break' statement in C?",
        options: [
            "Exits the current loop or switch statement immediately",
            "Skips the next iteration",
            "Terminates the program",
            "Pauses the program"
        ],
        correctIndex: 0
    },
    {
        text: "What is the difference between '++i' and 'i++' in C?",
        options: [
            "'++i' increments before using the value, 'i++' increments after using the value",
            "No difference",
            "'i++' decrements instead of increments",
            "'++i' is only for floats"
        ],
        correctIndex: 0
    }
]


//Declaration

const welcomeBoxEl = document.getElementById('welcome-box')
const startQuizBoxEl = document.getElementById('quiz-box')
const thankyouBoxEl = document.getElementById('thankyou-box')

let selectedOption // to know which element is selected for each ques
let score=0 
let QuestionIndex = 0 //current question index


let timer;      //function
let timeLeft = 20;

let selectedAnswers = [];   // store user answers


// Start Quiz

const startBtnEl = document.getElementById('start-btn')

startBtnEl.addEventListener("click", () => {
    // Hide start button and show countdown cards
    startBtnEl.classList.add("hidden");
    const countdown = document.getElementById("countdown-cards");
    countdown.classList.remove("hidden");
    welcomeBoxEl.classList.add("hidden")

    const cards = ["3", "2", "1", "GO!"];
    const ids = ["card-3", "card-2", "card-1", "card-go"];
    let index = 0;

    function showNextCard() {
        // Hide previous card
        if (index > 0) {
            const prevCard = document.getElementById(ids[index - 1]);
            prevCard.classList.remove("animate-scale-up");
            prevCard.classList.add("opacity-0");
        }

        // Show current card
        if (index < cards.length) {
            const card = document.getElementById(ids[index]);
            card.textContent = cards[index];
            card.classList.remove("opacity-0");
            card.classList.add("animate-scale-up"); // optional if using scale animation
            index++;
            setTimeout(showNextCard, 1000);
        } else {
            // All cards done → start quiz
            setTimeout(() => {
                document.getElementById("welcome-box").classList.add("hidden");
                countdown.classList.add("hidden");
                startQuizBoxEl.classList.remove("hidden"); // show quiz box
                currQuesEl.innerHTML = QuestionIndex + 1;
                textEl.innerHTML = questions[QuestionIndex].text;
                option1.innerHTML = questions[QuestionIndex].options[0];
                option2.innerHTML = questions[QuestionIndex].options[1];
                option3.innerHTML = questions[QuestionIndex].options[2];
                option4.innerHTML = questions[QuestionIndex].options[3];

                startTimer(); // start timer
            }, 100);
        }
    }

    showNextCard();
});



const currQuesEl = document.getElementById("curr-ques")
currQuesEl.innerHTML = QuestionIndex+1

const totalQuesEl = document.getElementById("total-ques")
totalQuesEl.innerHTML = questions.length


const textEl = document.getElementById('text')
const option1 = document.getElementById('option1')
const option2 = document.getElementById('option2')
const option3 = document.getElementById('option3')
const option4 = document.getElementById('option4')

const errorEl = document.getElementById('error')
const nextBtnEl = document.getElementById("next-btn")
const scoreEl = document.getElementById('score')


// Dynamic => button
nextBtnEl.addEventListener('click',(event)=>{

    event.preventDefault()

    if(selectedOption === undefined)
    {
        errorEl.innerHTML = "Please select an option"
    }
    else{

    errorEl.innerHTML = ""
    QuestionIndex++

    // Change to default buttons
    option1.classList.remove("border-2","bg-blue-500/30","border-blue-600/80")
    option2.classList.remove("border-2","bg-blue-500/30","border-blue-600/80")
    option3.classList.remove("border-2","bg-blue-500/30","border-blue-600/80")
    option4.classList.remove("border-2","bg-blue-500/30","border-blue-600/80")

    if(QuestionIndex < questions.length)
    {
        clearInterval(timer);   // stop old timer
        startTimer();           // start new timer

        currQuesEl.innerHTML = QuestionIndex+1
        textEl.innerHTML = questions[QuestionIndex].text

        option1.innerHTML = questions[QuestionIndex].options[0]
        option2.innerHTML = questions[QuestionIndex].options[1]
        option3.innerHTML = questions[QuestionIndex].options[2]
        option4.innerHTML = questions[QuestionIndex].options[3]

        selectedOption = undefined //Unset value
    }
    else{
        startQuizBoxEl.classList.add("hidden")
        thankyouBoxEl.classList.remove("hidden")
        scoreEl.innerHTML = score
    }
}
}
)

option1.addEventListener('click',() => selectOption(0))
option2.addEventListener('click',() => selectOption(1))
option3.addEventListener('click',() => selectOption(2))
option4.addEventListener('click',() => selectOption(3))


function selectOption(opt)
{
    
    option1.classList.remove("border-2","bg-blue-500/30","border-blue-600/80")
    option2.classList.remove("border-2","bg-blue-500/30","border-blue-600/80")
    option3.classList.remove("border-2","bg-blue-500/30","border-blue-600/80")
    option4.classList.remove("border-2","bg-blue-500/30","border-blue-600/80")

    if(selectedOption === undefined)
    {
        selectedOption = opt
        selectedAnswers[QuestionIndex] = opt;
        errorEl.innerHTML = ""
        if(opt === questions[QuestionIndex].correctIndex)
        {
            score++
        }
    }
    document.getElementById("option"+(opt+1)).classList.add("border-2","bg-blue-500/30","border-blue-600/80")
}

function startTimer() {
            
    document.getElementById("timer").classList.remove("animate-ping","text-red-600");
    timeLeft = 20;
    document.getElementById("timer").textContent = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").textContent = timeLeft;

        if (timeLeft <= 5) {
            document.getElementById("timer").classList.add("text-red-600");
            document.getElementById("ping").classList.remove("hidden");
        }

        // If time ends → auto-next
        if (timeLeft === 0) {
            clearInterval(timer);
            selectedOption = null
            selectedAnswers[QuestionIndex] = undefined; // unanswered

            errorEl.innerText = " Unanswered"
            
            setTimeout(() => {
                nextBtnEl.click();
            }, 1300);
        }
    }, 1000);
}


//Review page
document.getElementById("review-btn").addEventListener("click", showReview);

function showReview() {

    clearInterval(timer);

    thankyouBoxEl.classList.add("hidden");
    reviewBoxEl = document.getElementById("review-box");
    reviewBoxEl.classList.remove("hidden");

    let container = document.getElementById("review-container");
    container.innerHTML = ""; // reset

    questions.forEach((q, index) => {
        let userAns = selectedAnswers[index];
        let correctAns = q.correctIndex;

        // Determine status
        let status
        if (userAns === undefined) {
            status = `<span class="text-yellow-600 font-semibold">⚠ Unanswered</span>`;
        } else if (userAns === correctAns) {
            status = `<span class="text-green-600 font-semibold">✔ Correct</span>`;
        } else {
            status = `<span class="text-red-600 font-semibold">✖ Wrong</span>`;
        }


        // Create review block
        let block = document.createElement("div");
        block.className =
            "border border-gray-300 rounded-xl p-4 bg-gray-200/20 shadow-sm";

        block.innerHTML = `
            <div class="flex justify-between items-center mb-2">
                <h2 class="text-lg font-bold text-indigo-800">Question ${index + 1}</h2>
                <p>${status}</p>
            </div>

            <p class="font-medium text-slate-700">${q.text}</p>

            <div class="mt-3 flex flex-col gap-2">
                ${q.options
                    .map((opt, optIndex) => {
                        // correct answer → GREEN
                        if (optIndex === correctAns) {
                            return `<div class="p-2 rounded-lg border-1 border-green-600 bg-green-200/60">
                                        ${opt}
                                    </div>`;
                        }

                        // wrong selected answer → RED
                        if (optIndex === userAns && userAns !== correctAns) {
                            return `<div class="p-2 rounded-lg border-1 border-red-600 bg-red-200/60">
                                        ${opt}
                                    </div>`;
                        }

                        // other options → normal
                        return `<div class="p-2 rounded-lg border border-gray-300">
                                    ${opt}
                                </div>`;
                    })
                    .join("")}
            </div>
        `;

        container.appendChild(block);
    });
}


document.getElementById("feedbackForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        feedback: document.getElementById("feedback").value
    };

    const scriptURL = "https://script.google.com/macros/s/AKfycbz57RzfZMIMlwjqUEhzdfvTSXsLa8GlJoLqcjtgF7XjvcubZ9p-Mvycdabpfq8FgXzj-g/exec"

    try {
        const res = await fetch(scriptURL, {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" }
        });

        const result = await res.json();

        if (result.result === "success") {
            document.getElementById("msg").classList.remove("hidden");
            document.getElementById("feedbackForm").reset();
        } else {
            alert("Error submitting feedback: " + result.error);
        }
    } catch (err) {
        alert("Failed to submit feedback. Check your Web App URL and deployment settings.");
    }
});
