

const currentDate=()=>{
    const d = new Date();

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day = weekday[d.getDay()];
    console.log(day.slice(0,3));

    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let name = month[d.getMonth()];
    let date=d.getDate();
    console.log(`${name}/${date}`)

    let hours=d.getHours();
    let min=d.getDate();
    let per="AM";

    if(hours >11){
        per="PM";
        if(hours>12)
        hours -= 12;
    }
    if(min<10){
        min ="0" + min;
    }
    

}

currentDate();

const d = new Date();
let text=d.toDateString()
curDate.innerText=text.slice(0,11);