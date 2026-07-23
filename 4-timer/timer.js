function newYearCounter() {
    const today = new Date();
    const secs = 59 - today.getSeconds();
    const minutes = 59 - today.getMinutes();
    const hours = 23 - today.getHours();
    const days = 31 - today.getDate();
    const months = 11 - today.getMonth();

    const counter = {
        days: days,
        months: months,
        hours: hours, 
        minutes: minutes,
        seconds: secs
    }

    const formatter = new Intl.DurationFormat("ru-RU", { style: "long" }).formatToParts(counter);
    const dateString = formatter.map((p) => p.value).map((i, index) => (((index + 1) % 4) == 0) ? ', ' : i).join('');

    return dateString;
}

function updateDate() {
    setInterval(()=>{
        document.querySelector('p').textContent = newYearCounter();
    }, 1000)

    
}

