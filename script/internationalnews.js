let internationalNewsArrr = JSON.parse(localStorage.getItem("internationalnews"));

let first = document.getElementById("first-div-international");
let last = document.getElementById("last-div-international");
let last2 = document.getElementById("container_india_last");



function displayData(data){

    let cont = document.getElementById("container-international");
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

    for(let i=0;i<data.length;i++){

        

        let elem = data[i];
        
        var box = document.createElement('div');
        box.id = "last-container-national"
    
        let innerdiv = document.createElement('div');
        innerdiv.id = "innerDiv-national"
    
        let authordiv = document.createElement('div');
        authordiv.id = "authorDiv-national"
    
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
        box.append( authordiv, image , innerdiv);
        last2.append(box);
    }


    cont.append(first, last);
};

displayData (internationalNewsArrr)