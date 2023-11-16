const start = document.getElementById("start")
const stop = document.getElementById("stop")
const body = document.querySelector('#targetBox')

const randomColor = function () {
    const hex ="abcdef1234567890"
    let color = ""

    for (let i = 0; i < 6 ; i++ ) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return "#"+color
}
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }
let IntervalId
const startChangeColor = function() {
    if (!IntervalId) {
        IntervalId = setInterval(() => {
            // body.style.backgroundColor = randomColor()
            body.innerHTML =
            `<h1 class="mt-md text-center colorchn" style="padding: 30px;
            background:linear-gradient(90deg, 
                rgba(${hexToRgb(randomColor()).r},${hexToRgb(randomColor()).g},${hexToRgb(randomColor()).b},1) 0%, 
                rgba(${hexToRgb(randomColor()).r },${hexToRgb(randomColor()).g},${hexToRgb(randomColor()).b},1) 35%, 
                rgba(${hexToRgb(randomColor()).r },${hexToRgb(randomColor()).g},${hexToRgb(randomColor()).b},1) 100%);">Coler Change</h1`
        }, 500);  
    }

    
}

const stopChangeColor = function() {
    clearInterval(IntervalId)
    IntervalId = null
}


start.addEventListener("click", startChangeColor)
stop.addEventListener("click", stopChangeColor)

