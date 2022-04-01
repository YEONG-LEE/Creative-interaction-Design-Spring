document.write("Hello,world!");

function sayHello(){
var response = prompt("What's your name?");
alert("Hello" + response + ", have a nice day!");
}

function add(a,b){
  return a + b;
}
console.log(add(20,30));
console.log(add(30,500));

function showTopic(){
  var x = document.getElementById('demo');
  <p id="demo" style="font-size: 25px; color:red;">Click the button to change the color and font.</p>
  x.style.fontSize ="25px";
  x.style.color ="red";
}
