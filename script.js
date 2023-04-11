const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const sbmtrqst = document.getElementById('srchcit');
var custcit = document.getElementById('citsearch');
var citname="";
var fetchloc={};
citlat="";
citlong="";
var curday = "1/1/1970";
var citsearch="";
var fetcheddata={};
var curweatherdata={};
var lscheck = localStorage.getItem('curcit');

sbmtrqst.addEventListener("click", function(event){
    event.preventDefault();
    param=custcit.value.replace(/\s/g,'+');
    document.location.href="./index.html?cit="+param;
});

document.addEventListener("keydown", (event) => {
    if (event.key === 'Enter') {
        param=custcit.value.replace(/\s/g,'+');
        document.location.href="./index.html?cit="+param;
    } 
  });

var fetchweather=function(){
    fetch("https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?lat="+citlat+"&lon="+citlong+"&appid=91dbdb0266d7090109a5b346ee0c8973").then(function(response){
        if(response.ok){
            response.json().then(function(data){
                fetcheddata=data;

                //5 day forecast

                //dp1 - next day
                //date
                dp1unix=fetcheddata.list[7].dt;
                dp1day=new Date(dp1unix*1000);
                dp1formatted="("+(dp1day.getMonth()+1)+"/"+dp1day.getDate()+"/"+dp1day.getFullYear()+")";
                //temp
                dp1tempK=fetcheddata.list[7].main.temp;
                dp1tempF=((dp1tempK-273.15)*(9/5))+32;
                //icon
                dp1iconcode=fetcheddata.list[7].weather[0].icon;
                dp1iconref="https://openweathermap.org/img/wn/"+dp1iconcode+"@2x.png";
                //populate card
                document.getElementById("dp1").innerText=dp1formatted;
                document.getElementById("dp1temp").innerText=Math.round(dp1tempF)+" °F";
                document.getElementById("dp1icon").src=dp1iconref;
                document.getElementById("dp1wind").innerText=fetcheddata.list[7].wind.speed+" MPH";
                document.getElementById("dp1humid").innerText=fetcheddata.list[7].main.humidity+"%";

                //date
                dp2unix=fetcheddata.list[15].dt;
                dp2day=new Date(dp2unix*1000);
                dp2formatted="("+(dp2day.getMonth()+1)+"/"+dp2day.getDate()+"/"+dp2day.getFullYear()+")";
                //temp
                dp2tempK=fetcheddata.list[15].main.temp;
                dp2tempF=((dp2tempK-273.15)*(9/5))+32;
                //icon
                dp2iconcode=fetcheddata.list[15].weather[0].icon;
                dp2iconref="https://openweathermap.org/img/wn/"+dp2iconcode+"@2x.png";
                //populate card
                document.getElementById("dp2").innerText=dp2formatted;
                document.getElementById("dp2temp").innerText=Math.round(dp2tempF)+" °F";
                document.getElementById("dp2icon").src=dp2iconref;
                document.getElementById("dp2wind").innerText=fetcheddata.list[15].wind.speed+" MPH";
                document.getElementById("dp2humid").innerText=fetcheddata.list[15].main.humidity+"%";
                
                //date
                dp3unix=fetcheddata.list[23].dt;
                dp3day=new Date(dp3unix*1000);
                dp3formatted="("+(dp3day.getMonth()+1)+"/"+dp3day.getDate()+"/"+dp3day.getFullYear()+")";
                //temp
                dp3tempK=fetcheddata.list[23].main.temp;
                dp3tempF=((dp3tempK-273.15)*(9/5))+32;
                //icon
                dp3iconcode=fetcheddata.list[23].weather[0].icon;
                dp3iconref="https://openweathermap.org/img/wn/"+dp3iconcode+"@2x.png";
                //populate card
                document.getElementById("dp3").innerText=dp3formatted;
                document.getElementById("dp3temp").innerText=Math.round(dp3tempF)+" °F";
                document.getElementById("dp3icon").src=dp3iconref;
                document.getElementById("dp3wind").innerText=fetcheddata.list[23].wind.speed+" MPH";
                document.getElementById("dp3humid").innerText=fetcheddata.list[23].main.humidity+"%";

                //date
                dp4unix=fetcheddata.list[31].dt;
                dp4day=new Date(dp4unix*1000);
                dp4formatted="("+(dp4day.getMonth()+1)+"/"+dp4day.getDate()+"/"+dp4day.getFullYear()+")";
                //temp
                dp4tempK=fetcheddata.list[31].main.temp;
                dp4tempF=((dp4tempK-273.15)*(9/5))+32;
                //icon
                dp4iconcode=fetcheddata.list[31].weather[0].icon;
                dp4iconref="https://openweathermap.org/img/wn/"+dp4iconcode+"@2x.png";
                //populate card
                document.getElementById("dp4").innerText=dp4formatted;
                document.getElementById("dp4temp").innerText=Math.round(dp4tempF)+" °F";
                document.getElementById("dp4icon").src=dp4iconref;
                document.getElementById("dp4wind").innerText=fetcheddata.list[31].wind.speed+" MPH";
                document.getElementById("dp4humid").innerText=fetcheddata.list[31].main.humidity+"%";

                //date
                dp5unix=fetcheddata.list[39].dt;
                dp5day=new Date(dp5unix*1000);
                dp5formatted="("+(dp5day.getMonth()+1)+"/"+dp5day.getDate()+"/"+dp5day.getFullYear()+")";
                //temp
                dp5tempK=fetcheddata.list[39].main.temp;
                dp5tempF=((dp5tempK-273.15)*(9/5))+32;
                //icon
                dp5iconcode=fetcheddata.list[39].weather[0].icon;
                dp5iconref="https://openweathermap.org/img/wn/"+dp5iconcode+"@2x.png";
                //populate card
                document.getElementById("dp5").innerText=dp5formatted;
                document.getElementById("dp5temp").innerText=Math.round(dp5tempF)+" °F";
                document.getElementById("dp5icon").src=dp5iconref;
                document.getElementById("dp5wind").innerText=fetcheddata.list[39].wind.speed+" MPH";
                document.getElementById("dp5humid").innerText=fetcheddata.list[39].main.humidity+"%";
            })
        }
    })
//current weather
fetch("https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat="+citlat+"&lon="+citlong+"&appid=91dbdb0266d7090109a5b346ee0c8973").then(function(response){
    if(response.ok){
        response.json().then(function(data){
            curweatherdata=data;
            curtempK=curweatherdata.main.temp;
            curtempF=((curtempK-273.15)*(9/5))+32;
            curdayunix=curweatherdata.dt;
            curday=new Date(curdayunix*1000);
            iconcode=curweatherdata.weather[0].icon;
            iconref="https://openweathermap.org/img/wn/"+iconcode+"@2x.png";
            curdayformatted="("+(curday.getMonth()+1)+"/"+curday.getDate()+"/"+curday.getFullYear()+")";
            document.getElementById("curcit").innerHTML=citname+" "+curdayformatted+" "+"<img src='"+iconref+"' alt='"+iconcode+"' height='60px' >";
            document.getElementById("curtemp").innerText=Math.round(curtempF)+" °F";
            document.getElementById("curwind").innerText=curweatherdata.wind.speed+" MPH";
            document.getElementById("curhumid").innerText=curweatherdata.main.humidity+"%";

        })
    }
})

}
//Get coordinates from city name
function citlocfetch(citname){
    fetch("https://api.geoapify.com/v1/geocode/search?text="+citname+"&apiKey=16a4683e20a549b8b25f3731ad3493c5").then(function(response){
        if(response.ok){
            response.json().then(function(data){
                fetchloc=data;
                citlat=fetchloc.features[0].geometry.coordinates[1];
                citlong=fetchloc.features[0].geometry.coordinates[0];
                citname=fetchloc.features[0].properties.formatted;
                console.log(citname);
                localStorage.setItem('citlat',citlat);
                localStorage.setItem('citlong',citlong);
                fetchweather();
            })
        }
    })
};


if (urlParams.get('cit')!==null){
    citname=urlParams.get('cit');
    localStorage.setItem("curcit",citname);
    citlocfetch(citname);
}
if(lscheck!==null&&urlParams.get('cit')==null){
    citname=lscheck;
    citlocfetch(lscheck);
}
if(lscheck==null&&urlParams.get('cit')==null){
    citname="Austin, TX";
    citlat="30.274593386401868";
    citlong="-97.7403706228556";
    fetchweather();
};

