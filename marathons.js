var marathons = [];

marathons.push({
    title: "Chicago Marathon",
    year: 2012,
    medalPic: "assets/ChicagoM2012.jpg",
    time: "4:08:08",
    pace: "9:28",
    location: "Chicago, IL"
},
{
    title: "Chicago Marathon",
    year: 2013,
    medalPic: "assets/ChicagoM2013.jpg",
    time: "4:08:29",
    pace: "9:29",
    location: "Chicago, IL"
},
{
    title: "Chicago Marathon",
    year: 2014,
    medalPic: "assets/ChicagoM2014.jpg",
    time: "4:15:05",
    pace: "9:44",
    location: "Chicago, IL"
},
{
    title: "Disney World Marathon",
    year: 2015,
    medalPic: "assets/DisneyM2015.jpg",
    time: "4:21:17",
    pace: "9:58",
    location: "Lake Buena Vista, FL"
},
{
    title: "Derby Festival Marathon",
    year: 2016,
    medalPic: "assets/DerbyM2016.jpg",
    time: "4:25:07",
    pace: "10:07",
    location: "Louisville, KY"
},
{
    title: "Chicago Marathon",
    year: 2016,
    medalPic: "assets/ChicagoM2016.jpg",
    time: "3:55:49",
    pace: "8:59",
    location: "Chicago, IL"
},
{
    title: "Chicago Marathon",
    year: 2019,
    medalPic: "",
    time: "4:18:53",
    pace: "9:53",
    location: "Chicago, IL"
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
    year.innerHTML = "Year: " + marathon.year;
    //Race time
    var time = document.createElement("h5");
    time.innerHTML = "Time: " + marathon.time;
    //Race pace
    var pace = document.createElement("h5");
    pace.innerHTML = "Pace: " + marathon.pace + " min/mile";
    //append everything to parent element
    newDiv.appendChild(image);
    newDiv.appendChild(raceName);
    newDiv.appendChild(year);
    newDiv.appendChild(time);
    newDiv.appendChild(pace);
    document.getElementById("marathonContent").appendChild(newDiv);
});
