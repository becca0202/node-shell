//call in fs
const fs = require('fs');

//prompt the user for a file name
process.stdout.write('prompt > ');

// let cat = ''
// let fileName = ''
// process.stdin.on('cat ./fileName', (userInput) => {

// })

// take the file name from the user input
process.stdin.on('cat fileName', (userInput) => {
  console.log('inside cat function');
  let userInputArray = userInput.split(' ');
  //use userInput (fileName)
  fs.readFile(userInputArray[1], (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log('hello');
      process.stdout.write('hello');
      process.stdout.write('prompt >');
    }
  });
});

// module.exports = {
//   cat,
//   userInput,
// };
