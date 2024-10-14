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

//adding a cube:
//cretaes a cube with dimensions of 1x1x1 (width, height, depth)
//geometry object contains the vertices and faces that define the 3D shape of the cube
const geometry = new THREE.BoxGeometry();
//MeshBasicMaterial defines how the surface of the cube looks 
//MeshBasicMaterial doesn't react to lighting
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
//cube is now our 3D object, a Mesh takes geometry and material 
//and combines them to render something visible
const cube = new THREE.Mesh(geometry, material);
//adds cube to the scene
scene.add(cube);
