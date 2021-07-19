function showClock(){
    const today = new Date();

    const day = dayIndex(today.getDay());
    const month = monthByIndex(today.getMonth());
    const date = dateByIndex(today.getDate());
    const year = today.getFullYear();
    const showDate = document.getElementById('date');
    showDate.textContent = `${day}, ${month} ${date} ${year}`;
    const militaryTime = addZero(today.getHours());
    const regHours  = getStandardHours(militaryTime);
    const mins = addZero(today.getMinutes());
    const secs = addZero(today.getSeconds());
    const showTIme = document.getElementById(`time`);
    showTIme.textContent = `${regHours}:${mins}:${secs} ${militaryTime >= 12 ? 'pm' : 'am'}`
}   

function addZero(time) {
    if (time < 10){
       return "0" + time;        
    }else {
       return time;
    }
}

function getStandardHours(militaryTime) {
    if (militaryTime === 0) {
        return 12
    } else if (militaryTime > 12) {
        return militaryTime - 12
    } else {
        return militaryTime
    }
}

function dateByIndex(date) {
    if (date === 1 || date === 21 || date === 31){
        return date + "st";
    } else if (date === 2 || date === 22) {
        return date + "nd";
    }else if (date === 3 || date === 23){
        return date + "rd";
    }else {
        return date + "th";
    }
}

function monthByIndex(index) { 
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec"
    ];
    return months[index];
}

function dayIndex(index) {
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        'Thursday',
        "Friday",
        "Saturday"
    ];
    return days [index];
}
setInterval(showClock, 150);
showClock();