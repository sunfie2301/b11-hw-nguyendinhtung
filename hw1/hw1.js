const btn = document.getElementById("btn");
const bg = document.getElementById("container");

btn.onclick = function () {
    let arr = [];
    for (let i = 0; i < 3; i++) {
        let num = Math.floor(Math.random() * 256);
        arr.push(num);
    }
    let rgb = "rgb(" + arr[0] + "," + arr[1] + "," + arr[2] + ")";
    bg.style.backgroundColor = rgb;
}