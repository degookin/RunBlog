var marathons = [];

marathons.push({
    title: "Chicago Marathon",
    year: 2012,
    medalPic: "assets/ChicagoM2012.jpg",
    racePic: "",
    time: "4:08:08",
    pace: "",
    location: "Chicago, IL",
    map: ""
},
{
    title: "Chicago Marathon",
    year: 2013,
    medalPic: "assets/ChicagoM2013.jpg",
    racePic: "",
    time: "4:08:15",
    pace: "",
    location: "Chicago, IL",
    map: ""
},
{
    title: "Chicago Marathon",
    year: 2014,
    medalPic: "assets/ChicagoM2014.jpg",
    racePic: "",
    time: "4:15:49",
    pace: "",
    location: "Chicago, IL",
    map: ""
},
{
    title: "Disney World Marathon",
    year: 2015,
    medalPic: "assets/DisneyM2015.jpg",
    racePic: "",
    time: "4:15:00",
    pace: "",
    location: "Lake Buena Vista, FL",
    map: ""
},
{
    title: "Derby Festival Marathon",
    year: 2016,
    medalPic: "assets/DerbyM2016.jpg",
    racePic: "",
    time: "4:25:00",
    pace: "",
    location: "Louisville, KY",
    map: ""
},
{
    title: "Chicago Marathon",
    year: 2016,
    medalPic: "assets/ChicagoM2016.jpg",
    racePic: "",
    time: "3:55:49",
    pace: "",
    location: "Chicago, IL",
    map: ""
});

const mValues = Object.values(marathons);

mValues.forEach(marathon => {
    //div to contain everything
    var newDiv = document.createElement("div");
    newDiv.className = "col-lg-4 col-sm-6"
    document.body.appendChild(newDiv);
    //Medal image
    var image = document.createElement("img");
    image.src = marathon.medalPic;
    image.className = "raceImage img-thumbnail"
    //Race title
    var raceName = document.createElement("h3");
    raceName.innerHTML = marathon.title;
    //Race year
    var year = document.createElement("h5");
    year.innerHTML = marathon.year;
    //Race time
    var time = document.createElement("h5");
    time.innerHTML = marathon.time;
    newDiv.appendChild(image);
    newDiv.appendChild(raceName);
    newDiv.appendChild(year);
    newDiv.appendChild(time);
    document.getElementById("marathonContent").appendChild(newDiv);
});