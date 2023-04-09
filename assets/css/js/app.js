const cartFilm=document.querySelector('.cart-film')
const mainFilm=document.querySelector('.main-film')
const cartCarusel=document.querySelector('.cart-carusel')
const mainFilmName=document.querySelector('.main-film-name')
const NavIcon=document.querySelector('.bi-justify')
const navPosition=document.querySelector('.position-nav')
NavIcon.addEventListener('click',function () {
    navPosition.classList.toggle('d-none')
})
fetch("https://api.tvmaze.com/shows").then(data=>data.json())
.then(arr=>{
for (let i = 0; i < arr.length; i++) {
    mainFilm.innerHTML+=
    `
    <div class="cart-film ">
    <a href="newindex.html?id=${arr[i].id}"><img class="w-100 h-75" src="${arr[i].image.medium}" alt=""></a>
    <p class="pt-4"><a class="text-decoration-none text-black " href=""><b>${arr[i].name}</b></a></p>
</div>
    `
    
}
})
fetch("https://api.tvmaze.com/shows").then(data3=>data3.json())
.then(arrCarusel=>{
for (let i = 0; i < 23; i++) {
    cartCarusel.innerHTML+=
    `
    <div class="cart">
    <a href="newindex.html?id=${arrCarusel[i].id}"> <img class="w-100 h-50" src="${arrCarusel[i].image.medium}" alt=""></a>
    <p><a class="text-decoration-none text-black" href="">${arrCarusel[i].name}</a></p>
</div>

    `
}
})
fetch("https://api.tvmaze.com/shows").then(data2=>data2.json())
.then(arr2=>{
for (let i = 0; i <arr2.length; i++) {
    mainFilmName.innerHTML+=
    `
    <div class="d-flex justify-content-between">
    <p class="hoverr "><a class="text-decoration-none  " href="">${arr2[i].name} ${arr2[i].id}(sezon))</a></p>
    <p>${arr2[i].runtime} bolum</p>
</div>
    `
    
    
}
})

const film=document.querySelector('.film')
const filmTik=document.querySelector('.zzz')
const serial=document.querySelector('.serial')
const cizgifilm=document.querySelector('.cizgifilm')
const comedi=document.querySelector('.komedi')
film.addEventListener('click',function (e) {
    filmTik.classList.toggle('d-none')
    e.preventDefault()
})
serial.addEventListener('click',function (e) {
    filmTik.classList.toggle('d-none')
    e.preventDefault()
})
cizgifilm.addEventListener('click',function (e) {
    filmTik.classList.toggle('d-none')
    e.preventDefault()
})
comedi.addEventListener('click',function (e) {
    filmTik.classList.toggle('d-none')
    e.preventDefault()
})
const  dispNone=document.querySelector('.dispNone')
fetch("https://api.tvmaze.com/shows").then(dataDisp=>dataDisp.json())
.then(arrDispNone=>{
for (let i = 0; i <32; i++) {
    dispNone.innerHTML+=
    `
    <a class="text-decoration-none padd-left  text-black" href="geyim.html">${arrDispNone[i].name}</a>
    `
    
    
}
})
const inputt=document.querySelector('.inpp')
const btnInp =document.querySelector('.btn-inp')
btnInp.addEventListener('click',function () {
    

    axios.get("https://api.tvmaze.com/search/shows?q="+inputt.value).then(arr22=>{
    
    
mainFilm.innerHTML=""

arr22.data.forEach(element => {
    mainFilm.innerHTML+=
    `
    <div class="cart-film ">
    <a href="newindex.html?id"><img class="w-100 h-75" src="${element.show.image?.medium}" alt=""></a>
    <p class="pt-4"><a class="text-decoration-none text-black " href=""><b>${element.show.name}</b></a></p>
</div>
    `
});
})
})
const Inpcart=document.querySelector('.inp-cart')
inputt.addEventListener('keyup',function () {
    if (inputt.value=="") {
        Inpcart.classList.add('d-none')
        
    }
    axios.get("https://api.tvmaze.com/search/shows?q="+inputt.value).then(arr22=>{
    Inpcart.innerHTML=""
arr22.data.forEach(element=>{
    Inpcart.innerHTML+=`
    <div class="d-flex  flex-row gap-2"><img style="width: 30px; height: 30px;" src="${element.show.image?.medium}" alt="">
    <p >${element.show.name}</p>
   </div>
    `
})
   
   })
})
inputt.addEventListener('keydown',function () {
    Inpcart.classList.remove('d-none')
 
    axios.get("https://api.tvmaze.com/search/shows?q="+inputt.value).then(arr22=>{
    Inpcart.innerHTML=""
arr22.data.forEach(element=>{
    Inpcart.innerHTML+=`
    <div class="d-flex flex-row gap-2"><img style="width: 30px; height: 30px;" src="${element.show.image?.medium}" alt="">
    <p >${element.show.name}</p>
   </div>
    `
})
   
   })
})
