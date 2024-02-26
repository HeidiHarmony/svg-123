const fs = require('fs');
const inquirer = require('inquirer');

let correctColorNames = [];

// Read the color-choices text file containing the possible correct answers for data validation
function initializeApp() {
    try {
        const data = fs.readFileSync('./testing_validation/color-choices.txt', 'utf8');
        correctColorNames = data.trim().split('\n').map(answer => answer.trim());
        console.log(correctColorNames);
        return correctColorNames;
    } catch (err) {
        console.error(err);
    }
}

initializeApp();

function validateColor(input) {
    const validHexColor = /^#[a-fA-F0-9]{6}$/;
    if (validHexColor.test(input)) {
        console.log("The chosen text color is", input); 
        return true;                
    } else if (correctColorNames.includes(input.toLowerCase())) {
        console.log("The chosen text color is", input); 
        return true;
    } else {
        return 'Please enter a valid hex code or color name';
    }
}

function validateLogoText(input) {
    if (input.length > 3) {
        return 'Please enter three characters or less';
    } else {
        return true;
    }
}

// QUESTIONS

var promptsToUser = [
    {
        type: 'input',
        name: 'logoText',
        message: 'What text do you want in your logo? (enter three characters maximum)',
        validate: validateLogoText
    },
    {
        type: 'input',
        name: 'colorText',
        message: 'What color do you want the text to be? Please provide a hex code or a color name.',
        validate: validateColor
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape do you want your logo to be?',
        choices: ['circle', 'square', 'triangle']
    },
    {
        type: 'input',
        name: 'colorShape',
        message: 'What color do you want your shape to be? Remember to choose a color that contrasts with the text color.',
        validate: validateColor
    }
];

// FUNCTION CALL: QUESTIONS
inquirer
    .prompt(promptsToUser)
    .then((answers) => {
        const userInput = answers;
        console.log('User input has been collected:', userInput);
        makeMySvg(userInput);
    });

function makeMySvg(userInput) {
    const logoText = userInput.logoText;
    var shape = userInput.shape;
    var svg = '';

    let colorText = userInput.colorText;
    if (!/^#[a-fA-F0-9]{6}$/.test(colorText)) {
        colorText = colorText.toLowerCase();
    }

    let colorShape = userInput.colorShape;
    if (!/^#[a-fA-F0-9]{6}$/.test(colorShape)) {
        colorShape = colorShape.toLowerCase();
    }

    switch (shape) {

        case "circle":
          console.log("You selected a circle.");
svg = `<svg version="1.1"
     width = "300" height = "200"
     xmlns="http://www.w3.org/2000/svg">
        <circle cx = "150" cy = "100" r= "100" fill = "${colorShape}" />
        <text x = "150" y = "120" font-family = "sans-serif" font-size = "60" text-anchor = "middle" fill = "${colorText}">${logoText}</text>
        </svg>
        `;
          break;
          
        case "square":
          console.log("You selected a square.");
          svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <rect x="50" y="0" width="200" height="200" fill="${colorShape}" />
          <text x="150" y="120" font-family="sans-serif" font-size="60" text-anchor="middle" fill = "${colorText}">${logoText}</text>
        </svg>
        `;
          break;

        case "triangle":
          console.log("You selected a triangle.");
        svg = ` <svg version = "1.1"
     width = "300" height = "200"
     xmlns="http://www.w3.org/2000/svg">
        <polygon points=
        "0, 200
        150, 0
        300, 200"
        fill="${colorShape}" />
        <text x="150" y="140" font-family="sans-serif" font-size="60" text-anchor="middle" fill="${colorText}">${logoText}</text>
        </svg>
        `;
          break;
      }

    
    fs.writeFileSync('logo.svg', svg);
    console.log('Generated logo.svg');
}

module.exports.makeMySvg = makeMySvg;
module.exports.validateColor = validateColor;
module.exports.validateLogoText = validateLogoText;