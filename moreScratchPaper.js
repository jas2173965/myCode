const divs = document.querySelectorAll("div")

document.addEventListener("click", e => {
    if (e.target.parentNode.matches("div")){
        console.log('hi')
    }
})

