document.addEventListener("DOMContentLoaded", function () {
    const startBtn = document.getElementById("start")
    let quoteContainer = document.getElementById("quote")

    startBtn.addEventListener("click",async function () {
        try {
            const response = await fetch("https://api.adviceslip.com/advice?t="+ Date.now());
            const data = await response.json();
            quoteContainer.innerText = data.slip.advice;
        } catch (error) {
            console.error("ERR", error);
            quoteContainer.innerText = "oops...";
        }

    })
})