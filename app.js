// Basic Structure

// (function() {
//   // Declare private vars and functions

//   return {
//     // Declare public variables and functions
//   }
// })();


// STANDARD MODULE PATTERN
// const UICtrl = (function() {
//   let text = 'hello world';

//   const changeText = function() {
//     const element = document.querySelector('h1');
//     element.textContent = text;
//   }

//   return {
//     callChangeText: function() {
//       changeText();
//       console.log(text);
//     }
//   }
// })();

// UICtrl.callChangeText();