import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Hero3DCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x07070b, 0.0018);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 18;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // 1. Central 3D Royal Jewel Mesh (Icosahedron + Wireframe Crown Geometry)
    const jewelGroup = new THREE.Group();
    scene.add(jewelGroup);

    // Inner glowing sphere core
    const coreGeo = new THREE.IcosahedronGeometry(2.5, 2);
    const coreMat = new THREE.MeshPhongMaterial({
      color: 0x8b1a1a,
      emissive: 0xd4af37,
      emissiveIntensity: 0.4,
      shininess: 90,
      flatShading: true,
      wireframe: false,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    jewelGroup.add(coreMesh);

    // Outer wireframe royal crown geometry
    const outerGeo = new THREE.IcosahedronGeometry(4.2, 1);
    const outerMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.9,
      roughness: 0.2,
      wireframe: true,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    jewelGroup.add(outerMesh);

    // Floating orbital rings (Royal Orbit)
    const ringGeo = new THREE.TorusGeometry(6, 0.04, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0xd4af37, transparent: true, opacity: 0.6 });
    const ring1 = new THREE.Mesh(ringGeo, ringMat);
    ring1.rotation.x = Math.PI / 3;
    jewelGroup.add(ring1);

    const ring2 = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color: 0x8b1a1a, transparent: true, opacity: 0.5 }));
    ring2.rotation.y = Math.PI / 4;
    jewelGroup.add(ring2);

    // 2. 3D Particle Constellation
    const particleCount = 700;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    const goldColor = new THREE.Color(0xd4af37);
    const crimsonColor = new THREE.Color(0x8b1a1a);
    const whiteColor = new THREE.Color(0xffffff);

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 60;
      const y = (Math.random() - 0.5) * 60;
      const z = (Math.random() - 0.5) * 60;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Color variation between Gold, Crimson, and Bright Sparkle
      const mix = Math.random();
      let pColor;
      if (mix > 0.6) pColor = goldColor;
      else if (mix > 0.25) pColor = crimsonColor;
      else pColor = whiteColor;

      colors[i * 3] = pColor.r;
      colors[i * 3 + 1] = pColor.g;
      colors[i * 3 + 2] = pColor.b;

      scales[i] = Math.random() * 0.15 + 0.05;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle texture canvas creation
    const particleCanvas = document.createElement('canvas');
    particleCanvas.width = 64;
    particleCanvas.height = 64;
    const pCtx = particleCanvas.getContext('2d');
    const grad = pCtx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.3, 'rgba(212, 175, 55, 0.8)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    pCtx.fillStyle = grad;
    pCtx.beginPath();
    pCtx.arc(32, 32, 32, 0, Math.PI * 2);
    pCtx.fill();

    const particleTexture = new THREE.CanvasTexture(particleCanvas);
    const pMaterial = new THREE.PointsMaterial({
      size: 0.6,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particleSystem = new THREE.Points(geometry, pMaterial);
    scene.add(particleSystem);

    // 3. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xd4af37, 2, 50);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x8b1a1a, 3, 50);
    pointLight2.position.set(-10, -10, 5);
    scene.add(pointLight2);

    // Mouse interactive tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX - window.innerWidth / 2) * 0.0008;
      mouseY = (event.clientY - window.innerHeight / 2) * 0.0008;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Rotate 3D jewel group
      jewelGroup.rotation.y = elapsedTime * 0.25 + targetX * 2;
      jewelGroup.rotation.x = Math.sin(elapsedTime * 0.15) * 0.2 + targetY * 2;
      jewelGroup.position.y = Math.sin(elapsedTime * 0.8) * 0.4;

      ring1.rotation.z = elapsedTime * 0.3;
      ring2.rotation.z = -elapsedTime * 0.4;

      // Rotate particle constellation
      particleSystem.rotation.y = elapsedTime * 0.04 + targetX;
      particleSystem.rotation.x = elapsedTime * 0.02 + targetY;

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
}
