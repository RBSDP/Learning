const app = require('./app')


// In JavaScript, `const {PORT} = process.env` is a syntax called destructuring assignment that allows you to extract specific properties from an object.
// Here's how it works in the context of `process.env`:

// `process.env` is an object that represents the current environment in which the JavaScript code is running.
//  It contains various properties, including environment variables.

// In the given code snippet, `const {PORT} = process.env`
//  is extracting the value of the `PORT` property from the `process.env` object and assigning it to a constant variable named `PORT`.

// For example, if you have an environment variable called `PORT` with a value of `3000`, executing
//  `const {PORT} = process.env` would assign the value `3000` to the constant variable `PORT`. 

// This syntax is commonly used in backend development to access environment variables 
// defined in the `.env` file or passed as command-line arguments to the application.
//  By extracting the value into a constant variable, it allows easy access to the specific environment variable throughout the code.

const {PORT}  = process.env


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})