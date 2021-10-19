var halfMarathons = [];

halfMarathons.push({
    title: "Chicago Half Marathon",
    year: 2009,
    medalPic: "assets/ChicagoH2009.jpg",
    racePic: "",
    time: "2:33:03",
    pace: "11:40",
    location: "Chicago, IL",
    map: ""
},
{
    title: "Derby Festival MiniMarathon",
    year: 2010,
    medalPic: "assets/DerbyH2010.jpg",
    racePic: "",
    time: "2:14:37",
    pace: "10:16",
    location: "Louisville, KY",
    map: ""
},
{
    title: "Chicago Half Marathon",
    year: 2010,
    medalPic: "assets/ChicagoH2010.jpg",
    racePic: "",
    time: "1:57:58",
    pace: "9:00",
    location: "Chicago, IL",
    map: ""
},
{
    title: "Derby Festival MiniMarathon",
    year: 2011,
    medalPic: "assets/DerbyH2011.jpg",
    racePic: "",
    time: "1:57:02",
    pace: "8:56",
    location: "Louisville, KY",
    map: ""
},
{
    title: "Urban Bourbon Half Marathon",
    year: 2011,
    medalPic: "assets/UrbanH2011.jpg",
    racePic: "",
    time: "1:43:04",
    pace: "7:52",
    location: "Louisville, KY",
    map: ""
},
{
    title: "Derby Festival MiniMarathon",
    year: 2012,
    medalPic: "assets/DerbyH2012.jpg",
    racePic: "",
    time: "1:50:47",
    pace: "8:27",
    location: "Louisville, KY",
    map: ""
},
{
    title: "Derby Festival MiniMarathon",
    year: 2013,
    medalPic: "assets/DerbyH2013.jpg",
    racePic: "",
    time: "1:51:10",
    pace: "8:29",
    location: "Louisville, KY",
    map: ""
},
{
    title: "Derby Festival MiniMarathon",
    year: 2015,
    medalPic: "assets/DerbyH2015.jpg",
    racePic: "",
    time: "1:40:57",
    pace: "7:42",
    location: "Louisville, KY",
    map: ""
},
{
    title: "Rock 'N' Roll Nashville Half Marathon",
    year: 2017,
    medalPic: "assets/NashvilleH2017.jpg",
    racePic: "",
    time: "2:09:18",
    pace: "9:52",
    location: "Nashville, TN",
    map: ""
},
{
    title: "Derby Festival MiniMarathon",
    year: 2018,
    medalPic: "assets/DerbyH2018.jpg",
    racePic: "",
    time: "1:47:53",
    pace: "8:14",
    location: "Louisville, KY",
    map: ""
},
{
    title: "Urban Bourbon Half Marathon",
    year: 2018,
    medalPic: "assets/UrbanH2018.jpg",
    racePic: "",
    time: "1:50:28",
    pace: "8:27",
    location: "Louisville, KY",
    map: ""
},
{
    title: "Derby Festival MiniMarathon",
    year: 2019,
    medalPic: "assets/DerbyH2019.jpg",
    racePic: "",
    time: "1:55:26",
    pace: "8:48",
    location: "Louisville, KY",
    map: ""
},
{
    title: "Urban Bourbon Half Marathon",
    year: 2021,
    medalPic: "",
    racePic: "",
    time: "1:54:38",
    pace: "8:45",
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
    year.innerHTML = "Year: " + halfMarathon.year;
    //Race time
    var time = document.createElement("h5");
    time.innerHTML = "Time: " + halfMarathon.time;
    //Race pace
    var pace = document.createElement("h5");
    pace.innerHTML = "Pace: " + halfMarathon.pace + " min/mile";
    //Appending data
    newDiv.appendChild(image);
    newDiv.appendChild(raceName);
    newDiv.appendChild(year);
    newDiv.appendChild(time);
    newDiv.appendChild(pace);
    document.getElementById("halfMarathonContent").appendChild(newDiv);
});
