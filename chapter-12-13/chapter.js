
// var result = +prompt('What is your result')
// if (result >=150) {
//     console.log('pass');
//     document.write('pass')
// }

// else{
//     console.log('fail');
//     document.write('fail')
// }

// var Html = +prompt('Html Quiz')
// var CSS = +prompt('CSS Quiz')
// var result = Html + CSS


// if (result >=150){
//     console.log('pass');
//     document.write('pass')
// }
// else {
//     console.log('fail')
//     document.write('fail')
// }


// var num1 = +prompt('Enter your are percentage')

// if (num1 >= 80){
//     console.log('A1 Grade');
// }
// else if (num1 >= 70){
//     console.log('A Grade');
// }
// else if (num1 >= 60){
//     console.log('B Grade');
// }
// else if (num1 >= 50){
//     console.log('C Grade');
// }
// else if (num1 >= 40){
//     console.log('D Grade');
// }
// else{
//     console.log('you are fail');
// }

//Question :02
// var num1 = +prompt("enter your 1st integer");
// var num2 = +prompt("enter your 2nd integer");

// if(num1 > num2){
//     console.log(num1 + " is greater then " + num2);
// }

// else{
//     console.log(num2 + " is greater then " + num1);
// }
 
//Question :03
// var num = +prompt('Enter your number')

// if(num >0){
//     console.log('positive');
// }
// else if (num==0){
//     console.log('neutral');
// }
// else {
//     console.log('negative');
// }

//Quetion :05
// var password = 223296
// var password = +prompt('Enter your password')
// if (password ==223296) {
//     alert('Correct password')
//     console.log('Correct password');
// }
// else{
//     alert('Incorrect password')
//     console.log('Incorrect password');
// }

//Marksheet
var English = +prompt('English percentage')
var Math = +prompt('Math percentage')
var Islamiyat = +prompt('Islamiyat percentage')
var Urdu = +prompt('Urdu percentage')
var Physics = +prompt('Physics percentage')
var Computer_Science = +prompt('Computer_Science percentage')
var percentage = ('English+Math+Islamiyat+Urdu+Physics+Computer_Science')/600 *100

document.write('Your percentage'+percentage+'%')

// if (percentage =450) {
//     console.log('A1 Grade');

// }
// else if (percentage =400) {
//     console.log('A Grade');
// }
// else if (percentage =350) {
//     console.log('B Grade');
// }
// else if (percentage =300) {
//     console.log('C Grade');
// }
// else if (percentage =250) {
//     console.log('D Grade');
// }
else{
    console.log('Fail');
}