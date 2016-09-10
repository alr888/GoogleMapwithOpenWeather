class Greeter {
    constructor(public greeting: string) { }
    greet() {
        return this.greeting;
    }
};

var objToday = new Date(),
    weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
    dayOfWeek = weekday[objToday.getDay()],
    curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
    curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
    curMeridiem = objToday.getHours() > 12 ? "p.m." : "a.m.";
var today = dayOfWeek + " @ " + curHour + ":" + curMinute + " " + curMeridiem;

var greeter = new Greeter("It's a " + today + " Care to check the weather?");

document.getElementById('id_time').innerHTML = greeter.greet();

