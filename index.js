const fs = require('fs');
const inquirer = require('inquirer');

// Read the color-choices text file containing the possible correct answers for data validation
function initializeApp() {
    try {
        const data = fs.readFileSync('color-choices.txt', 'utf8');
        const correctColorNames = data.trim().split('\n').map(answer => answer.trim());
        console.log(correctColorNames);
    } catch (err) {
        console.error(err);
    }
}

initializeApp();


var promptsToUser = [
    {
        type: 'input',
        name: 'logoText',
        message: 'What text do you want in your logo? (enter three characters maximum)',
        validate: function(input) {
            if (input.length > 3) {
                return 'Please enter a maximum of three characters';
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'colorText',
        message: 'What color do you want the text to be? Please provide a hex code or a color name.',
        validate: function(input) {
            const validHexColor = /^#[a-fA-F0-9]{6}$/;
            if (validHexColor.test(input)) {
                return true;                
                var colorText = input();

            } else if (correctColorNames.includes(input.toLowerCase())) {
                return true;
                colorText = input.toLowerCase();
            } else {
                return 'Please enter a valid hex code or color name';
            }
        }
    },
    {
        type: 'choices',
        name: 'shape',
        message: 'What shape do you want your logo to be?',
        choices: ['circle', 'square', 'triangle']
    },
    {
        type: 'input',
        name: 'colorShape',
        message: 'What color do you want your shape to be? Remember to choose a color that contrasts with the text color.',
        validate: function(input) {
            const validHexColor = /^#[a-fA-F0-9]{6}$/;
            if (validHexColor.test(input)) {
                return true;
                var colorShape = input();
            } else if (correctColorNames.includes(input.toLowerCase())) {
                return true;
                colorShape = input.toLowerCase();
            } else {
                return 'Please enter a valid hex code or color name';
            }
        }
    }

]

// FUNCTION CALL: QUESTIONS
inquirer
    .prompt(promptsToUser)

    .then((answers) => {
        const userInput = answers;
        console.log('User input has been collected:', userInput);
    })

    function makeMySvg(userInput, colorText, colorShape) {
        const logoText = userInput.logoText;
        var shape = userInput.shape;
        
        if (shape === 'circle') {
            shape = 'circle';
        } else if (shape === 'square') {   
            shape = 'rect';
        } else {
            shape = 'polygon';
        };

        const svg = `
        <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
        <svg width="300" height="200">
        <${shape} width = "200" height = "200" cx="150" cy="100" fill="${colorShape}" />
        <text x="150" y="100" font-family="Trebuchet" font-size="20" text-anchor="middle" fill="${colorText}">${logoText}</text>
        </svg>
        `;
        fs.writeFileSync('logo.svg', svg);
        console.log('SVG file has been created');
    }
    makeMySvg();
