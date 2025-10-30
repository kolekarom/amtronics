"use client"

import { Canvas } from "@react-three/fiber"
import { useRef } from "react"
import type * as THREE from "three"
import { useFrame } from "@react-three/fiber"

function AnimatedCube() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005
      meshRef.current.rotation.y += 0.008
    }
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshPhongMaterial color="#0066CC" wireframe={false} />
    </mesh>
  )
}

export default function RotatingCube() {
  return (
    <Canvas className="w-full h-full">
      <AnimatedCube />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
    </Canvas>
  )
}
