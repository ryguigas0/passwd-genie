const ipc = require("electron").ipcRenderer

function checkStrength(e) {
    let feedbackDisplay = document.getElementById("feedback")
    let password = e.target.value
    if (password.length > 0) ipc.send("checkPassword", password)
    else feedbackDisplay.innerText = ""
}

ipc.on("passwordChecked", (event, score) => {
    let feedbackDisplay = document.getElementById("feedback")
    switch (score) {
        case 0:
            feedbackDisplay.innerText = "Very weak!"
            feedbackDisplay.style.backgroundColor = "red"
            break;
        case 1:
            feedbackDisplay.innerText = "Weak!"
            feedbackDisplay.style.backgroundColor = "tomato"
            break;
        case 2:
            feedbackDisplay.innerText = "Ok!"
            feedbackDisplay.style.color = "black"
            feedbackDisplay.style.backgroundColor = "yellow"
            break;
        case 3:
            feedbackDisplay.innerText = "Strong!"
            feedbackDisplay.style.backgroundColor = "greenYellow"
            break;
        case 4:
            feedbackDisplay.innerText = "Very strong!"
            feedbackDisplay.style.backgroundColor = "green"
            break;
    }
})