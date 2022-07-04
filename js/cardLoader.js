let arts = document.getElementsByTagName('article')
let lastscroll = 0
const art = arts[Math.floor(Math.random()*arts.length)]
console.log(art)
localStorage.setItem('arts',art.getElementsByClassName('txt')[0].textContent)
for (let i = 0; i < arts.length; i++) {
    const element = arts[i];
    element.addEventListener('click', () => {openCard(element)})
}
const cardFolder = document.getElementById('cards')
const baseHTML = cardFolder.innerHTML;
function openCard(sender){
    lastscroll = window.scrollY
    sender.getElementsByTagName('img')[0].style.height = '200px'
    let cardHTML = "<button id='backBtn' class='btn' onClick='closeCard()'>Back</button>"+"<div class='cardContent text-justify'>"+sender.innerHTML + "</div>"
    cardFolder.innerHTML = cardHTML
    document.title = "Совет: " + sender.getElementsByTagName('h1')[0].textContent
    window.scrollTo(0,0)
}
function closeCard(){
    cardFolder.innerHTML = baseHTML
    document.title = "Очумелые ручки"
    setListeners()
    window.scrollTo(0,lastscroll)
}
function setListeners(){
    let arts = document.getElementsByTagName('article')
    for (let i = 0; i < arts.length; i++) {
    const element = arts[i];
    element.addEventListener('click', () => {openCard(element)})
    }
}