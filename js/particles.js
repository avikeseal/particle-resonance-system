//canvas element where we will draw our WebGl content
const canvas = document.getElementById('particleCanvas');

//getting WebGl context from the canvas
//this is what allows us to draw using WebGl functions
let gl = canvas.getContext('webgl');

//checking if WebGl is supported by thr browser
//if not, fallback to experimental-webgl, which is a backward-compatible version
if (!gl) {
    console.log('WebGl not supported, falling back on experimental-webgl');
    gl = canvas.getContext('experimental-webgl');
}

//if neither WebGl nor experimental-webgl is available, alert the user 
if (!gl) {
    alert('Your browser does not support WebGl');
}