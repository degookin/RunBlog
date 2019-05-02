var halfMarathons = [];

halfMarathons.push({
    title: "Chicago Half Marathon",
    year: 2009,
    medalPic: "assets/ChicagoH2009.jpg",
    racePic: "",
    time: "2:08:08",
    pace: "",
    location: "Chicago, IL",
    map: ""
},
{
    title: "Derby Festival MiniMarathon",
    year: 2010,
    medalPic: "assets/DerbyH2010.jpg",
    racePic: "",
    time: "2:15:49",
    pace: "",
    location: "Louisville, KY",
    map: ""
},
{
    title: "Chicago Half Marathon",
    year: 2010,
    medalPic: "assets/ChicagoH2010.jpg",
    racePic: "",
    time: "2:08:15",
    pace: "",
    location: "Chicago, IL",
    map: ""
},
{
    title: "Derby Festival MiniMarathon",
    year: 2011,
    medalPic: "assets/DerbyH2011.jpg",
    racePic: "",
    time: "2:15:00",
    pace: "",
    location: "Louisville, KY",
    map: ""
},
{
    title: "Urban Bourbon Half Marathon",
    year: 2011,
    medalPic: "assets/UrbanH2011.jpg",
    racePic: "",
    time: "1:43:04",
    pace: "",
    location: "Louisville, KY",
    map: ""
},
{
    title: "Derby Festival MiniMarathon",
    year: 2012,
    medalPic: "assets/DerbyH2012.jpg",
    racePic: "",
    time: "2:25:00",
    pace: "",
    location: "Louisville, KY",
    map: ""
},
{
    title: "Derby Festival MiniMarathon",
    year: 2013,
    medalPic: "assets/DerbyH2013.jpg",
    racePic: "",
    time: "2:25:00",
    pace: "",
    location: "Louisville, KY",
    map: ""
},
{
    title: "Derby Festival MiniMarathon",
    year: 2015,
    medalPic: "assets/DerbyH2015.jpg",
    racePic: "",
    time: "2:25:00",
    pace: "",
    location: "Louisville, KY",
    map: ""
},
{
    title: "Rock 'N' Roll Nashville Half Marathon",
    year: 2017,
    medalPic: "assets/NashvilleH2017.jpg",
    racePic: "",
    time: "2:25:00",
    pace: "",
    location: "Nashville, TN",
    map: ""
},
{
    title: "Derby Festival MiniMarathon",
    year: 2018,
    medalPic: "assets/DerbyH2018.jpg",
    racePic: "",
    time: "2:25:00",
    pace: "",
    location: "Louisville, KY",
    map: ""
},
{
    title: "Urban Bourbon Half Marathon",
    year: 2018,
    medalPic: "assets/UrbanH2018.jpg",
    racePic: "",
    time: "1:50:28",
    pace: "",
    location: "Louisville, KY",
    map: ""
},
{
    title: "Derby Festival MiniMarathon",
    year: 2019,
    medalPic: "assets/DerbyH2019.jpg",
    racePic: "",
    time: "1:55:28",
    pace: "",
    location: "Louisville, KY",
    map: ""
});

const hValues = Object.values(halfMarathons);

hValues.forEach(halfMarathon => {
    //div to contain everything
    var newDiv = document.createElement("div");
    newDiv.className = "col-lg-4 col-sm-6"
    document.body.appendChild(newDiv);
    //Medal image
    var image = document.createElement("img");
    image.src = halfMarathon.medalPic;
    image.className = "raceImage img-thumbnail"
    //Race title
    var raceName = document.createElement("h3");
    raceName.innerHTML = halfMarathon.title;
    //Race year
    var year = document.createElement("h5");
    year.innerHTML = halfMarathon.year;
    //Race time
    var time = document.createElement("h5");
    time.innerHTML = halfMarathon.time;
    newDiv.appendChild(image);
    newDiv.appendChild(raceName);
    newDiv.appendChild(year);
    newDiv.appendChild(time);
    document.getElementById("halfMarathonContent").appendChild(newDiv);
});