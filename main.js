const display = document.querySelector("#display");
const count = document.querySelector("#count");
const run = document.querySelector("#run");
const city = document.querySelector("#city");
const city2 = document.querySelector("#city2");
const city3 = document.querySelector("#city3");
const city4 = document.querySelector("#city4");
const city5 = document.querySelector("#city5");
const ccc = document.querySelector("#ccc");





let sourceData =[];

fetch("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-8734B389-DE68-41ED-A1B2-221FEAC42C44&locationName=")
.then(function(response){
    return response.json();
})

.then(function(data){
    console.log(data)
    console.log(data.records.location[0])
    console.log(data.records.location[5].locationName)
    sourceData = data;
    console.log(sourceData)
    console.log(sourceData.records.location[5].weatherElement[3].time[0].parameter.parameterName)

    // display.innerHTML = data.records.location[0];
})

count.addEventListener("click",()=>{
    // console.log(count.value);
    // city.innerHTML = data.records.location[5].locationName;
    
    if(count.value === "taipei"){
        city.innerHTML = sourceData.records.location[5].locationName;
        city2.innerHTML = sourceData.records.location[5].weatherElement[0].time[0].parameter.parameterName;
        city3.innerHTML = sourceData.records.location[5].weatherElement[2].time[0].parameter.parameterName;
        city4.innerHTML = sourceData.records.location[5].weatherElement[4].time[0].parameter.parameterName;
        city5.innerHTML = sourceData.records.location[5].weatherElement[1].time[0].parameter.parameterName;
        // console.log(typeof sourceData.records.location[5].weatherElement[0].time[0].parameter.parameterName)

        ccc.setAttribute ("class","fa-solid fa-cloud-showers-heavy fa-bounce"  );

    }
    if(count.value === "taoyuan"){
        city.innerHTML = sourceData.records.location[13].locationName;
        city2.innerHTML = sourceData.records.location[13].weatherElement[0].time[0].parameter.parameterName;
        city3.innerHTML = sourceData.records.location[13].weatherElement[2].time[0].parameter.parameterName;
        city4.innerHTML = sourceData.records.location[13].weatherElement[4].time[0].parameter.parameterName;
        city5.innerHTML = sourceData.records.location[13].weatherElement[1].time[0].parameter.parameterName;
        ccc.setAttribute ("class","fa-solid fa-cloud-showers-heavy fa-bounce"  );

    }
    if(count.value === "taichun"){
        city.innerHTML = sourceData.records.location[11].locationName;
        city2.innerHTML = sourceData.records.location[11].weatherElement[0].time[0].parameter.parameterName;
        city3.innerHTML = sourceData.records.location[11].weatherElement[2].time[0].parameter.parameterName;
        city4.innerHTML = sourceData.records.location[11].weatherElement[4].time[0].parameter.parameterName;
        city5.innerHTML = sourceData.records.location[11].weatherElement[1].time[0].parameter.parameterName;
        ccc.setAttribute ("class","fa-sharp fa-solid fa-cloud fa-bounce"  );

    }
    if(count.value === "tainan"){
        city.innerHTML = sourceData.records.location[6].locationName;
        city2.innerHTML = sourceData.records.location[6].weatherElement[0].time[0].parameter.parameterName;
        city3.innerHTML = sourceData.records.location[6].weatherElement[2].time[0].parameter.parameterName;
        city4.innerHTML = sourceData.records.location[6].weatherElement[4].time[0].parameter.parameterName;
        city5.innerHTML = sourceData.records.location[6].weatherElement[1].time[0].parameter.parameterName;
        ccc.setAttribute ("class","fa-sharp fa-solid fa-cloud fa-bounce"  );

    }

})