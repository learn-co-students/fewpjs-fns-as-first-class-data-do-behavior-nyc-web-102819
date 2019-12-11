/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(input) {

  let i = parseInt(input.split(":")[0]+input.split(":")[1], 10)
  if (i > 0 && i < 1200) return "Good Morning"
  else if (i >= 1200 && i <= 1700) return "Good Afternoon"
  else if (i > 1700 && i <= 2359) return "Good Evening"
  else try {
    throw new Error('Whoops!');
  } catch (e) {
    return `${e.name}` + `: ` + `${e.message}`
  } 
}

/* Write your implementation of displayMessage() */

function displayMessage(str) {
  let node = document.querySelector("#greeting");
  node.innerText = str;
}
