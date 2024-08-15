fetch("https://api.aladhan.com/v1/timingsByCity?city=cairo&country=egypt&method=8")
    .then(response => response.json())
    .then(addAladhan);

function addAladhan(el) {
    addDay(el.data.date.hijri.weekday.ar);
    addDate(el.data.date.readable);
    let para = document.querySelectorAll(".cards p");
    // para.forEach(e => {
    //     e.innerHTML = el.data.timings
    // });
    para[0].innerHTML = el.data.timings.Fajr;
    para[1].innerHTML = el.data.timings.Sunrise;
    para[2].innerHTML = el.data.timings.Dhuhr;
    para[3].innerHTML = +((el.data.timings.Asr).substring(0,2)) - 12 + ((el.data.timings.Asr).substring(2));
    para[4].innerHTML = +((el.data.timings.Maghrib).substring(0,2)) - 12 + ((el.data.timings.Maghrib).substring(2));
    para[5].innerHTML = +((el.data.timings.Isha).substring(0,2)) - 12 + ((el.data.timings.Isha).substring(2));
    // console.log(+((el.data.timings.Isha).substring(0,2)) - 12)
    console.log(+((el.data.timings.Isha).substring(0,2)) - 12 + ((el.data.timings.Maghrib).substring(2)))
}

function addDay(day) {
    document.querySelector(".day").innerHTML = day;
}

function addDate(date) {
    document.querySelector(".date").innerHTML = date;
}

