// Big News pic
//https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1655292192.webp

//side news


//https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1655287562.webp
//https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1655281588.webp



//API KEY
//a02fd294bc82a40ad08c3e544215040b

//URL
//let url='https://gnews.io/api/v4/search?q=example&token=a02fd294bc82a40ad08c3e544215040b'
let today = new Date().toLocaleDateString()

//console.log(today)

let url=`https://newsapi.org/v2/everything?q=apple&from=${today}&to=${today}&sortBy=popularity&apiKey=460bb42b4004408cb7c27a53b31b26e3`

//'https://newsdata.io/api/1/news?apikey=pub_83765f13104878aa70f64695c99e75273b6e&q=news'

async function see(){
    var res=await fetch(url)
    let data=await res.json()
  //  console.log(data)
    data=data.articles
  // console.log(data)
    append(data)
}

see()

function append(data){
     let D=data[0].publishedAt
   
    var o =document.querySelector(".date").innerText=D
    document.querySelector("#d").innerText=D
   
    let x=Math.floor(Math.random()*20)
    
  //  console.log(x)
    var top=document.querySelector("#top")
    let img=document.createElement("img")
    img.src=(data[x].urlToImage)
    let h=document.createElement("h1")
    let a=document.createElement('a')
    a.href=data[x].url
    a.innerText=data[x].title
    h.append(a)
   
    // h.innerText=data[x].title
    let desc=document.createElement("p")
    desc.innerText=data[x].content
    let date=document.createElement("p")
    date.innerText=data[x].publishedAt

    top.append(img,h,desc,date)

    data.forEach(function(el,i){
           var news = document.querySelector("#news")
    let div=document.createElement("div")
    let date=document.createElement("p")
    date.innerText=el.publishedAt
    let img=document.createElement("img")
    img.src=el.urlToImage
    let innerdiv=document.createElement("div")
    
    let title=document.createElement("h3")
    // title.innerText=el.title
    let a=document.createElement("a")
    a.href=el.url
    a.innerText=el.title
    title.append(a)
  //  console.log(title)
    let desc=document.createElement("p")
    desc.innerText=el.content
    innerdiv.append(title,desc)

   div.append(date,img,innerdiv)
        let hr=document.createElement("hr")

    news.append(div,hr)
    })
 
}



// for sidenews





























