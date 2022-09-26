let myNodelist = document.getElementsByTagName("LI")
let index;
for(index = 0; index < myNodelist.length; index++){
    let span = document.createElement("SPAN")
    let txt = document.createTextNode("\u00D7")
    span.className = "close"
    span.appendChild(txt)
    myNodelist[index].appendChild(span)
}

let close = document.getElementsByClassName("close")
let item;
for(item = 0; item < close.length; item++ ){
    close[item].onclick = function() 
    {
        let div = this.parentElement;
        div.style.display = "none"
    }
}

let list = document.querySelector("ul")
list.addEventListener("click", function(ev) {
    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle('checked')
    }
})


function newElement() {
    let li = document.createElement("li")
    let inputValue = document.querySelector("#task").value
    let t = document.createTextNode(inputValue)
    li.appendChild(t)
    if (inputValue === "") {
        alert("Hatalı giriş yaptınız!")
    }else{
        document.querySelector("#list").appendChild(li)
    }
    document.querySelector("#list").value = ""
    let span = document.createElement("SPAN")
    let txt = document.createElement("txt")
    span.className = "close"
    span.appendChild(txt)
    li.appendChild(span)
    for (index = 0 ; index < inputValue.length ; index++){
        localStorage.setItem("index", inputValue)

    }
    


    for (index = 0 ; index < close.length; index++) {
        close[index].onclick = function() {
            let div = this.parentElement
            div.style.display = "none"
        }
    }
}






