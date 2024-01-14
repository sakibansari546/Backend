let btns = document.querySelectorAll("button");

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        console.log("click");
    })
    btn.style.backgroundColor = "black"
    btn.style.color = "white"
})