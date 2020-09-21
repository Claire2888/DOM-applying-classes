// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  one()
}

function one () {
  var one = document.getElementById('one')
  one.classList.add('blue')
}

function start () {
  two()
}
function two () {
  var two = document.getElementById('two')
  two.classList.add('green')
}

function start () {
  three()
function three () {
  var three = document.getElementById('three')
  three.classList.add('pink')
}


function start () {
  makeVisible
}
function makeVisible () {
  var allMakeVisiblebyClassName = document.getElementsByClassName('makeVisible')

  makeVisible.classList.add('orange')
}

