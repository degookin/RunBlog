var marathons = [];
var halfMarathons = [];
var tenMilers = [];
var tenKs = [];
var fiveKs = [];


marathons.push({
    title: "Chicago Marathon",
    year: 2012,
    medalPic: "https://images.unsplash.com/photo-1508730328641-47c1616341b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1301&q=80",
    racePic: "",
    time: "4:08:08",
    pace: "",
    location: "Chicago, IL",
    map: ""
},
{
    title: "Chicago Marathon",
    year: 2013,
    medalPic: "https://images.unsplash.com/photo-1508730328641-47c1616341b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1301&q=80",
    racePic: "",
    time: "4:08:15",
    pace: "",
    location: "Chicago, IL",
    map: ""
},
{
    title: "Chicago Marathon",
    year: 2014,
    medalPic: "https://images.unsplash.com/photo-1508730328641-47c1616341b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1301&q=80",
    racePic: "",
    time: "4:15:49",
    pace: "",
    location: "Chicago, IL",
    map: ""
},
{
    title: "Disney World Marathon",
    year: 2015,
    medalPic: "https://images.unsplash.com/photo-1508730328641-47c1616341b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1301&q=80",
    racePic: "",
    time: "4:15:00",
    pace: "",
    location: "Lake Buena Vista, FL",
    map: ""
},
{
    title: "Derby Festival Marathon",
    year: 2016,
    medalPic: "https://images.unsplash.com/photo-1508730328641-47c1616341b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1301&q=80",
    racePic: "",
    time: "4:25:00",
    pace: "",
    location: "Louisville, KY",
    map: ""
},
{
    title: "Chicago Marathon",
    year: 2016,
    medalPic: "https://images.unsplash.com/photo-1508730328641-47c1616341b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1301&q=80",
    racePic: "",
    time: "3:55:49",
    pace: "",
    location: "Chicago, IL",
    map: ""
});


// function buildString(marathon){
//     var result = "I ran the ";
//     result += marathon.title + " in ";
//     result += marathon.year;
//     result += " with a time of " + marathon.time;
//     return result;
// }

// marathons.forEach(function(marathon){
//     console.log(buildString(marathon));
// });



//TESTING1
// const keys = Object.keys(marathons);
const values = Object.values(marathons);
// const entries = Object.entries(marathons);
// console.log(keys);
// console.log(values);
// console.log(entries);

values.forEach(marathon => {
    console.log("I ran the " + marathon.title + " in " + 
    marathon.year +  " and my time was " + marathon.time);
});



//TESTING2





