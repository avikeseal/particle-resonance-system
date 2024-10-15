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

//adding black particles:
//particle size:
const geometry = new THREE.SphereGeometry(0.2, 32, 32)
//color:
const material = new THREE.MeshBasicMaterial({color: 0x000000});
const particle1 = new THREE.Mesh(geometry, material);
const particle = new THREE.Mesh(geometry, material);

scene.add(particle1);
scene.add(particle2);

//camera position:
camera.position.z = 5;

//animation loop:
let angle = 0;
const radius = 2; //orbit radius


