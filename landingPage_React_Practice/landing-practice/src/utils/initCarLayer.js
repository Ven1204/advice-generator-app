import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import gsap from 'gsap';

let camera, scene, renderer;
const loader = new GLTFLoader();

export function init() {

	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
	camera.position.z = 1.5;
    camera.rotation.z = 0;
    camera.position.y = .2;

	scene = new THREE.Scene();

    const light = new THREE.AmbientLight( 0xffffff, 2 );
    scene.add( light );


    loader.load("/models/car1/scene.gltf", (gltf) => {
        let model = gltf.scene
        model.scale.set(.20, .20, -.20)

        gsap.to(camera.position, {
            z: 1,
            duration: 3,
            ease: "back.out(1)",
            y: .2
        })
        // gsap.to(camera.rotation, {
        //     z: 0,
        //     duration: 1
        // })

        gsap.to(model.rotation, {
            x: 0.2,
            y: -0.4,
            duration: 1,
            delay: 1
        })
        gsap.to(model.rotation, {
            y: Math.PI * 1.7,
            x: .3,
            duration: 2,
            delay: 2
        })

        gsap.to(model.position, {
            delay: 4,
            duration: 1,
            x: .4,
            y: .40
        })

        gsap.to(model.rotation, {
          delay: 4,
          duration: 1,
          x: .5,
        })

        gsap.to(model.scale, {
          delay: 4,
          duration: 1,
          x: .15,
          y: .15,
          z: -.15
        })

        scene.add(model)
    })

	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setAnimationLoop( animation );
    renderer.setClearColor( 0x282828, 1 );
	document.body.appendChild( renderer.domElement );

    window.addEventListener( 'resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize( window.innerWidth, window.innerHeight );
    });
}

function animation() {
	renderer.render( scene, camera );

}
