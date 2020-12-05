document.getElementById("copy-button").onclick = () => {
    var copyText = document.getElementById("password");
    copyText.select();
    document.execCommand("copy");
}