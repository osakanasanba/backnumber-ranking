const search =
document.getElementById("search")

const results =
document.getElementById("results")

const display =
document.getElementById("display")

let selected=""

search.addEventListener("input",()=>{

results.innerHTML=""

const value=
search.value.toLowerCase()

songs
.filter(x=>

x.toLowerCase()
.includes(value)

)

.slice(0,20)

.forEach(song=>{

const div=
document.createElement("div")

div.className="resultItem"

div.innerText=song

div.onclick=()=>{

selected=song

search.value=song

results.innerHTML=""

}

results.appendChild(div)

})

})

document
.getElementById("showRank")
.onclick=async()=>{

if(!selected)return

display.innerHTML="検索中..."

await wait(1000)

display.innerHTML="3"

await wait(700)

display.innerHTML="2"

await wait(700)

display.innerHTML="1"

await wait(700)

const rank=
ranking[selected]

if(!rank){

display.innerHTML=

"😭<br>圏外"

return

}

if(rank<=10){

display.className="top10"

display.innerHTML=

`
✨TOP10✨
<br>

第${rank}位!!

🎉🎉🎉
`

}else{

display.className=""

display.innerHTML=

`第${rank}位`

}

}

function wait(ms){

return new Promise(r=>

setTimeout(r,ms))

}
