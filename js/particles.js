//basic setup:
const scene = new THREE.Scene();
//set the background color to cream white:
scene.background = new THREE.Color(0xfcfbf4);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth
    / window.innerHeight, 0.1, 1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appenChild(renderer.domElement);
