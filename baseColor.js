let clrList = ["red", "pink", "yellow", "green", "purple", "blue"]
let clrText = document.getElementById("result");
let btn = document.getElementById("btn");
btn.addEventListener('click', () => {
    let number = Math.floor(Math.random() * clrList.length);
    document.body.style.backgroundColor = clrList[number];
    document.getElementById("result").textContent = clrList[number];
     clrText.style.color = clrList[number];
})