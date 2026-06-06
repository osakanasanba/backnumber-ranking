const search=
document.getElementById(
"search"
)

const results=
document.getElementById(
"results"
)

const display=
document.getElementById(
"display"
)

let selected=""

let history=

JSON.parse(

localStorage.getItem(
"history"
)

)||[]

renderHistory()

search.addEventListener(
"input",
()=>{

results.innerHTML=""

const value=

search.value
.toLowerCase()

songs

.filter(

x=>

x.toLowerCase()
.includes(value)

)

.slice(0,20)

.forEach(song=>{

const div=
document.createElement(
"div"
)

div.className=
"resultItem"

div.innerText=
song

div.onclick=()=>{

selected=song

search.value=song

results.innerHTML=""

}

results.appendChild(
div
)

})

}

)

document
.getElementById(
"showRank"
)
.onclick=async()=>{

if(!selected)return

display.className=""

display.innerHTML=

"検索中..."

await wait(1000)

display.innerHTML="3"

await wait(700)

display.innerHTML="2"

await wait(700)

display.innerHTML="1"

await wait(700)

const rank=

ranking[selected]

saveHistory(

selected,

rank

)

if(!rank){

display.innerHTML=

"😭<br>圏外"

return

}

if(rank<=10){

display.className=

"top10"

display.innerHTML=

`

✨TOP10✨

<br>

第${rank}位!!

<br>

🎉🎉🎉

`

}else{

display.innerHTML=

`第${rank}位`

}

}

function wait(ms){

return new Promise(

r=>

setTimeout(
r,
ms
)

)

}

function saveHistory(

song,

rank

){

if(

history.find(

x=>

x.song===song

)

)return

history.unshift({

song,

rank

})

localStorage.setItem(

"history",

JSON.stringify(
history
)

)

renderHistory()

}

function renderHistory(){

const top10=

history.filter(

x=>

x.rank<=10

).length

document
.getElementById(
"history"
)

.innerHTML=

`

<h2>

発見率

</h2>

<div>

${history.length}

/

${songs.length}

曲

</div>

<div>

TOP10

${top10}/10

</div>

<hr>

${history.map(

x=>

`

<div class="historyItem">

${x.song}

→

${x.rank?

`${x.rank}位`

:

"圏外"

}

</div>

`

).join("")}

`

}

function resetHistory(){

localStorage.removeItem(
"history"
)

history=[]

renderHistory()

}
