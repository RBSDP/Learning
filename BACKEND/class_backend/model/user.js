const mongoose = require('mongoose')


// In JavaScript, the code `const userSchema = new mongoose.Schema({})` is creating a new instance of a schema object using Mongoose,
// which is an Object Data Modeling (ODM) library for MongoDB in Node.js.

// Let's break down the code:

// 1. `const userSchema`: This declares a constant variable named `userSchema` which will store the schema object.

// 2. `new mongoose.Schema({})`: This creates a new instance of a Mongoose schema.
//  The `mongoose.Schema` function is used to define the structure and properties of a MongoDB document.

// Inside the parentheses `{}`, you would typically define the fields and their respective data types for your user schema.
//  For example:

// ```javascript
// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   age: {
//     type: Number,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   password: {
//     type: String,
//     required: true
//   }
// });
// ```

// In the example above, we define a user schema with fields like `name`, `age`, `email`, and `password`.
//  Each field is an object with a `type` property that specifies the data type,
//   and additional properties like `required` and `unique` that define validation and constraints.

// The user schema is then used as a blueprint for creating and manipulating user documents in the MongoDB database using Mongoose.
//  It provides a structured way to define the expected shape and behavior of the data stored in the database.

const userSchema = new mongoose.Schema({
    firstname:{
        type : String,
        default : null,
        
    },
    lastname : {
        type:String,
        default : null
    },
    email : {
        type:String,
        unique : true
    },
    password : {
        type :String
    },
    token : {
        type :String
    }

})

module.exports = mongoose.model("user",userSchema)

// In JavaScript, `module.exports` is a special object in Node.js that is used to define the public interface of a module.
 //It allows you to export values, functions, or objects from a module to make them accessible to other parts of your application.

// In the given code snippet, `module.exports = mongoose.model("user", userSchema)`
//  is exporting a Mongoose model for the "user" collection in MongoDB.

// Let's break down the code:

// 1. `mongoose.model("user", userSchema)`: This line of code creates a Mongoose model
// by calling the `mongoose.model` function. The first argument, `"user"`, specifies the name of the collection in the MongoDB database. The second argument, `userSchema`, is the schema object we defined earlier.

// By creating a Mongoose model, you gain access to various methods and functionalities provided by Mongoose 
//to interact with the MongoDB collection associated with that model. These methods include creating new documents, querying, updating, and deleting documents.

// 2. `module.exports = ...`: This line exports the Mongoose model created in the previous step.
// By assigning `mongoose.model("user", userSchema)` to `module.exports`,
// we make it available for other parts of the application to import and use.

// Other files in your application can import the user model
// by using the `require` function or ES6 `import` statement. For example:

// ```javascript
// // Using require
// const User = require('./userModel');

// // Using ES6 import
// import User from './userModel';
// ```

// By importing the exported model, you can use it to perform database operations on the "user" collection,
// such as creating new users, querying user data, updating user information, and more, 
//using the provided Mongoose methods and functionalities.