# Interactive Messaging System

##  Description

This project is part of a **basic JavaScript practical workshop** focused on developing an interactive system that allows the user to enter their name and age and receive personalized messages based on their input.  
The system also validates errors and considers special cases like negative ages or values over 100, all presented in a modern and visually centered interface.

##  Training Objective

Implement a functional JavaScript program that **interacts with the user**, **validates input**, and **displays dynamic responses** using fundamental features of the language.

##  Main Features

- Requests the user's **name** and **age** using `prompt()`.
- Validates that the entered age is a number using `isNaN()` and shows an error using `console.error()` if it's not.
- Displays different personalized messages using `alert()` depending on the age:
  - Age < 0: asks if the person hasn't been born yet.
  - Age < 18: motivational message for minors.
  - Age ≥ 18: message welcoming the user to professional life.
  - Age > 100: humorous message about longevity.
- HTML content is centered on screen with a modern styled interface using CSS.
- Includes a visual link to the GitHub project using FontAwesome icons.

##  Concepts Applied

- Variable declaration using `let`
- Data type conversion using `parseInt`
- Data validation with `isNaN()`
- Conditional structures: `if`, `else if`, `else`
- Input/output functions:
  - `prompt()`
  - `alert()`
  - `console.log()`
  - `console.error()`
- JavaScript syntax best practices
- Modern CSS styling (flexbox, shadows, transitions, gradients)

##  Main File

The code is located in the following file:


It can be opened directly in any web browser.

##  Testing

The following test cases were performed:

| User Input | Expected Result |
|------------|-----------------|
| Name: Juan<br>Age: 15 | Shows message for minors |
| Name: Laura<br>Age: 25 | Shows message for adults |
| Name: Ana<br>Age: -5 | Shows "Haven't you been born yet?" message |
| Name: Pedro<br>Age: 105 | Shows "Are you still alive?" message |
| Age: non-numeric (e.g. "text", "123abc") | Shows error in console |

##  How to Use

1. Download or clone this repository.
2. Open the `sistema_interactivo.html` file in your browser.
3. Enter your name and age when prompted.
4. View the resulting messages or check the browser console for errors.

##  Submission

This file should be submitted as a `.zip` or uploaded to GitHub and then submitted through Moodle before the deadline.

---

**Author:** AndresN329  
**Spanish Repository:** [GitHub - Training]([https://github.com/AndresN329/Training](https://github.com/AndresN329/Interactive-System-Javascrip-Training-Week-1/blob/main/README.md))
