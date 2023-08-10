
//77a1e21e99ad68ea10b8de616a7e08b9

//https://api.openweathermap.org/data/2.5/weather?q={kolkata}&appid={eea90397c3ba6ef85198f1b574217416}

const http =require("http");
const fs=require("fs");
var requests = require('requests');

const homeFile=fs.readFileSync("home.html","utf-8");

const replaceVal=(tempVal,orgVal)=>{

    let temperature =tempVal.replace("{%tempVal%}",orgVal.main.temp);
    temperature =temperature.replace("{%tempMin%}",orgVal.main.temp_min);
    temperature =temperature.replace("{%tempMax%}",orgVal.main.temp_max);
    temperature =temperature.replace("{%location%}",orgVal.name);
    temperature =temperature.replace("{%country%}",orgVal.sys.country);
    temperature =temperature.replace("{%weatherStatus%}",orgVal.weather[0].main);

    return temperature;
}

const server =http.createServer((req,res)=>{
    if(req.url =="/"){
        requests('https://api.openweathermap.org/data/2.5/weather?q=kolkata&appid=eea90397c3ba6ef85198f1b574217416&units=metric')
        .on('data', function (chunk) {
            const objData=JSON.parse(chunk);
            const arrData=[objData];
            // console.log(arrData[0].main.temp);
            // tempMin=arrData[0].main.temp_min;
            // tempMax=arrData[0].main.temp_max;

            const realTimeData=arrData
            .map((val)=>replaceVal(homeFile,val))
            .join("");
            
             res.write(realTimeData);
             //console.log(realTimeData);
        })
        .on('end', function (err) {
            if (err) return console.log('connection closed due to errors', err);
 
            res.end();
        });
    }
})

server.listen(3000,"127.0.0.1");

