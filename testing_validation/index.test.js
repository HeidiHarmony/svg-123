const { validateColor, validateLogoText, makeMySvg } = require('../index.js');



describe('validateColor' () => {
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
  }
)});

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