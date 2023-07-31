function hexGenrator() {
    hex = '#';
    for (let i = 0; i < 6; i++) {
        let colors = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        
        let number = Math.floor(Math.random() * colors.length) ;
        hex += colors[number];
    }
    return hex;
}

let btn = document.getElementById("btn");
let clr = btn.addEventListener('click', () => {
    document.body.style.backgroundColor = hexGenrator();
    let output = document.getElementById("result");
output.textContent = hexGenrator();
});



