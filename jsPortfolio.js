// this function takes the name field of the contact me field and makes it uppercase
function upperCase() {
    var x = document.getElementById("name");
    x.value = x.value.toUpperCase();}
//the move over function changes font in the header
function mOver(obj) {
    obj.innerHTML = "Being yourself is."
}
//the move over function changes font in the header
function mOut(obj) {
    obj.innerHTML = "Standing out is."
}
//the move over function changes font in the about me underneath the stephmoji
function mOverDesign(obj) {
    obj.innerHTML = "Web Designer"
}
//the move over function changes font in the about me underneath the stephmoji
    function mOutDesign(obj) {
        obj.innerHTML = "Web Developer"
    }
//found this template to do this on W3 Schools :)
// Set the date that I will finish uploading my projects
var countDownDate = new Date("July 5, 2017 15:37:25").getTime();
//Counts every second
var x = setInterval(function() {
//Todays date and time
    var now = new Date().getTime();

    // Time between today and date scheduled
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Soon! I Promise!";
    }
}, 1000);
