// An Example from the Advent of code
// David Adeneye Abiodun
const fs = require("fs");
// 1 - What floor does santa end up on
// ( --> should go UP floor
// ) --> should go DOWN 1 floor

function question1() {
  fs.readFile("./santa.txt", (err, data) => {
    console.time("Q1 = santa-time");
    const directions = data.toString();
    const directionsArray = directions.split("");
    const answer = directionsArray.reduce((acc, currentValue) => {
      if (currentValue === "(") {
        return (acc += 1);
      } else if (currentValue === ")") {
        return (acc -= 1);
      }
    }, 0);
    console.timeEnd("Q1 = santa-time");
    console.log("floor:", answer);
  });
}

question1();

// 2 - when does santa first enter the basement
function Question2() {
  fs.readFile("./santa.txt", (err, data) => {
    console.time("Q2 = 2 santa-time");
    const directions = data.toString();
    const directionsArray = directions.split("");
    let accumulator = 0;
    let counter = 0;
    const answer = directionsArray.some(currentItem => {
      if (currentItem === "(") {
        accumulator += 1;
      } else if (currentItem === ")") {
        accumulator -= 1;
      }
      counter++;
      return accumulator < 0;
    });
    console.timeEnd("Q2 = 2 santa-time");
    console.log("basement entered at: ", counter);
  });
}

Question2();
