import * as THREE from 'three';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x262626);

const fov = 70;
  const aspect = window.innerWidth / window.innerHeight;
  const near = 0.1;
  const far = 1000;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
  camera.position.set(0, 0, 15);

const renderer = new THREE.WebGL1Renderer()

console.log(scene)
console.log(camera)
console.log(renderer)

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement)

const pointlight = new THREE.PointLight(0xffffff, 1);
  pointlight.position.set(0, 2, 12);
  scene.add(pointlight);

// const sphereGeometry =  new THREE.BoxGeometry(1,1,1)
// const material = new THREE.MeshBasicMaterial({
//   // roughness: 0.5,
//   // map: new THREE.TextureLoader().load("../public/imgs/globe.PNG")
//   color: 0x00ff00
// })

// console.log(sphereGeometry)
// console.log(material)

// const mesh = new THREE.Mesh (sphereGeometry,material)
// console.log(mesh)

// scene.add(mesh)

const obj = new THREE.Mesh(
  new THREE.SphereGeometry(5, 32, 16),
  new THREE.MeshStandardMaterial({
    // roughness: 0.5,
    map: new THREE.TextureLoader().load("./imgs/globe.PNG")
  })
)
scene.add(obj);


function render(time) {
  time *= 0.0005;  // convert time to seconds

  // obj.rotation.x = time;
  obj.rotation.y = time;

  renderer.render(scene, camera);

  requestAnimationFrame(render);
}
requestAnimationFrame(render);

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', onWindowResize);