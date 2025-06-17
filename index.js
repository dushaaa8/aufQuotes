document.addEventListener("DOMContentLoaded", function () {
    const startBtn = document.getElementById("start")
    let quoteContainer = document.getElementById("quote")

    startBtn.addEventListener("click",async function () { // async is important for fatch!!!
        try {
            const response = await fetch("https://api.adviceslip.com/advice?t="+ Date.now()); // getting object form API
            const data = await response.json(); // server obj -> js obj
            quoteContainer.innerText = data.slip.advice; // text from js obj
        } catch (error) {
            console.error("ERR", error);
            quoteContainer.innerText = "oops..."; // err
        }

    })
})