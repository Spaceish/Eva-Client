function downloadEvaClient() {
    q = prompt("Introdu cod secret (01100101 01110110 01100001 01101100 01101111 01101100)> ")
    if (q !== "evalol") {
        alert("Te rog sa introduci un cod valid")
    }
    else if (q === "01100101 01110110 01100001 01101100 01101111 01101100") {
        window.open("https://github.com/ZenoMilk12/EvaClient/releases/download/e1/EvaClient.rar")
    }
    else if (q === "evalol") {
        window.open("https://github.com/ZenoMilk12/EvaClient/releases/download/e1/EvaClient.rar")
    }
}