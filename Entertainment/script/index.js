let d="16 june 2022"
document.getElementById("date").innerHTML=d;
let api=`cfd6574ae3624d559ba8c801be48337d`

// let data=JSON.parse(localStorage.getItem("news"))
// let api="3d3614b6-0b75-4b05-b8b8-bf2953d3efe6"

let url=`https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=${api}`

async function fetching(){


    let rec=await fetch(url)
    let data=await rec.json()
       dispaly(data.articles)
}
fetching()

function dispaly(data){
    data.forEach((e)=>{
        let div1= create("div")
        div1.setAttribute("class","div1")
        let date=create("p")
        date.innerText=`17 jun 2022`
        
        div1.append(date)
        ////////////////////
        let div2=create("div")
        div2.setAttribute("class","div2")
        let img=create("img")
        img.src=e.urlToImage
        div2.append(img)
        ///////////////////////////
        let div3=create("div")
        div3.setAttribute("class","div3")
        let h2=create("h2")
        h2.innerText=e.title
        let p=create("p")
        p.innerText=e.description
        div3.append(h2,p)
        /////////////////
    
        let mindiv=create("div")
        mindiv.setAttribute("id","mindiv")
        let hr = create("hr")
        
        mindiv.append(div1,div2,div3)
        document.querySelector("#contaner").append(mindiv,hr)
    
    })
}
// data.forEach((e)=>{
//     let div1= create("div")
//     div1.setAttribute("class","div1")
//     let date=create("p")
//     date.innerText=`17 jun 2022`
    
//     div1.append(date)
//     ////////////////////
//     let div2=create("div")
//     div2.setAttribute("class","div2")
//     let img=create("img")
//     img.src=e.urlToImage
//     div2.append(img)
//     ///////////////////////////
//     let div3=create("div")
//     div3.setAttribute("class","div3")
//     let h2=create("h2")
//     h2.innerText=e.title
//     let p=create("p")
//     p.innerText=e.description
//     div3.append(h2,p)
//     /////////////////

//     let mindiv=create("div")
//     mindiv.setAttribute("id","mindiv")
//     let hr = create("hr")
    
//     mindiv.append(div1,div2,div3)
//     document.querySelector("#contaner").append(mindiv,hr)

// })

function create(o){
    return document.createElement(o)
}