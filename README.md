# SVG-123

![License Badge](https://img.shields.io/badge/License-MIT-blue.svg)

## Table of Contents

[About](#about)  
[Features](#features)  
[Installation](#installation)  
[Dependencies](#dependencies)  
[Getting Started](#usage-getting-started)  
[Frequently Asked Questions](#frequently-asked-questions)  
[Plans for Future Development](#plans-for-future-development)  
[Report Issues](#report-issues)  
[How to Contribute](#how-to-contribute)  
[License](#license)  
[About the Author](#about-the-author)

## Where to find SVG-213

Clone this app from https://github.com/HeidiHarmony/svg-123 and run it in the terminal using node.js.

## Description

### About

If you are a programmer who doesn't have access to drawing applications to create SVG files, isn't interested in using a WYSIWYG editor to make SVG files, or doesn't want to hire a graphic designer to create simple logos, SVG-123 is here to help. "Out of the box", SVG-123 will create a file 300px x 200px, using up to three letters or numbers, and one of three shapes. If you desire more customization, the javascript file can be easily modified to suit your needs.

### Features

In less than the time it would take Adobe Illustrator to simply open, SVG-123 will have a logo ready for your use!
- Choose colors that complement your project
- Uppercase and lowercase letters, as well as numbers can be used
- Default setting is a classic sans serif font, but this can also be customized to your preferences

### Check out SVG-123 in Action

[Video Demo](https://watch.screencastify.com/v/vjGNVHvBIZH0Q1awrVn3)

## Documentation

### Installation

Node.js will need to be installed, and then the command 'npm install' will install the dependencies that appear in the package.json file. With basic installation complete, you are ready to run 'node index.js' from the command line.

### Dependencies

fs, Inquirer


### Usage: Getting Started

Running SVG-123 is a breeze! Type 'node index.js' in the terminal from within the root directory and follow the prompts. Making your logo is easy as 1-2-3! See the video demonstration for helpful tips.

## Frequently Asked Questions

Q: What is an SVG file?
A: SVG images are in the vector format, which can be scaled without loss of quality. Rather than being defined by pixels, vectors are shape objects. SVGs are stored in XML files.

Q: Can all browsers display SVG?
A: Yes, all modern browsers, both desktop and mobile, offer basic support for SVG, with the exception of Internet Explorer, which doesn't scale SVG images correctly. Early versions of Safari (3.1) and Firefox (2) offered partial support, and versions of the Android browser before 4.4 are only partially supported.


Q: What if I want a more complicated shape?
A: SVG-123 has been designed to create a simple logo, but feel free to create a new branch and modify the code. You can specify new shapes and even add additional shapes. Remember that later objects in the code will appear on top of previous objects, so this can allow layering for more complex effects.

Q: I accidentally wrote over my last logo by running the program again! How do I retrieve the previous file?
A: If you want to collect a few different options, we strongly suggest that you save copies of the logos in a location OTHER THAN the root directory which is where the files are written to. Modify the file names of these other versions with meaningful names, such as 'HhC-purpleCircle.svg'. If you lost a previous file, you will have to recreate it, but fortunately this is very quick and easy.

Q: How do I use my SVG file on my web site?
A: The `<svg>` tag can be used in HTML to include SVG images in a web site. The entirety of the generated logo.svg code can be copy/pasted into your HTML file. SVG also allows for DOM manipulation.

### Tests

Jest
The testing_validation folder includes a test file that tests the capture and use of the user input along with validation checks for color names and hex color codes.

## Plans for Future Development

Future development may include additional shapes to be added to the menu, along with the option to create one or more additional shapes for a layered effect.

## Report Issues

Please create a new issue in github at https://github.com/HeidiHarmony/svg-123/issues

## How to Contribute

Please fork the repository and reach out to me with questions or to share your changes.

## License

Licensed under [MIT](https://choosealicense.com/licenses/MIT)

## About the Author

### Name

Heidi Harmony Carrier

### GitHub

HeidiHarmony

### Email

tenibrae@gmail.com

### LinkedIn

https://www.linkedin.com/in/heidi-carrier-dual-hemisphere/

### Portfolio

https://heidiharmony.github.io/portfolio (Under construction!)

### About Author

I am a music educator by formal university training, a graphic designer by continuing education and experience, and a web development student. I aspire to augment my design work by adding coding skills and be able to handle a client's web site build from concept, to design, to front end implementation, to back end finalization. I am also very interested in leveraging javascript for purposes of automation, particularly using Adobe's Creative Cloud applications. I consider myself to be very well balanced between my right brain and left brain, both creative and technical. I can thrive in both high level visioning and detail-oriented fulfillment.
