//body will refer to the same <body> element as document.body.
//you can use body to manipulate the <body> element directly
 const body=document.body
body.append('hip')
const div=document.createElement("div")
body.append(div)
div.innerText='hello world'
div.textContent='youyou'
div.innerHTML="<strong>test innerHTML</strong>"

const strong=document.createElement('strong')
strong.innerText="test strong"
body.append(strong)

const el1=document.querySelector("#w1")
//console.log(el1)
el1.setAttribute("title", "helloButton")
//el1.remove()
el1.id="qwert"
console.log(el1.id)
el1.classList.add('new-class',"another")

