

var indiaArrr = JSON.parse(localStorage.getItem("indianews"));


let first = document.getElementById("first_div_india");
let last = document.getElementById("last_div_india");


function displayData(data){

    let cont = document.getElementById("container_india");
    cont.innerHTML = null;

    let elem = data[0];

    var box = document.createElement('div');

    box.id = "first-sub-div-india"

    var image = document.createElement("img");
    image.src = elem.image;

    var heading = document.createElement('h3');
    heading.innerText = elem.heading;

    var story = document.createElement('p');
    story.innerText = elem.story;

    var author = document.createElement('h5');
    author.innerText = elem.author;


    box.append(image, heading, story, author);
    first.append(box);

    for(let i= 1;i<5;i++){
        let   elem = data[i];

    var box = document.createElement('div');
    box.id = "last-sub-div-india"

    var image = document.createElement("img");
    image.src = elem.image;

    var heading = document.createElement('h3');
    heading.innerText = elem.heading;

    var story = document.createElement('p');
    story.innerText = elem.story;

    var author = document.createElement('h5');
    author.innerText = elem.author;


    box.append(image, heading, story, author);
    last.append(box)
    }

    cont.append(first, last);
   
};

displayData(indiaArrr)