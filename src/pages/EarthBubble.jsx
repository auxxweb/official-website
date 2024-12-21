
import { useRef, useEffect } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { Sphere, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { gsap } from 'gsap'

const bubbleData = [
  { size: 1.2, delay: 0 },
  { size: 0.8, delay: 0.2 },
  { size: 1.5, delay: 0.4 },
  { size: 1, delay: 0.6 },
  { size: 0.7, delay: 0.8 },
  { size: 1.3, delay: 1 },
  { size: 0.9, delay: 1.2 },
  { size: 1.1, delay: 1.4 },
]

function EarthBubble({ position, size }) {
  const meshRef = useRef()
  const [colorMap, normalMap, specularMap] = useLoader(TextureLoader, [
    '/assets/earth_daymap.jpg',
    '/assets/earth_normal_map.jpg',
    '/assets/earth_specular_map.jpg'
  ])

  useEffect(() => {
    if (meshRef.current) {
      gsap.to(meshRef.current.position, {
        x: position[0] + (Math.random() - 0.5) * 2,
        y: position[1] + (Math.random() - 0.5) * 2,
        z: position[2] + (Math.random() - 0.5) * 2,
        duration: 10 + Math.random() * 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }
  }, [position])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002
    }
  })

  return (
    <Sphere ref={meshRef} args={[size, 64, 64]} position={position}>
      <meshPhongMaterial
        map={colorMap}
        normalMap={normalMap}
        specularMap={specularMap}
        shininess={5}
      />
    </Sphere>
  )
}

export default function EarthBubbles() {
  return (
    <div className="w-full h-screen bg-black">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <ambientLight intensity={0.1} />
        <directionalLight color="white" position={[5, 5, 5]} />
        <OrbitControls enableZoom={false} />
        {bubbleData.map((bubble, index) => (
          <EarthBubble
            key={index}
            position={[
              (Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 10
            ]}
            size={bubble.size}
          />
        ))}
      </Canvas>
    </div>
  )
}

