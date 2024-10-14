//basic setup
//creates a new scene 
const scene = new THREE.Scene();
//creates a PerspectiveCamera which mimics how human eye percieve depth:
//75 argument sets the field of view in degrees
//second argument defines the aspect ratio (screen width divided by height)
//0.1 and 1000 define the near and far clipping planes. Objects closer than 0.1
//units or farther than 1000 units from the camera won't be rendered
const camera = new THREE.PerspectiveCamera(
    75, window.innerWidth / window.innerHeight, 0.1, 1000);
//handles the actual drawing of the scene onto the screen using WebGL
const renderer = new THREE.WebGLRenderer();
//set renderer size where it fills the entire screen
renderer.setSize(window.innerWidth, window.innerHeight);
//adds the renderer's canvas to the webpage so it appears on the screen
document.body.appendChild(renderer.domElement);

