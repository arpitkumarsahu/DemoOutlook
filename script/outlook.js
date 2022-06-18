

var magazineArrr = JSON.parse(localStorage.getItem("magazine"))

var first = document.getElementById("first_grid");
let mid = document.getElementById("middle");
let last = document.getElementById("last_grid");
let last2 = document.getElementById("last_grid_2")

function displayData(data){

   let cont =  document.getElementById("container-outlook");
   cont.innerHTML = null;

//    let cont2 = document.getElementById("last_grid_2");
//    cont2.innerHTML = null;

   for(let i=1;i<3;i++){

    let elem = data[i];

    var box = document.createElement('div');

    box.id = "first-sub-div"

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
   }

   let elem = data[0];

    var box = document.createElement('div');
    box.id = "middle-sub-div"

    var image = document.createElement("img");
    image.src = elem.image;

    var heading = document.createElement('h3');
    heading.innerText = elem.heading;

    var story = document.createElement('p');
    story.innerText = elem.story;

    var author = document.createElement('h5');
    author.innerText = elem.author;


    box.append(image, heading, story, author);
    mid.append(box);

    for(let i=3;i<5;i++){
     let   elem = data[i];

    var box = document.createElement('div');
    box.id = "last-sub-div"

    var image = document.createElement("img");
    image.src = elem.image;

    var heading = document.createElement('h3');
    heading.innerText = elem.heading;

    var story = document.createElement('p');
    story.innerText = elem.story;

    var author = document.createElement('h5');
    author.innerText = elem.author;


    box.append(image, heading, story, author);
    last.append(box);
    }

    for(let i=0;i<data.length;i++){

        

    let elem = data[i];
    
    var box = document.createElement('div');
    box.id = "last-container"

    let innerdiv = document.createElement('div');
    innerdiv.id = "innerDiv"

    let authordiv = document.createElement('div');
    authordiv.id = "authorDiv"

    var image = document.createElement("img");
    image.src = elem.image;

    var heading = document.createElement('h3');
    heading.innerText = elem.heading;

    var story = document.createElement('p');
    story.innerText = elem.story;

    var author = document.createElement('h5');
    author.innerText = elem.author;

    authordiv.append(author);
   innerdiv.append(heading, story)
    box.append( authordiv, image, innerdiv);
    last2.append(box);
    }
    
    
    cont.append(first, mid, last);
   
};

displayData(magazineArrr);







