// Assignment Prompt  1 (MEDIUM): Create a Simple Webpage with DOM Manipulation

// In this assignment, you will be creating a simple webpage using HTML, CSS, and JavaScript. The webpage should have the following components:

// A heading that displays the title of the webpage.
// An image that is centered on the webpage.
// A paragraph of text that is centered below the image.
// A button that changes the text of the paragraph when clicked.
// A text input field that updates the paragraph text as the user types.
// You should use CSS to style the webpage, including the font and color of the text, the size and position of the image, and the background color of the webpage. You should use JavaScript to handle the button click event and input field change event, and update the paragraph text accordingly.

const arrayOfTexts = [
  `
|￣￣￣￣￣￣￣ |  
|  Ice Cream   |
|＿＿＿＿＿ _＿_|
(\__/) || 
(•ㅅ•) || 
/ 　 づ
    `,
  `
|￣￣￣￣￣￣￣ |  
|    Sushi     |
|＿＿＿＿＿ _＿_|
(\__/) || 
(•ㅅ•) || 
/ 　 づ
    `,
  `
|￣￣￣￣￣￣￣ |  
|    Pizza     |
|＿＿＿＿＿ _＿_|
(\__/) || 
(•ㅅ•) || 
/ 　 づ
    `,
];

const changeTextButton = document.getElementById("randombutton");

let pTag = document.getElementById("paragraph");

let changeWords = document.getElementById("manipulatewords");

changeTextButton.addEventListener("click", () => {
  const newText = arrayOfTexts[Math.floor(Math.random() * arrayOfTexts.length)];
  pTag.textContent = newText;
});

const manipulateText = document.getElementById("changeText");
console.log(manipulateText);

manipulateText.addEventListener("keypress", logKey);
function logKey(e) {
  changeWords.textContent = ` ${manipulateText.value}`;
}

// Assignment Prompt 2 (HARD): Build a To-Do List

// In this assignment, you will be building a simple to-do list application. The to-do list should have the following features:

// An input field to add new tasks.
// A list of tasks that have been added to the to-do list.
// A "complete" button to mark a task as complete and remove it from the list.
// A "clear" button to remove all completed tasks from the list.
// The to-do list should be visually appealing and easy to use. You should use HTML and CSS to layout the to-do list, and use JavaScript to implement its functionality.

// You will need to use DOM manipulation to update the list of tasks and handle user input. For example, when a user enters a new task in the input field and clicks "Add", you will need to add the task to the list. When a user clicks "Complete" on a task, you will need to remove that task from the list.

// You will also need to use JavaScript to keep track of which tasks have been completed and which ones haven't. You can use an array to store the list of tasks, and add a boolean property to each task to indicate whether it has been completed or not.

// Assignment Prompt 3 (VERY HARD): Build a Calculator

// tip: use String and Array methods

// In this assignment, you will be building a simple calculator application. The calculator should have the following features:

// A display area to show the current calculation.
// Buttons for digits 0-9, decimal point, and arithmetic operators (+, -, *, /).
// A "clear" button to clear the display area and reset the calculation.
// A "calculate" button to evaluate the current calculation and display the result.
// The calculator should be visually appealing and easy to use. You should use HTML and CSS to layout the calculator, and use JavaScript to implement its functionality.

// You will need to use DOM manipulation to update the display area and handle user input. For example, when a user clicks on a digit button, you will need to append that digit to the current calculation in the display area. When a user clicks on an arithmetic operator, you will need to update the current calculation to reflect that operator.
