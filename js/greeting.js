// Get the hour
var today = new Date();
var hour = today.getHours();

// Here you can change your name
var name = 'Irantzu';

// Here you can change your greetings
var gree1 = 'Gabon! ';
var gree2 = 'Egun on! ';
var gree3 = 'Arratsalde on ';
var gree4 = 'Arratsalde on ';

// Define the hours of the greetings
if (hour >= 21 && hour < 5) {
    document.getElementById('greetings').innerText = gree1 + name;
} else if (hour >= 6 && hour < 12) {
    document.getElementById('greetings').innerText = gree2 + name;
} else if (hour >= 12 && hour < 18) {
    document.getElementById('greetings').innerText = gree3 + name;
} else  {
    document.getElementById('greetings').innerText = gree4 + name;
}
