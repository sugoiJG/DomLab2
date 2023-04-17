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
    `
]

const changeTextButton = document.getElementById('randombutton')
const changeText = document.getElementById('paragraph')

changeTextButton.addEventListener('click', () => {
const newText = arrayOfTexts[Math.floor(Math.random()*arrayOfTexts.length)]
})

const manipulateText = document.getElementById('manipulateParagraph')

