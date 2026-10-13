const demo = document.querySelector(`#demo`)
//console.log(demo)


demo.addEventListener(`mouseover`, displayIMG)
demo.addEventListener(`mouseout`, removeImg)

function displayIMG(event){
    //console.log(event)
    if (!isImgDisplayed && event.target === demo){
        const img = document.createElement("img")
        img.src = `./img/kep.jpg`
        img.alt = `elegtelen`

        demo.replaceChildren(img)
        isImgDisplayed = true
    }
}


function removeImg(event){
    //console.log(event)
    if (!isImgRemoved && event.target === demo){
        const img = document.createElement("img")
        img.src = `./img/kep.jpg`
        img.alt = `elegtelen`

        demo.replaceChildren(img)
        isImgRemoved = false
    }
}