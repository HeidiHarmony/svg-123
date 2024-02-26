const inquirer = require('inquirer');
//const fs = require('fs');
const { collectUserInput, validateColor, validateLogoText } = require('../index.js'); // This is the file being tested

test('Check if promptsToUser is passed correctly to inquirer.prompt', () => {
    const promptsToUser = [
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
  
    const inquirerPromptMock = jest.spyOn(inquirer, 'prompt').mockResolvedValue({
      logoText: 'XYZ',
      colorText: 'cornflowerblue',
      shape: 'circle',
      colorShape: 'darkgray'
    });
  
    collectUserInput(promptsToUser);
  
    expect(inquirerPromptMock).toHaveBeenCalledWith(promptsToUser);
  });


        describe('validateColor', () => {
          it('should return true if the input is a valid hex color', () => {
            expect(validateColor('#ff00ff')).toBe(true);
          });
          it('should return true if the input is a valid color name', () => {
            expect(validateColor('red')).toBe(true);
          });
          it('should return a string if the input is not a valid color name', () => {
            expect(validateColor('spaghetti')).toBe('Please enter a valid hex code or color name');
          });
          it('should return a string if the input is not a valid hex color', () => {
            expect(validateColor('#ff00f')).toBe('Please enter a valid hex code or color name');
          });
        });

describe('validateLogoText', () => {
    it('should return true if the input is 3 characters or less', () => {
        expect(validateLogoText('abc')).toBe(true);
    });
    it('should return true if the input is only 1 character', () => {
        expect(validateLogoText('Z')).toBe(true);
    });
    it('should return true if the input is a mix of letters and numbers', () => {
        expect(validateLogoText('77L')).toBe(true);
    });
    it('should return a string if the input is more than 3 characters', () => {
        expect(validateLogoText('abcd')).toBe ('Please enter three characters or less');
    });
});