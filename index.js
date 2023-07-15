function addingEventListener() {
    const input = document.getElementById('button');

function clickAlert() {
  alert('I was clicked!');
}

input.addEventListener('click', clickAlert);
}





/*function addingEventListener() {
    return addEventListener('click', function() {
        (alert('I was clicked!'))})
}*/
//const clickMeButton = document.getElementById('button')

/*function addingEventListener(element) {
    element.addEventListener('click', function() {
        (alert('I was clicked!'))})
}*/

//addingEventListener(clickMeButton)

//clickMeButton.addEventListener('click', function() {alert('I was clicked!')})

//clickMeButton.onclick = () => (alert('I was clicked!'))