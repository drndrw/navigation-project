# Navigation project
A simple page application built in React, using SVG graphics in a responsive nav bar.

## About

This project takes data from a JSON file to render city name onto a navbar. When a city is selected, an SVG graphic moves underneath the active city name, occupying the full pixel width of the word.

When a link is selected, the city name will appear in a header below the navbar, with the localized time for that given city beneath.

This project uses React Router, allowing the user to refresh the page, or go forward and back and not lose their place. When the page is initially opened, the user will automatically be redirected to the first city in the JSON file.

## Installation
To run locally, clone this repository and run the following commands:

```
npm install
npm run build
```
The repository already has the compiled files included in the `dist` folder. This project uses Webpack for compiling ES6 Javascript, React and SASS.

## Installation
**Author:** Andrew DaRe <br />
**GitHub** https://github.com/drndrw
