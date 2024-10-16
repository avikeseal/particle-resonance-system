//basic setup:
const scene = new THREE.Scene();
//set the background color to cream white:
//scene.background = new THREE.Color(0xfcfbf4);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth
    / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


//particle system setup with just two partcles:
const particleCount = 2;
const particles = new THREE.BufferGeometry();
const positions = new Float32Array(particleCount * 3);

//manually position two particles in 3D space:
positions[0] = -1; //x of particle 1
positions[1] = 0; //y of particle 1
positions[2] = 0; //z of particle 1

positions[0] = -1; //x of particle 2
positions[0] = -1; //y of particle 2
positions[0] = -1; //z of particle 2

particle.setAttribute('position', new THREE.BUfferAttribute(poisitions, 3));


//particle material:
const particleMaterial = new THREE.PointsMaterial({
    color: 0xffffff, //white color
    size: 0.1 //size 
});

//creating particle system:
const particleSystem = new THREE.Points(particles, particleMaterial);
scene.add(particleSystem);

//set camera position:
camera.position.z = 5;

//rendering loop:
function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
}

animate();



