var NumberWrapper = document.getElementById('Number')
var  Number = 0

function increment(){
    Number = Number + 1
    NumberWrapper.innerHTML = Number;
}

function decrement(){
    Number = Number - 1
    NumberWrapper.innerHTML = Number;
}